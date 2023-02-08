import { Component, OnDestroy} from '@angular/core';
import { Router,NavigationStart, Event as NavigationEvent } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnDestroy {
  isOpened: boolean = false;
  route!: string;
  event$
  constructor(private router: Router) {
    this.event$ = this.router.events
      .subscribe(
        (event: NavigationEvent) => {
          if(event instanceof NavigationStart) {
            this.route = event.url;
          }
        });
  }

  ngOnDestroy() {
    this.event$.unsubscribe();
  }

  handleClick() {
    this.isOpened = !this.isOpened;
  }

  handleOutsideClick(event: any) {
    if (this.isOpened && !event.target.closest('ul')) {
      this.isOpened = false;
    }
  }
}
