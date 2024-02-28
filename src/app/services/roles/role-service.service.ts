import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { api } from 'src/app/models/apiUrl';

@Injectable({
  providedIn: 'root'
})
export class RoleServiceService {

  constructor(private http : HttpClient) { }
  addRole(role : any) : Observable<any>{
    return this.http.post<any>(`${api}/roles`, role)
  }
}
