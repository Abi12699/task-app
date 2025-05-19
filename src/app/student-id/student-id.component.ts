import { Component } from '@angular/core';
import { StudentIdService } from '../student-id.service';

@Component({
  selector: 'app-student-id',
  templateUrl: './student-id.component.html',
  styleUrls: ['./student-id.component.css']
})
export class StudentIdComponent {

  studentcard:any=[];
student: any;
  constructor(private _studentcardService:StudentIdService){
    _studentcardService.getStudentCard().subscribe((data:any)=>{
      console.log(data);
      this.studentcard=data;
      console.log(this.studentcard);
    },(err:any)=>{
  alert("Internal Sever error!")
  }
)
  }

  keywords:any='';
  search(){
   this._studentcardService.filterstudentcard(this.keywords).subscribe(
     (data:any)=>{
       console.log(data);
       this.studentcard=data
     }
   )
  }

  sort(){
  this._studentcardService.sortstudentcard(this.column,this.order).subscribe((data:any)=>{
      console.log(data);
      this.studentcard=data
    },(err:any)=>{
      alert("Internal Server error")
    })
  }
  order(column: (column: any, order: any) => void, order: any) {
    throw new Error('Method not implemented.');
  }
  column(column: any, order: any) {
    throw new Error('Method not implemented.');
  }


  pagination(){
    this._studentcardService.paginatedVehicels(this.limit,this.page).subscribe((data:any)=>{
      console.log(data);
      this.studentcard=data;
    },(err:any)=>{
      alert("Internal Server error")
    })
  }
  page(limit: (limit: any, page: any) => void, page: any) {
    throw new Error('Method not implemented.');
  }
  limit(limit: any, page: any) {
    throw new Error('Method not implemented.');
  }



  delete(id:number){
    if(confirm("Are you Sure to delete?")==true){
    this._studentcardService.deleteStudent(id).subscribe((data:any)=>{
       alert("record deleted succesfully");
       this.loadStudent();
       window.location.reload
     },(err:any)=>{
       alert("Internal Server Error!")
     }
     )
    } else{
     alert("You have cancelled delete")
    }
 
   }


   loadStudent(){
    this._studentcardService.getStudentCard().subscribe((data:any)=>{
      console.log(data);
      this.studentcard=data;
      console.log(this.studentcard);
    },(err:any)=>{
      alert("Internal Server Error!")
    })

  }




  


}
