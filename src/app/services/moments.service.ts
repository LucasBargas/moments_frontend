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
    return this.http.post<FormData>(this.apiBaseUrl, formData);
  }

  listMoments(): Observable<IMoment[]> {
    return this.http.get<IMoment[]>(this.apiBaseUrl);
  }

  getMomentById(id: string): Observable<IMoment> {
    return this.http.get<IMoment>(`${this.apiBaseUrl}/${id}`);
  }

  updateMoment(formData: FormData, id: string): Observable<FormData> {
    return this.http.patch<FormData>(`${this.apiBaseUrl}/${id}`, formData);
  }

  deleteMoment(id: string): Observable<IMoment> {
    return this.http.delete<IMoment>(`${this.apiBaseUrl}/${id}`);
  }
}
