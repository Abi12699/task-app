import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

  message:string="Good Morning Everyone!";
  isDisabled:boolean=true;
  name:string='Dinesh'

  mobile:string='+91'
  submit(){
    alert(this.mobile);
  }

  greet(){
    alert("Good Morning")
  }

  typing(){
    alert("Typing...........")
  }

  state(){
    alert("State")
  }

}
