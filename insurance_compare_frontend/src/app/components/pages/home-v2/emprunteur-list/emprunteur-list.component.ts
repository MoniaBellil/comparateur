import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-emprunteur-list',
  templateUrl: './emprunteur-list.component.html',
  styleUrls: ['./emprunteur-list.component.css']
})
export class EmprunteurListComponent implements OnInit {

  data: any[] = [];
  name = 'Empty States Pattern';


/*  data = [   {
    "image": "https://pro.simulassur.fr/medias/comparateur/logosCompagnies/compagnie-spiti.png",
    "name": "simulassur",
    "prix": "830 €"
}]
*/
  constructor(
    private router: Router, private activatedRoute: ActivatedRoute
  ) {
  }
  ngOnInit(): void {
    this.data = Object.values(history.state[0].liste) ;
    }
  classname = "";

}
