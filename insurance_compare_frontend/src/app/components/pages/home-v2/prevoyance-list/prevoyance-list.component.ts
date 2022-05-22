import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-prevoyance-list',
  templateUrl: './prevoyance-list.component.html',
  styleUrls: ['./prevoyance-list.component.css']
})
export class PrevoyanceListComponent implements OnInit {

 
  data: any[] = [];
  name = 'Empty States Pattern';
  constructor(
    private router: Router, private activatedRoute: ActivatedRoute

  ) {
  }

  ngOnInit(): void {
    this.data = Object.values(history.state[0].liste) ;     
  }

  classname = "";

}
