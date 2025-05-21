import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input() a:string=""

  

  @Output() bEvent:EventEmitter<string>=new EventEmitter();

  name:string='';
 


  // send(){
  //   this.bEvent.emit(20)
  // }

  submit(){
    this.bEvent.emit(this.a);
  }

}
