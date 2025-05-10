import { Component } from '@angular/core';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css']
})
export class RectangleComponent {

  Length:number=0;
  Width:number=0;
  result:number=0;

  area(){
    this.result=this.Length*this.Width;
  }
  perimeter(){
    this.result= 2*(this.Length+this.Width)
  }

}
