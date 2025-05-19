import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentIdService } from '../student-id.service';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.css']
})
export class StudentCardComponent {
id:any="";
student:any={};

constructor(private _activatedRoute: ActivatedRoute , private _studentService:StudentIdService){
_activatedRoute.params.subscribe(
  (data:any)=>{
    console.log(data.id);
    this.id=data.id
  },(er:any)=>{
    alert("Internal Server Error")
  }
)

_studentService.getStudentCards(this.id).subscribe(
  (data:any)=>{
    console.log(this.id);
    console.log(data);
    this.student=data;
    console.log(this.student)
  },(err:any)=>{
    alert("Internal Server Error")
  }
)


}

}
