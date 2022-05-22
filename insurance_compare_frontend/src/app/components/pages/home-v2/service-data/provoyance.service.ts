import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProvoyanceService {


  constructor(private http: HttpClient) { }
  getPrevoyanceNeoliane(data : any) {
    return this.http.post(`${environment.baseUrl}offres/getPrevoyance`,data);
  }
}
