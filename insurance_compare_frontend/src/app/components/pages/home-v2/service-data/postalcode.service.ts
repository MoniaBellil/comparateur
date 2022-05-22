import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostalcodeService {

 
  constructor(private http: HttpClient) { }

  CheckZipCodeExist(data) {
    return this.http.post(`${environment.baseUrl}checkCodePostal`,data);
  }
}
