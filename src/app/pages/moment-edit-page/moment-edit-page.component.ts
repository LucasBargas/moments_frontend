import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { ActivatedRoute, Router } from '@angular/router';
import { IMoment } from 'src/app/interfaces/IMoment';
import { MessagesService } from 'src/app/services/messages.service';
import { MomentsService } from 'src/app/services/moments.service';

@Component({
  selector: 'app-moment-edit-page',
  templateUrl: './moment-edit-page.component.html',
  styleUrls: ['./moment-edit-page.component.scss']
})
export class MomentEditPageComponent implements OnInit, OnDestroy {
  loading: boolean = true;
  btnText = 'Atualizar';
  id = this.route.snapshot.paramMap.get('id');
  constructor(
    private momentService: MomentsService,
    private titleService: Title,
    private route: ActivatedRoute,
    private messageService: MessagesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, 600);

    this.momentService.getMomentById(this.id!).subscribe((moment) => {
      this.titleService.setTitle(`Moments | Editar | ${moment._id}`);
    });
  }

  ngOnDestroy(): void {
    this.loading = true;
  }

  createHandler(moment: IMoment) {
    const formData = new FormData();

    if (!moment.image) return;

    formData.append('title', moment.title);
    formData.append('description', moment.description);
    formData.append('image', moment.image);

    this.momentService.updateMoment(formData, this.id!).subscribe();
    this.messageService.addMessage('Momento atualizado com sucesso!');
    this.router.navigate(['/']);
  }
}
