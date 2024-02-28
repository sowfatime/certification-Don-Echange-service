import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { api } from 'src/app/models/apiUrl';

@Injectable({
  providedIn: 'root'
})
export class TypeService {

  constructor( private http : HttpClient) { }
  getTypes():  Observable<any>{
    return this.http.get<any>(`${api}/Types/`)
  }

}
