import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit, OnDestroy {
  loading: boolean = true;

  constructor(private titleService: Title) {
    this.titleService.setTitle('Moments');
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
