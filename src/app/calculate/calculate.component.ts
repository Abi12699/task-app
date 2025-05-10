import { Component } from '@angular/core';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.css']
})
export class CalculateComponent {
  Number1:number=0;
  Number2:number=0;
 result:number=0;
  sum(){
    this.result=this.Number1+this.Number2;

  }

  sub(){
    this.result=this.Number1-this.Number2;

  }

  mul(){
    this.result=this.Number1*this.Number2;

  }

  div(){
    this.result=this.Number2/this.Number1;

  }

}
