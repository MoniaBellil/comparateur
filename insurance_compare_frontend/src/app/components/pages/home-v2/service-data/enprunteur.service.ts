import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EnprunteurService {

 
  constructor(private http: HttpClient) { }


  getEmprunteur(data : any) {
    return this.http.post(`${environment.baseUrl}offres/getEMPRUNTEUR`,data);
  }


}
