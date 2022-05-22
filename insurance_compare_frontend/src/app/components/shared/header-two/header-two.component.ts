import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import navigation from '../../../data/navigation.json';

@Component({
  selector: 'app-header-two',
  templateUrl: './header-two.component.html',
  styleUrls: ['./header-two.component.css']
})
export class HeaderTwoComponent implements OnInit {
 white =false

 bien = false 
 personnes = false
 energie = false
 credit = false
  constructor(@Inject(DOCUMENT) private document: Document) { 
    
  }
  // Sticky Nav
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
    //set up the div "id=nav"
    if (document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100) {
      document.getElementById('can-sticky').classList.add('sticky-on');
      this.white = true
    }
    else {
      document.getElementById('can-sticky').classList.remove('sticky-on');
      this.white = false

    }
  }
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
    this.detectHeader();
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
