import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentsService } from 'src/app/services/comments.service';
import { IComment } from '../../interfaces/IComment';

@Component({
  selector: 'app-moment-page',
  templateUrl: './moment-page.component.html',
  styleUrls: ['./moment-page.component.scss']
})
export class MomentPageComponent implements OnInit, OnDestroy {
  comments: IComment[] = [];
  loading: boolean = true;
  constructor(
    private route: ActivatedRoute,
    private commentService: CommentsService
  ) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, 600);

    const id = this.route.snapshot.paramMap.get('id');
    this.commentService.listCommentsById(id!).subscribe((comments) => this.comments = comments);
  }

  ngOnDestroy(): void {
    this.loading = true;
  }
}
