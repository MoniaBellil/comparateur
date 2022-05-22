import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAllAdmins(token: any) {
    return this.http.post(`${environment.baseUrl}getAllAdmin`, token);
  }

  AddAdmin(data: any) {
    return this.http.post(`${environment.baseUrl}signup`, data);
  }

  AddAPartner(data: any) {
    return this.http.post(`${environment.baseUrl}newPartenaire`, data);
  }

  getAllPartners() {
    return this.http.get(`${environment.baseUrl}getAllPartenaire`);
  }

  removeUser(data: any) {
    return this.http.post(`${environment.baseUrl}deleteAdmin`, data);
  }
  removePartner(data: any) {
    return this.http.post(`${environment.baseUrl}deletePartenaire`, data);
  }

  getClients(token: any) {
    return this.http.post(`${environment.baseUrl}getListClient`, token);
  }

  getRole(data : any) {
    return this.http.post(`${environment.baseUrl}getRole`,data);
  }


}
