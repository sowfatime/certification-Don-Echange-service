import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { api } from 'src/app/models/apiUrl';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http :  HttpClient) { }
  getUser() : Observable<any>{
    return this.http.get<any>(`${api}/users`);
  }
}
