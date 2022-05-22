import { Component, OnInit } from '@angular/core';
import service from '../../../../data/service.json';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  categorie = ''
  clicked = false
  constructor() { }
  public service = service;
  path=["/mutual-insurance","/legal-protection-insurance","/moto","/auto-insurance","/animal-insurance","/provident-insurance","energie","défiscalisation","emprunteur","rachat"]
  img = ["assets/img/team/01.jpg","assets/img/team/06.jpg","assets/img/team/03.jpg","assets/img/team/05.jpg", "assets/img/team/04.jpg", "assets/img/team/02.jpg","assets/img/team/15.png","assets/img/team/16.png","assets/img/team/17.png","assets/img/team/19.png"]
  ngOnInit(): void {
  }
 test(i){
 }


 changeCategorie2(){
  this.categorie= 'bien'
  this.clicked = true
  window.scroll({ 
    top :1500,
    left: 0,
    behavior: 'smooth' 
  });
}
changeCategorie3(){
  this.categorie= 'personne'
  this.clicked = true 
  window.scroll({ 
    top :1500,
    left: 0,
    behavior: 'smooth' 
  });
}
}
