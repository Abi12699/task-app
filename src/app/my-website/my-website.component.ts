import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-website',
  templateUrl: './my-website.component.html',
  styleUrls: ['./my-website.component.css']
})
export class MyWebsiteComponent {

  constructor(private _router:Router){}


  logout(){

    if(confirm('are you sure to logout?')==true){
      sessionStorage.removeItem('token');
    this._router.navigateByUrl("/mywebsite")
  }else{alert('Cancelled logout')

  }

}
}
