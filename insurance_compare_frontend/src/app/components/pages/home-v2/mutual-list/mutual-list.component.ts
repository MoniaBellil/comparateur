import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-mutual-list',
  templateUrl: './mutual-list.component.html',
  styleUrls: ['./mutual-list.component.css']
})

export class MutualListComponent implements OnInit {

  ratingHosp: number = 3
  ratingOptique: number  = 2
  ratingDentaire: number = 2
  ratingSoins: number = 3
  starCount: number
  data: any[] = [];
  ratingArr: any[] = [1, 2, 3, 4];
  name = 'Empty States Pattern';
  constructor(
    private router: Router, private activatedRoute: ActivatedRoute

  ) {
  }

  ngOnInit(): void {
    this.data = Object.values(history.state[0].liste) ;
     this.ratingHosp = history.state[1][0]
     this.ratingOptique = history.state[1][1]
     this.ratingDentaire = history.state[1][2]
     this.ratingSoins = history.state[1][3]
     
  }

  classname = "";

  showIcon(index: any, rating: any) {
    if (rating >= index + 1) {
      return 'star';
    } else {
      return 'star_border';
    }
  }

  data1= [
    {
      "name": "Neoliane Vitalite V4",
      "prix": "42,57 €",
      "image": "https://extranet.neoliane.fr/build/images/logo/comparateur/538.svg",
      "Hospitalisation": "200%",
      "Dentaire": "200%",
      "Optique": "100 % + 200 € + 100 € (monture)",
      "Honoraires": "175%",
      "Frais": "20 € à l’adhésion"
    },
    {
      "name": "Neoliane Equilibre EQ6",
      "prix": "46,02 €",
      "image": "https://extranet.neoliane.fr/build/images/logo/comparateur/556.svg",
      "Hospitalisation": "215%",
      "Dentaire": "250%",
      "Optique": "250 €",
      "Honoraires": "200%",
      "Frais": "20 € à l’adhésion"
    },
    {
      "name": "Neoliane Vitalite V4",
      "prix": "42,57 €",
      "image": "https://extranet.neoliane.fr/build/images/logo/comparateur/538.svg",
      "Hospitalisation": "200%",
      "Dentaire": "200%",
      "Optique": "100 % + 200 € + 100 € (monture)",
      "Honoraires": "175%",
      "Frais": "20 € à l’adhésion"
    },
    {
      "name": "Neoliane Equilibre EQ6",
      "prix": "46,02 €",
      "image": "https://extranet.neoliane.fr/build/images/logo/comparateur/556.svg",
      "Hospitalisation": "215%",
      "Dentaire": "250%",
      "Optique": "250 €",
      "Honoraires": "200%",
      "Frais": "20 € à l’adhésion"
    },
    {
      "name": "Neoliane Equilibre EQ6 Bien-Etre",
      "prix": "49,02 €",
      "image": "https://extranet.neoliane.fr/build/images/logo/comparateur/556.svg",
      "Hospitalisation": "215%",
      "Dentaire": "250%",
      "Optique": "250 €",
      "Honoraires": "200%",
      "Frais": "20 € à l’adhésion"
    },
    {
      "name": "Neoliane Equilibre EQ6 Bien-Etre +",
      "prix": "52,02 €",
      "image": "https://extranet.neoliane.fr/build/images/logo/comparateur/556.svg",
      "Hospitalisation": "215%",
      "Dentaire": "250%",
      "Optique": "250 €",
      "Honoraires": "200%",
      "Frais": "20 € à l’adhésion"
    },
    {
      "name": "Neoliane Privilege P5",
      "prix": "57,47 €",
      "image": "https://extranet.neoliane.fr/build/images/logo/comparateur/637.svg",
      "Hospitalisation": "250%",
      "Dentaire": "275%",
      "Optique": "375€",
      "Honoraires": "175%",
      "Frais": "20€ à l'adhésion"
    },
    {
      "name": "Neoliane Initial Plus Niveau 5",
      "prix": "61,70 €",
      "image": "https://extranet.neoliane.fr/build/images/logo/comparateur/528.svg",
      "Hospitalisation": "275%",
      "Dentaire": "275%",
      "Optique": "350 €",
      "Honoraires": "200%",
      "Frais": "20 € à l’adhésion"
    },

  ]

}
