import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { api } from 'src/app/models/apiUrl';

@Injectable({
  providedIn: 'root'
})
export class AnnoncesService {
  verifierChamp(arg0: string, status_message: any, arg2: string) {
    throw new Error('Method not implemented.');
  }


  constructor(private http: HttpClient) { }

  getAnnonce(): Observable<any> {
    return this.http.get<any>(`${api}/annonces`);
  }

  getAnnonceByUserConnected(id: number): Observable<any> {
    const accessToken = localStorage.getItem('access_token');

    console.log(accessToken);

    return accessToken ?
      this.http.get<any>(`${api}/annonces/${id}`, {
        headers: new HttpHeaders({ 'Authorization': `Bearer ${accessToken}` })
      }) :
      of(null);
  }

  getDetailAnnonce(annonce: number): Observable<any> {
    return this.http.get<any>(`${api}/detailsAnnonce/${annonce}`);
  }
  getAnnonceAdmin(){
    return this.http.get<any>(`${api}/annonces/admin`);
  }

  ajouterAnnonce(annonce: any): Observable<any> {
    const accessToken = localStorage.getItem('access_token');
    return accessToken
      ? this.http.post<any>(`${api}/annonces`, annonce, {
        headers: new HttpHeaders({ 'Authorization': `Bearer ${accessToken}` })
        })
      : of(null);
  }




// methode pour supprimer une annonce
supprimerAnnonce(id: number): Observable<any> {
  const accessToken = localStorage.getItem('access_token');
  return accessToken
    ? this.http.delete<any>(`${api}/annonces/` + id, {
        headers: new HttpHeaders({'Authorization': `Bearer ${accessToken}` }),
      })
    : of(null);
  }


// methode pour modifier une annonce
updateAnnonce(id: number, annonce: any): Observable<any> {
  const accessToken = localStorage.getItem('access_token');
  return accessToken
    ? this.http.post<any>(`${api}/annonces/${id}`, annonce, {
      headers: new HttpHeaders({'Authorization': `Bearer ${accessToken}` }),
      })
    : of(null);
  }






}
