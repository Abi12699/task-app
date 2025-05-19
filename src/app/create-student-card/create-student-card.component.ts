import { Component } from '@angular/core';
import { StudentIdService } from '../student-id.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { VechicleService } from '../vechicle.service';

@Component({
  selector: 'app-create-student-card',
  templateUrl: './create-student-card.component.html',
  styleUrls: ['./create-student-card.component.css']
})
export class CreateStudentCardComponent {
  vehicleForm: any;

  constructor(private _studentService:StudentIdService, private _router:Router){}

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

  submit(){

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
