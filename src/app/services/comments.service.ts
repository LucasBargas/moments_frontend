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

  listCommentsById(id: string) {
    return this.http.get<IComment[]>(`${this.apiBaseUrl}/${id}`);
  }
}
