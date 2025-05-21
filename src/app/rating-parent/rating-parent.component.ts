import { Component } from '@angular/core';

@Component({
  selector: 'app-rating-parent',
  templateUrl: './rating-parent.component.html',
  styleUrls: ['./rating-parent.component.css']
})
export class RatingParentComponent {

  textlen:number=0;
  display(data:string){
    this.textlen=data.length;

  }

}
