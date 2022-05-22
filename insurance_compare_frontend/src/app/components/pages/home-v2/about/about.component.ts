import { Component, OnInit } from '@angular/core';
import list from '../../../../data/aboutlist.json';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }
  public list = list;

  ngOnInit(): void {
  }

}
