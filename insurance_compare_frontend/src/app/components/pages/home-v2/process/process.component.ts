import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.css']
})
export class ProcessComponent implements OnInit {

  constructor() { }
  list = [
    {
      icon:"fa fa-eur",
      title:"Économisez de l’argent",
      text:"Nous nous engageons à vous faire économiser de l’argent sans que vous ayez à faire des compromis sur vos garanties d’assurance. "
    },
    {
      icon:"fa fa-users",
      title:"Gagnez du temps",
      text:"Pas de temps à perdre ? Nous mettons maximum 10 min pour comparer 65 marques."
    },
    {
      icon:"fa fa-child",
      title:"Ne payez que le nécessaire",
      text:"Nous analysons et comparons les marques en un temps record. Seulement quelques minutes suffisent pour vous proposer les meilleures offres d’assurance"
    },
    {
      icon:"fa fa-question",
      title:"Posez-nous vos questions ",
      text:"N’hésitez pas à nous poser toutes vos questions, nous nous ferons une joie d’y répondre."
    }
  ];

  ngOnInit(): void {
  }

}
