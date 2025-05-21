import { Component } from '@angular/core';
import { VechicleService } from '../vechicle.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, RouteConfigLoadEnd, Router } from '@angular/router';

@Component({
  selector: 'app-create-vechicel',
  templateUrl: './create-vechicel.component.html',
  styleUrls: ['./create-vechicel.component.css']
})
export class CreateVechicelComponent {

  

  constructor(private _vehicleService:VechicleService, private _router:Router  , private _activatedRoute:ActivatedRoute){

    _activatedRoute.params.subscribe(
      (data:any)=>{
        console.log(data.id);
        this.id=data.id;

        if(this.id){
           _vehicleService.getVechicle(data.id).subscribe(
        (data:any)=>{
          console.log(data);
          this.vehicleForm.patchValue(data);
        },(err:any)=>{
          alert("unable to fetch vehicle data")
        }
      )
          
        }
      },(err:any)=>{
        alert("Internal Server Error!")
      }
    )
  }

  public vehicleForm:FormGroup= new FormGroup({
    Vehicle:new FormControl(),
    color:new FormControl(),
    cost:new FormControl(),
    fuel:new FormControl(),
    manufacturer:new FormControl(),
    image:new FormControl(),
    model:new FormControl(),
    type:new FormControl(),
    tyres:new FormControl(),

  })
  id:any='';
  submit(){

    if(this.id){
      this._vehicleService.updateVechicle(this.id,this.vehicleForm.value).subscribe((data:any)=>{
          console.log(data);
        alert("vechicle record updated successfully");
        this._router.navigateByUrl('/mywebsite/vechicle');
      },(err:any)=>{
        alert("Unable to update")
      })
       

      }

    else{

    console.log(this.vehicleForm.value);
    this._vehicleService.createVechicel(this.vehicleForm.value).subscribe((data:any)=>{
      console.log(data);
      alert("vehicel created successfully")
      this._router.navigateByUrl('/mywebsite/vechicle')
    },(err:any)=>{
      alert("Internal server error")
    })

  }
    

    

  }

}
