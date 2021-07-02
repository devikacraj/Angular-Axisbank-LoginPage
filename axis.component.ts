import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-axis',
  templateUrl: './axis.component.html',
  styleUrls: ['./axis.component.css']
})
export class AxisComponent {

  
  show:boolean=false;
  disp:boolean=false;
  display:boolean=false;
  Cust:boolean=false;
  Mob:boolean=false
  Show(){
    this.show=!this.show;
    this.disp=false;
    this.display=false;
    this.Cust=false;
    this.Mob=false;
  }
  Disp(){
    this.disp=!this.disp;
    this.show=false;
    this.display=false;
    this.Cust=false;
    this.Mob=false;
  }
  Display(){
    this.display=!this.display;
    this.show=false;
    this.disp=false;
    this.Cust=false;
    this.Mob=false;
  }
  cust(){
    this.Cust=!this.Cust;
    this.show=false;
    this.disp=false;
    this.Mob=false;
  }
  mob(){
    this.Mob=!this.Mob;
    this.show=false;
    this.disp=false;
    this.Cust=false;
  }

}
