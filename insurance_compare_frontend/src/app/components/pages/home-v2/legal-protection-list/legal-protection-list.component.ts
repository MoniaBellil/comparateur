import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-legal-protection-list',
  templateUrl: './legal-protection-list.component.html',
  styleUrls: ['./legal-protection-list.component.css']
})
export class LegalProtectionListComponent implements OnInit {

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
