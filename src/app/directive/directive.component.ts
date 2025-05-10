import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent {

  ages:number[]=[10,20,30,40,50,60,70]

  states:string[]=['telangana' , 'andharpradesh', 'karnataka', 'tamilnadu']

  products:any[]=[
    {name:'pen', price:20,rating:2.6},
    {name:'book', price:200,rating:2.7},
    {name:'shirt', price:2000,rating:3.6},
    {name:'shoes', price:2000,rating:4.6},
    {name:'laptop', price:50000,rating:1.6},
    {name:'bike', price:200000,rating:4.6},

  ]

}
