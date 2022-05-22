import { Component, OnInit } from '@angular/core';
import category from '../../../data/shop/shopcategory.json';
import tags from '../../../data/tags.json';

@Component({
  selector: 'app-shopsidebar',
  templateUrl: './shopsidebar.component.html',
  styleUrls: ['./shopsidebar.component.css']
})
export class ShopsidebarComponent implements OnInit {

  constructor() { }
  public category = category;
  public tags = tags;

  ngOnInit(): void {
  }

}
