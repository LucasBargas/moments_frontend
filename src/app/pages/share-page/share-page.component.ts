import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { IMoment } from 'src/app/interfaces/IMoment';
import { MomentsService } from 'src/app/services/moments.service';

@Component({
  selector: 'app-share-page',
  templateUrl: './share-page.component.html',
  styleUrls: ['./share-page.component.scss']
})
export class SharePageComponent implements OnInit, OnDestroy {
  loading: boolean = true;
  btnText = 'Compartilhar';

  constructor(private titleService: Title, private momentService: MomentsService) {
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

  async createHandler(moment: IMoment) {
    const formData = new FormData();

    if (!moment.image) return;

    formData.append('title', moment.title);
    formData.append('description', moment.description);
    formData.append('image', moment.image);

    await this.momentService.createMoment(formData).subscribe();
  }
}
