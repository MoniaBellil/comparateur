import { Component, OnInit } from '@angular/core';
import blogpost from '../../../data/blog/blog.json';

@Component({
  selector: 'app-relatedpost',
  templateUrl: './relatedpost.component.html',
  styleUrls: ['./relatedpost.component.css']
})
export class RelatedpostComponent implements OnInit {

  constructor() { }
  public blogpost = blogpost;

  ngOnInit(): void {
  }

}
