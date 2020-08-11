import { Component, OnInit, Directive, ElementRef, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-waterquality',
  templateUrl: './waterquality.component.html',
  styleUrls: ['./waterquality.component.css']
 
})
export class WaterqualityComponent implements OnInit {
   
 ph1=17;
 ph2=400;
 h1=12;
 h2=12;
   name = 'World';

constructor() { }
  ngOnInit(){
  
  }
  onDivClick() {
    console.log(this.ph1);
  }

}