import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IComment } from '../interfaces/IComment';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  private apiBaseUrl = `${environment.apiUrl}comments`;
  constructor(private http: HttpClient) { }

  listCommentsById(id: string):Observable<IComment[]> {
    return this.http.get<IComment[]>(`${this.apiBaseUrl}/${id}`);
  }

  postComment(comment: { name: string, text: string }, momentId: string): Observable<IComment> {
    return this.http.post<IComment>(`${this.apiBaseUrl}/${momentId}`, comment);
  }

  deleteComment(id: string): Observable<IComment> {
    return this.http.delete<IComment>(`${this.apiBaseUrl}/${id}`);
  }
}
