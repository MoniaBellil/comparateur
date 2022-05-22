import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MutualService {

  constructor( private http: HttpClient) { }
    getMutualNeoliane(data : any) {
    return this.http.post(`${environment.baseUrl}offres/getSante`,data);
  }
}
