import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-john-details',
  templateUrl: './john-details.component.html',
  styleUrls: ['./john-details.component.css']
})
export class JohnDetailsComponent {
addMark() {
throw new Error('Method not implemented.');
}
deleteMark(_t142: number) {
throw new Error('Method not implemented.');
}
MarksFormArray: any;


  constructor(){
    this.userForm.get('type')?.valueChanges.subscribe((data:any)=>{
      if(data=='dayScholar'){
        this.userForm.addControl('busFee',new FormControl());
        this.userForm.removeControl('hostelFee');
      }
      else{
        this.userForm.addControl('hostelFee',new FormControl());
        this.userForm.removeControl('busFee');
    }
  })
  }
  

    public userForm:FormGroup= new FormGroup({
      name:new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(12)]),
      mobile:new FormControl(),
      email:new FormControl(),
      password:new FormControl(),
      address:new FormGroup({
        city:new FormControl(),
        state:new FormControl(),
        pin:new FormControl(),
      }),
      type:new FormControl(),
      card:new FormArray([])
    })


    get CardsFormArray(){
      return this.userForm.get('card') as FormArray;
    }

    addCard(){
      this.CardsFormArray.push(
        new FormGroup({
          number:new FormControl(),
          name:new FormControl(),
          expiry:new FormControl(),
          cvv:new FormControl(),
        })
      )
    }
    
    deleteCard(i:number){
      this.CardsFormArray.removeAt(i);
    }



    submit(){
      console.log(this.userForm.value)
    }
  }