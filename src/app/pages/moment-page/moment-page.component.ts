import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from "@angular/platform-browser";
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';
import { IMoment } from 'src/app/interfaces/IMoment';
import { CommentsService } from 'src/app/services/comments.service';
import { MomentsService } from 'src/app/services/moments.service';
import { environment } from 'src/environments/environment';
import { IComment } from '../../interfaces/IComment';
import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-moment-page',
  templateUrl: './moment-page.component.html',
  styleUrls: ['./moment-page.component.scss']
})
export class MomentPageComponent implements OnInit, OnDestroy {
  moment!: IMoment;
  comments: IComment[] = [];
  loading: boolean = true;
  apiBaseUrl = environment.apiUrl;
  faEdit = faEdit;
  faTimes = faTimes;
  commentForm!: FormGroup;
  constructor(
    private titleService: Title,
    private route: ActivatedRoute,
    private commentService: CommentsService,
    private momentService: MomentsService,
    private messageService: MessagesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, 600);

    const id = this.route.snapshot.paramMap.get('id');

    this.commentService.listCommentsById(id!).subscribe((comments) => {
      const momentsFiltered = this.momentsFiltered(comments)

      this.comments = momentsFiltered;
      console.log(momentsFiltered)
    });

    this.momentService.getMomentById(id!).subscribe((moment) => {
      this.moment = moment;
      this.titleService.setTitle(`Moments | ${moment._id}`);
    });

    this.commentForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      text: new FormControl('', [Validators.required]),
    })
  }

  momentsFiltered(comments: IComment[]): IComment[] {
    return comments.map((comment) => {
      const createdAt = new Date(comment.createdAt!).toLocaleDateString('pt-BR');
      const updatedAt = new Date(comment.updatedAt!).toLocaleDateString('pt-BR');
      return {
        ...comment,
        createdAt,
        updatedAt
      }
    });
  }

  ngOnDestroy(): void {
    this.loading = true;
  }

  get name() {
    return this.commentForm.get('name')!;
  }

  get text() {
    return this.commentForm.get('text')!;
  }

  handleRedirectButton(redirectDir: string) {
    this.router.navigate([`/moment/editar/${redirectDir}`]);
  }

  handleDeleteMoment(id: string): void {
    this.momentService.deleteMoment(id).subscribe();
    this.messageService.addMessage('Momento deletado com sucesso!');
    this.router.navigate([`/`]);
  }

  handleDeleteComment(comment: IComment): void {
    this.comments = this.comments.filter(({ uuid }) => {
      return uuid !== comment.uuid;
    })

    this.commentService.deleteComment(comment.uuid!).subscribe();
  }

  handleSubmit(momentId: string) {
    if (this.commentForm.invalid) return;

    const comment = {
      uuid: uuidv4(),
      ...this.commentForm.value,
    }

    this.comments = [...this.comments, comment];
    this.commentService.postComment(comment, momentId).subscribe();
  }

  handleKeyDown(momentId: string, event: any) {
    if (this.commentForm.invalid) return;

    if (event.key === "Enter") {
      this.handleSubmit(momentId);
    }
  }
}
