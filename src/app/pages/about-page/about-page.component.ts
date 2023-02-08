import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit, OnDestroy {
  loading: boolean = true;

  constructor(private titleService: Title) {
    this.titleService.setTitle('Moments | Sobre');
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
