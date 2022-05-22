import { Component, OnInit } from '@angular/core';
import blog from '../../../data/blog/blog.json';
import blogcategory from '../../../data/blog/blogcategory.json';
import blogtags from '../../../data/tags.json';

@Component({
  selector: 'app-blogsidebar',
  templateUrl: './blogsidebar.component.html',
  styleUrls: ['./blogsidebar.component.css']
})
export class BlogsidebarComponent implements OnInit {

  constructor() { }
  public blog = blog;
  public blogcategory = blogcategory;
  public blogtags = blogtags;

  ngOnInit(): void {
  }

}
