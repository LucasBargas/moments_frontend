import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-share-page',
  templateUrl: './share-page.component.html',
  styleUrls: ['./share-page.component.scss']
})
export class SharePageComponent implements OnInit, OnDestroy {
  loading: boolean = true;
  btnText = 'Compartilhar';

  constructor(private titleService: Title) {
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
}
