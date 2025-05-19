import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VechicleService } from '../vechicle.service';

@Component({
  selector: 'app-vechicle-details',
  templateUrl: './vechicle-details.component.html',
  styleUrls: ['./vechicle-details.component.css']
})
export class VechicleDetailsComponent {

  id:any="";
  vechicle:any=[];
  constructor(private _activatedRoute:ActivatedRoute, private _vehicelService:VechicleService){
    _activatedRoute.params.subscribe(
      (data:any)=>{
        console.log(data.id);
        this.id=data.id;
        console.log(this.id);
      },(err:any)=>{
        alert("Internal Server Error!")
      }
    )

    
    _vehicelService.getVechicle(this.id).subscribe(
      (data:any)=>{
        
        console.log(data);
        this.vechicle=data;

      },(err:any)=>{
        alert("Internal Server Error")
      }
    )
  }

}
