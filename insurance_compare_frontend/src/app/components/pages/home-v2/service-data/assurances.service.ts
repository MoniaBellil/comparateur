import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AssurancesService {

  
  constructor( private http: HttpClient) { }
    getEnergie(data : any) {
    return this.http.post(`${environment.baseUrl}offres/getEnergie`,data);
  }
    getDefiscalisaiton(data : any) {
    return this.http.post(`${environment.baseUrl}offres/getDefiscalisation`,data);
  }
   getRachat(data : any) {
    return this.http.post(`${environment.baseUrl}offres/getRachat`,data);
  }
}
