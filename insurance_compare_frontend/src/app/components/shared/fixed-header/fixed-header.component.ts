import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import navigation from '../../../data/navigation.json';
import { Router } from '@angular/router';
@Component({
  selector: 'app-fixed-header',
  templateUrl: './fixed-header.component.html',
  styleUrls: ['./fixed-header.component.css']
})
export class FixedHeaderComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document, private router: Router) { 
  }
  bien = false 
  personnes = false
  energie = false
  credit = false
  admin = false
  public navigation = navigation;
  // Navigation
  navmethod: boolean = true;
  toggleNav() {
    this.navmethod = !this.navmethod;
  }
  // Canvas
  canvasmethod: boolean = true;
  toggleCanvas() {
    this.canvasmethod = !this.canvasmethod;
  }
  // Mobile 
  open: boolean = false;
  trigger(item: { open: boolean; }){
    item.open = !item.open;
  }
  // Add class on resize and onload window
  visible: boolean = false;
  breakpoint: number = 991;
  public innerWidth: any;
  detectHeader() {
    this.innerWidth = window.innerWidth;
    this.visible = this.innerWidth >= this.breakpoint;
  }
  ngOnInit(): void {
    console.log(this.router.url)
    if(this.router.url == '/admin-page')
    {
      this.admin = true
    } else{
      this.admin = false
    }

    this.detectHeader();
  }

  deconnection(){
    localStorage.removeItem('Token');
    this.router.navigate(['/login']);

  }
  mouseEnter(div : string){

    if( div == "bien"){
     this.bien = true
     this.personnes = false
     this.energie = false
     this.credit = false
  
    }
    if( div == "personnes"){
      this.bien = false
      this.personnes = true
      this.energie = false
      this.credit = false
  
    }
    if( div == "credit"){
      this.bien = false
      this.personnes = false
      this.energie = false
      this.credit = true
    }
    if( div == "clear"){
      this.bien = false
      this.personnes = false
      this.energie = false
      this.credit = false
  
    }
  
  }
 mouseLeave(div : string){
  // this.mutuelle = false
   console.log('mouse leave :' + div);
 }


}
