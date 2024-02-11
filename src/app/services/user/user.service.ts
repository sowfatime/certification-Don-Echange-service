import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { api } from 'src/app/models/apiUrl';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http :  HttpClient) { }
  getUser() : Observable<any>{   
     const accessToken = localStorage.getItem('access_token');

     return accessToken ?
     this.http.get<any>(`${api}/users`, {
       headers: new HttpHeaders({ 'Authorization': `Bearer ${accessToken}` })
     }) :
     of(null);
      }

    bloque(id: number): Observable<any> {
        const accessToken = localStorage.getItem('access_token');
    
        return accessToken ? this.http.put<any>(`${api}/bloquer/${id}`, {}, {
          headers: new HttpHeaders({ 'Authorization': `Bearer ${accessToken}` })
        }) : of(null);
      }


      debloque(id: number): Observable<any> {
        const accessToken = localStorage.getItem('access_token');
    
        return accessToken ? this.http.put<any>(`${api}/debloquer/${id}`, {}, {
          headers: new HttpHeaders({ 'Authorization': `Bearer ${accessToken}` })
        }) : of(null);
      }



}
