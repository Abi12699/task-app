import { Component } from '@angular/core';
import { VechicleService } from '../vechicle.service';
import { FormControl, FormGroup } from '@angular/forms';
import { RouteConfigLoadEnd, Router } from '@angular/router';

@Component({
  selector: 'app-create-vechicel',
  templateUrl: './create-vechicel.component.html',
  styleUrls: ['./create-vechicel.component.css']
})
export class CreateVechicelComponent {

  constructor(private _vehicleService:VechicleService, private _router:Router){}

  public vehicleForm:FormGroup= new FormGroup({
    Vehicle:new FormControl(),
    color:new FormControl(),
    cost:new FormControl(),
    fuel:new FormControl(),
    manufacturer:new FormControl(),
    image:new FormControl(),
    model:new FormControl(),
    type:new FormControl(),
    tyre:new FormControl(),

  })

  submit(){

    console.log(this.vehicleForm.value);
    this._vehicleService.createVechicel(this.vehicleForm.value).subscribe((data:any)=>{
      console.log(data);
      alert("vehicel created successfully")
      this._router.navigateByUrl('/mywebsite/vechicles')
    },(err:any)=>{
      alert("Internal server error")
    })
    

    

  }

}
