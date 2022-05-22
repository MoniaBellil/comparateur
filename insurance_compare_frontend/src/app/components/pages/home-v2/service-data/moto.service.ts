import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class MotoService {

  constructor(private http: HttpClient) { }

  getMotoInsurance(data : any) {
    return this.http.post(`${environment.baseUrl}offres/getMoto`,data);
  }

  saveOffer(data : any) {
    return this.http.post(`${environment.baseUrl}GetUpdateClient`,data);
  }

  }
