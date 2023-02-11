import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from "@angular/platform-browser";
import { IMoment } from 'src/app/interfaces/IMoment';
import { MomentsService } from 'src/app/services/moments.service';
import { environment } from 'src/environments/environment';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit, OnDestroy {
  loading: boolean = true;
  allMoments: IMoment[] = [];
  moments: IMoment[] = [];
  faSearch = faSearch;
  apiBaseUrl = environment.apiUrl;

  constructor(
    private titleService: Title,
    private momentsService: MomentsService,
  ) {
    this.titleService.setTitle('Moments');
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, 600);

    this.momentsService.listMoments().subscribe((moments) => {
      const momentsFiltered = moments.map((moment) => {
        const createdAt = new Date(moment.createdAt!).toLocaleDateString('pt-BR');
        const updatedAt = new Date(moment.updatedAt!).toLocaleDateString('pt-BR');
        return {
          ...moment,
          createdAt,
          updatedAt
        }
      })

      this.allMoments = momentsFiltered;
      this.moments = momentsFiltered;
    })
  }

  ngOnDestroy(): void {
    this.loading = true;
  }

  handleSearch(event: Event): void {
    const target = event.target as HTMLInputElement;
    const value = target.value;

    this.moments = this.allMoments.filter((moment) => {
      return moment.title.toLowerCase().includes(value.toLowerCase());
    })
  }
}
