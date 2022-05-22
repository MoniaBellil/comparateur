import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signIn(data : any) {
    return this.http.post(`${environment.baseUrl}login`,data);
  }
  checkAccesToken(data : any) {
    console.log(data)
    return this.http.post(`${environment.baseUrl}verify`,data);
  }
  
  
}
