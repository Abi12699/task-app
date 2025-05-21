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
import { DirectiveComponent } from './directive/directive.component';
import { EmployeeComponent } from './employee/employee.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { VechiclesComponent } from './vechicles/vechicles.component';
import { CreateVechicelComponent } from './create-vechicel/create-vechicel.component';
import { StudentIdComponent } from './student-id/student-id.component';
import { CreateStudentCardComponent } from './create-student-card/create-student-card.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { JohnDetailsComponent } from './john-details/john-details.component';
import { LoginComponent } from './login/login.component';
import { AuthenticationGuard } from './authentication.guard';
import { VechicleDetailsComponent } from './vechicle-details/vechicle-details.component';
import { StudentCardComponent } from './student-card/student-card.component';
import { CommunicationComponent } from './communication/communication.component';
import { ChildComponent } from './child/child.component';
import { Sibling1Component } from './sibling1/sibling1.component';
import { Sibling2Component } from './sibling2/sibling2.component';
import { RatingParentComponent } from './rating-parent/rating-parent.component';
import { RatingChildComponent } from './rating-child/rating-child.component';
import { TaskAreaComponent } from './task-area/task-area.component';

const routes: Routes = [

  {path:'',component:MyWebsiteComponent},
  {path:'mywebsite',component:MyWebsiteComponent,canActivate:[AuthenticationGuard],children:[{
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
    path:'BMI',component:BMIComponent},
    {path:'directive',component:DirectiveComponent},
    {path:'employee', component:EmployeeComponent},
    {path:'flipkart', component:FlipkartComponent},
    {path:'vechicle', component:VechiclesComponent},
    {path:'create-vechicle', component:CreateVechicelComponent},
    {path:'studentID', component:StudentIdComponent},
    {path:"createStudent", component:CreateStudentCardComponent},
    {path:"createUser", component:CreateUserComponent},
    {path:"johnUser", component:JohnDetailsComponent},
    {path:"login", component:LoginComponent},
    {path:"vechicle-details/:id", component:VechicleDetailsComponent},
    {path:"studentCard/:id",component:StudentCardComponent},
    {path:'edit-vechicle/:id', component:CreateVechicelComponent},
    {path:"edit-Student/:id", component:CreateStudentCardComponent},
    {path:"communication", component:CommunicationComponent},
    {path:"child",component:ChildComponent},
    {path:"sibling1", component:Sibling1Component},
    {path:"sibling2" , component:Sibling2Component},
    {path:"rating-parent" , component:RatingParentComponent},
    {path:"rating-child" , component:RatingChildComponent},
    {path:"task-area", component:TaskAreaComponent},

  ]}


]
    
  
  



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
