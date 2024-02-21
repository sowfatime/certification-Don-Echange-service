import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { api } from '../../models/apiUrl';


@Injectable({
  providedIn: 'root'
})
export class CategorisService {
  [x: string]: any; 

  constructor(private http : HttpClient) {}

  getCategories(): Observable<any>{
    return this.http.get<any>(`${api}/categories/`)
  }

  getLocalites():  Observable<any>{
    return this.http.get<any>(`${api}/localites/`)
  }
}
