import { Component, OnDestroy, OnInit} from '@angular/core';
import { Router,NavigationStart, Event as NavigationEvent } from '@angular/router';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isOpened: boolean = false;
  faBars = faBars;
  faXmark = faXmark;
  route!: string;
  headerChange = false;
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

  ngOnInit() {
    const handleScroll = () => {
      if (window.pageYOffset > 80) {
        this.headerChange = true;
      } else if (window.pageYOffset < 80) {
        this.headerChange = false;
      }
    }

    window.addEventListener('scroll', handleScroll)
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
