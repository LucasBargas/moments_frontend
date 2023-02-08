import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { IMoment } from 'src/app/interfaces/IMoment';
import { MomentsService } from 'src/app/services/moments.service';
import { MessagesService } from 'src/app/services/messages.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-share-page',
  templateUrl: './share-page.component.html',
  styleUrls: ['./share-page.component.scss']
})
export class SharePageComponent implements OnInit, OnDestroy {
  loading: boolean = true;
  btnText = 'Compartilhar';

  constructor(
    private titleService: Title,
    private momentService: MomentsService,
    private messageService: MessagesService,
    private router: Router
  ) {
    this.titleService.setTitle('Moments | Compartilhar');
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, 600);
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

    this.momentService.createMoment(formData).subscribe();
    this.messageService.addMessage('Momento adicionado com sucesso!');
    this.router.navigate(['/']);
  }
}
