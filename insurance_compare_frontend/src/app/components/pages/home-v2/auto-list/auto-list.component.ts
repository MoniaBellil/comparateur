import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-auto-list',
  templateUrl: './auto-list.component.html',
  styleUrls: ['./auto-list.component.css']
})
export class AutoListComponent implements OnInit {

  data: any[] = [];
  name = 'Empty States Pattern';
  constructor(
    private router: Router, private activatedRoute: ActivatedRoute
  ) {
  }
/*
  data = [
     
       {
      "image": "https://devis.netvox-assurances.fr/csf/logos/cpe/logo_mgard.jpg",
      "name": "CONTACT",
      "prix": "81,62 €"
      },
      {
      "image": "https://devis.netvox-assurances.fr/csf/logos/cpe/logo_mgard.jpg",
      "name": "CONTACT +",
      "prix": "104,80 €"
      },
       {
      "image": "https://devis.netvox-assurances.fr/csf/logos/cpe/logo_mgard.jpg",
      "name": "CONFORT",
      "prix": "171,84 €"
      },
      {
      "image": "https://devis.netvox-assurances.fr/csf/logos/cpe/logo_mgard.jpg",
      "name": "SÉRÉNITÉ",
      "prix": "243,66 €"
      }
  ]
  */
  ngOnInit(): void {
   this.data = Object.values(history.state[0].liste) ;
  }
  classname = "";
}
