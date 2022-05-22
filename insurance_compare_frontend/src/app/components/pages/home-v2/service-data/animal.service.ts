import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  
  constructor(private http: HttpClient) { }


  getAnimal(data : any) {
    return this.http.post(`${environment.baseUrl}offres/getAnimmal`,data);
  }

  getAllChat() {
    return this.http.get(`${environment.baseUrl}getAllchat`);
  }
  getAllChien() {
    return this.http.get(`${environment.baseUrl}getAllchien`);
  }


}
