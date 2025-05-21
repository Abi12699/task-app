import { Component } from '@angular/core';
import { StudentIdService } from '../student-id.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VechicleService } from '../vechicle.service';

@Component({
  selector: 'app-create-student-card',
  templateUrl: './create-student-card.component.html',
  styleUrls: ['./create-student-card.component.css']
})
export class CreateStudentCardComponent {
  vehicleForm: any;

  constructor(private _studentService:StudentIdService, private _router:Router, private _activatedRoute:ActivatedRoute){

  _activatedRoute.params.subscribe((data:any)=>{
    console.log(data.id);
    this.id=data.id

    if(this.id){
      _studentService.getStudents(data.id).subscribe(
      (data:any)=>{
        console.log(data);
        this.StudentForm.patchValue(data);

      },(err:any)=>{
        alert("Unable to fetch details")
      }
    )
    }

    
  },(err:any)=>{
    alert("Internal Server error")
  })
  }

  public StudentForm:FormGroup= new FormGroup({
    name:new FormControl(),
    dob:new FormControl(),
    email:new FormControl(),
    phone:new FormControl(),
    city:new FormControl(),
    profile_picture:new FormControl(),
    school_city:new FormControl(),
    school_name:new FormControl(),
    school_pin:new FormControl()


    

  })
id:any=""
  submit(){
    if(this.id){

      this._studentService.updateStudent(this.id,this.StudentForm.value).subscribe((data:any)=>{
        console.log(data);
        alert("Student Details Updated Successfully")
        this._router.navigateByUrl("/mywebsite/studentID")
      },(err:any)=>{
        alert("Internal server error")
      })





    }else{

    console.log(this.StudentForm);
    this._studentService.createStudent(this.StudentForm.value).subscribe((data:any)=>{
      console.log(data);
      alert("student created successfully")
      this._router.navigateByUrl('/mywebsite/createStudent')
    },(err:any)=>{
      alert("Internal server error")
    })
    

    

  }
}

}
