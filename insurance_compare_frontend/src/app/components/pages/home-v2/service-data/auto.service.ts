import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AutoService {

    
  constructor(private http: HttpClient) { }

  getAllAsurances() {
    return this.http.get(`${environment.baseUrl}getAllasurar`);
  }
  getAutoInsurance(data : any) {
    return this.http.post(`${environment.baseUrl}offres/getAUTO`,data);
  }

}
