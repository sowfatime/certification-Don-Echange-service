
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from './models/user';

const api = 'http://127.0.0.1:8000/api';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  inscriptiont(formData: FormData) {
    throw new Error('Method not implemented.');
  }
  inscritUser(formData: FormData) {
    throw new Error('Method not implemented.');
  }
  // Signup: any;

  constructor(private http: HttpClient) { }

  singin(data: any): Observable<any> {
    return this.http.post(`http://127.0.0.1:8000/api/inscription`, data);
  }

  login(user: any): Observable<any> {
    return this.http.post<User>(`${api}/login`, user);
  }

  updateClient(data: any, id: number): Observable<any> {
    return this.http.put<any>(`${api}/client/edit/${id}`, data);
  }

  getAllClient(): Observable<any[]> {
    return this.http.get<any[]>(`${api}/client/lister`);
  }

  getClientId(id: number): Observable<any> {
    return this.http.get<any>(`${api}/client/detail/${id}`);
  }

  activeDeactiveEmploye(id: number): Observable<any> {
    const accessToken = localStorage.getItem('access_token');
    return accessToken ? this.http.put<any>(
      `${api}/client/archive/${id}`,
      {},
      {
        headers: new HttpHeaders({ 'Authorization': `Bearer ${accessToken}` })
      }
    ) : of(null);
  }

  logout(): Observable<any> {
    // Implement your logout logic here
    // For example, clearing the access token from localStorage
    localStorage.removeItem('access_token');
    return of(null);
  }
}

