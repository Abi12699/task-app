import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MyWebsiteComponent } from './my-website/my-website.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CalculateComponent } from './calculate/calculate.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BMIComponent } from './bmi/bmi.component';

const routes: Routes = [

  {path:'',component:MyWebsiteComponent},
  {path:'mywebsite',component:MyWebsiteComponent,children:[{
    path:'home',component:HomeComponent
  }] },

  {path:'mywebsite',component:MyWebsiteComponent,children:[{
    path:'Welcome',component:WelcomeComponent
  }] },

  {path:'mywebsite',component:MyWebsiteComponent,children:[{
    path:'Data Binding',component:DataBindingComponent
  }] },

  {path:'mywebsite',component:MyWebsiteComponent,children:[{
    path:'Calculator',component:CalculateComponent
  }] },
  {path:'mywebsite',component:MyWebsiteComponent,children:[{
    path:'Rectangle',component:RectangleComponent
  }] },

  {path:'mywebsite',component:MyWebsiteComponent,children:[{
    path:'Circle',component:CircleComponent
  }] },

  {path:'mywebsite',component:MyWebsiteComponent,children:[{
    path:'BMI',component:BMIComponent
  }] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
