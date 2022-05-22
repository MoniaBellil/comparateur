import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LegalProtectionService {


  constructor(private http: HttpClient) { }


  getlegalProtectionNeoliane(data : any) {
    return this.http.post(`${environment.baseUrl}offres/getProtectionJuridique`,data);
  }
}
