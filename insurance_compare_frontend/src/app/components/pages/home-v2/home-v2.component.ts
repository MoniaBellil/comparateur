import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-v2',
  templateUrl: './home-v2.component.html',
  styleUrls: ['./home-v2.component.css']
})
export class HomeV2Component implements OnInit {

  constructor() { }
  // Footer style
  classname = "";
  ftlogo = "assets/img/logo-3.png";
  ftshape = "assets/img/lines/09.png";
  ftshape2 = "assets/img/lines/10.png";
  ftshapeclass = "line-three";
  ftshape2class = "line-four";

  banner = [
    {
      img:"assets/img/banner/02.jpg",
      title:"Comparez, choisissez et faites des économies !",
      text:"Va-chercher vous permet de trouver les meilleures offres d’assurance disponibles sur le marché."
    },
    {
      img:"assets/img/banner/03.jpg",
      title:"Comparez, choisissez et faites des économies !",
      text:"Va-chercher vous permet de trouver les meilleures offres d’assurance disponibles sur le marché."
    },
    {
      img:"assets/img/banner/04.jpg",
      title:"Comparez, choisissez et faites des économies !",
      text:"Va-chercher vous permet de trouver les meilleures offres d’assurance disponibles sur le marché."
    }
  ];

  list = [
    {text:"Business & Consulting Agency"},
    {text:"Awards Winning Business Comapny"},
  ];
  
  settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    arrows: true,
    fade: false,
    dots: false,
    swipe: true,
    adaptiveHeight: true,
    nextArrow: '<button class="slick-arrow next-arrow"><i class="fal fa-long-arrow-right"></i></button>',
    prevArrow: '<button class="slick-arrow prev-arrow"><i class="fal fa-long-arrow-left"></i></button>',
    responsive: [{
      breakpoint: 768,
      settings: {
        arrows: false
      }
    }]
  };

  ngOnInit(): void {
  }

  goToServices() {
    window.scroll({ 
      top :1000,
      left: 0,
      behavior: 'smooth' 
    });
  
  }

}
