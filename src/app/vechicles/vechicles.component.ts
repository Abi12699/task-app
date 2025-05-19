import { Component } from '@angular/core';
import { VechicleService } from '../vechicle.service';

@Component({
  selector: 'app-vechicles',
  templateUrl: './vechicles.component.html',
  styleUrls: ['./vechicles.component.css']
})
export class VechiclesComponent {
  vehicles: any = [];

  constructor(private _vehicleService:VechicleService){
    this.loadvehicles();
   
  }

  loadvehicles(){
    this._vehicleService.getVechicles().subscribe((data:any)=>{
      console.log(data);
      this.vehicles=data;
      console.log(this.vehicles);
    },(err:any)=>{
      alert("Internal Server Error!")
    })

  }
  keywords:any="";
  search(){
    this._vehicleService.filteredVehicles(this.keywords).subscribe(
      (data:any)=>{
        console.log(data);
        this.vehicles=data
      }
    )
  }

  column:any='';
  order:any="";
  sort(){
    this._vehicleService.sortVechicles(this.column,this.order).subscribe((data:any)=>{
      console.log(data);
      this.vehicles=data
    },(err:any)=>{
      alert("Internal Server error")
    })
  }

  limit:number=0;
  page:number=0;
  pagination(){
    this._vehicleService.paginatedVehicels(this.limit,this.page).subscribe((data:any)=>{
      console.log(data);
      this.vehicles=data;
    },(err:any)=>{
      alert("Internal Server error")
    })
  }

  delete(id:number){
   if(confirm("Are you Sure to delete?")==true){
    this._vehicleService.deleteVechicle(id).subscribe((data:any)=>{
      alert("record deleted succesfully");
      this.loadvehicles();
      window.location.reload
    },(err:any)=>{
      alert("Internal Server Error!")
    }
    )
   } else{
    alert("You have cancelled delete")
   }

  }



}
