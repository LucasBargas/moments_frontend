import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
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
      this.comments = comments;
    });

    this.momentService.getMomentById(id!).subscribe((moment) => {
      this.moment = moment;
      this.titleService.setTitle(`Moments | ${moment._id}`);
    });
  }

  ngOnDestroy(): void {
    this.loading = true;
  }

  handleRedirectButton(redirectDir: string) {
    this.router.navigate([`/moment/editar/${redirectDir}`]);
  }

  handleDeleteMoment(id: string): void {
    this.momentService.deleteMoment(id).subscribe();
    this.messageService.addMessage('Momento deletado com sucesso!');
    this.router.navigate([`/`]);
  }
}
