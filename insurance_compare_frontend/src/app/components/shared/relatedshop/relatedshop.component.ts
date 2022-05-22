import { Component, OnInit } from '@angular/core';
import shop from '../../../data/shop/shop.json';

@Component({
  selector: 'app-relatedshop',
  templateUrl: './relatedshop.component.html',
  styleUrls: ['./relatedshop.component.css']
})
export class RelatedshopComponent implements OnInit {

  constructor() { }
  public shopblock = shop;
  settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: false,
    dots: false,
    responsive: [{
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    ]
  };

  ngOnInit(): void {
  }

}
