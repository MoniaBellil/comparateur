import { Component, OnInit } from '@angular/core';
import counter from '../../../../data/counter.json';

@Component({
  selector: 'app-fact',
  templateUrl: './fact.component.html',
  styleUrls: ['./fact.component.css']
})
export class FactComponent implements OnInit {

  constructor() { }
  public counter = counter;

  ngOnInit(): void {
  }

}
