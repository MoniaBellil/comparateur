import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {

 
  data: any[] = [];

  name = 'Empty States Pattern';
  constructor(
    private router: Router, private activatedRoute: ActivatedRoute

  ) {
  }
  ngOnInit(): void {
    this.data = Object.values(history.state[0].liste) ;
  }
}
