import { Injectable } from '@angular/core';
import { IMoment } from '../interfaces/IMoment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MomentsService {
  private apiBaseUrl = `${environment.apiUrl}moments`;
  constructor(private http: HttpClient) { }

  createMoment(formData: FormData): Observable<FormData> {
    console.log(formData);
    return this.http.post<FormData>(this.apiBaseUrl, formData);
  }
}
