import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { api } from '../models/apiUrl';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  

  constructor(private http: HttpClient) { }

  getArticle(): Observable<any> {
    return this.http.get<any>(`${api}/articles`);
  }


  ajouterArticle(article: any): Observable<any> {
    const accessToken = localStorage.getItem('access_token');
    return accessToken
      ? this.http.post<any>(`${api}/articles`, article, {
        headers: new HttpHeaders({ 'Authorization': `Bearer ${accessToken}` })
        })
      : of(null);
  }
}
