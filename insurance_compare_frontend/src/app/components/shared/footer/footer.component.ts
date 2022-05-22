import { Component, OnInit, Input } from '@angular/core';
import instagram from '../../../data/instagram.json';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }
  @Input() layout: number | string;
  @Input() logo: number | string;
  @Input() shape: number | string;
  @Input() shape2: number | string;
  @Input() shapeclass: number | string;
  @Input() shape2class: number | string;

  // Instagram
  public instagram = instagram;

  gotoTop() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }


  ngOnInit(): void {
  }

}
