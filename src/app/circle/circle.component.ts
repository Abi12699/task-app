import { Component } from '@angular/core';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent {

  number:number=0;

  result:number=0;

  area(){
    this.result=3.14*this.number*this.number
  }

  perimeter(){
    this.result=2*(3.14*this.number)
  }

}
