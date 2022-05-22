import { Component, OnInit } from '@angular/core';
import service from '../../../data/service.json';

@Component({
  selector: 'app-servicesidebar',
  templateUrl: './servicesidebar.component.html',
  styleUrls: ['./servicesidebar.component.css']
})
export class ServicesidebarComponent implements OnInit {

  constructor() { }
  public service = service;

  ngOnInit(): void {
  }

}
