import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-task-area',
  templateUrl: './task-area.component.html',
  styleUrls: ['./task-area.component.css']
})
export class TaskAreaComponent {

  @Input() max:number=0;
  text:string="";


}
