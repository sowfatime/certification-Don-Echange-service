import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { api } from 'src/app/models/apiUrl';

@Injectable({
  providedIn: 'root'
})
export class ArticleServiceService {

  constructor(private http : HttpClient) { }
  addArticle(post : any): Observable<any>{
    return this.http.post<any>(`${api}/articles`, post)
  }
}
