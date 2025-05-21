import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MyWebsiteComponent } from './my-website/my-website.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { CalculateComponent } from './calculate/calculate.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BMIComponent } from './bmi/bmi.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectiveComponent } from './directive/directive.component';
import { EmployeeComponent } from './employee/employee.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { VechiclesComponent } from './vechicles/vechicles.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateVechicelComponent } from './create-vechicel/create-vechicel.component';
import { StudentIdComponent } from './student-id/student-id.component';
import { CreateStudentCardComponent } from './create-student-card/create-student-card.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { JohnDetailsComponent } from './john-details/john-details.component';
import { LoginComponent } from './login/login.component';
import { VechicleDetailsComponent } from './vechicle-details/vechicle-details.component';
import { StudentCardComponent } from './student-card/student-card.component';
import { CommunicationComponent } from './communication/communication.component';
import { ChildComponent } from './child/child.component';
import { Sibling1Component } from './sibling1/sibling1.component';
import { Sibling2Component } from './sibling2/sibling2.component';
import { RatingParentComponent } from './rating-parent/rating-parent.component';
import { RatingChildComponent } from './rating-child/rating-child.component';
import { TaskAreaComponent } from './task-area/task-area.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MyWebsiteComponent,
    WelcomeComponent,
    DataBindingComponent,
    CalculateComponent,
    RectangleComponent,
    CircleComponent,
    BMIComponent,
    DirectiveComponent,
    EmployeeComponent,
    FlipkartComponent,
    VechiclesComponent,
    CreateVechicelComponent,
    StudentIdComponent,
    CreateStudentCardComponent,
    CreateUserComponent,
    JohnDetailsComponent,
    LoginComponent,
    VechicleDetailsComponent,
    StudentCardComponent,
    CommunicationComponent,
    ChildComponent,
    Sibling1Component,
    Sibling2Component,
    RatingParentComponent,
    RatingChildComponent,
    TaskAreaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
