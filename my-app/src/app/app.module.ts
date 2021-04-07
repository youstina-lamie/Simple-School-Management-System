import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { StudentListingComponent } from './student-listing/student-listing.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { AuthService } from './_service/auth.service';
import { StudentService } from './_service/student.service';
import { AuthGuard } from './_service/auth-guard.service';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StudentListingComponent,
    StudentProfileComponent
  ],
  imports: [
  BrowserModule,
    HttpClientModule,
    AppRoutingModule,FormsModule,
    RouterModule.forRoot([
      {path:'' ,component:LoginComponent},
      {path:'login' ,component:LoginComponent},
      {path:'profile/:id',canActivate:[AuthGuard],component:StudentProfileComponent},
      {path:'home',canActivate:[AuthGuard], component:StudentListingComponent},


      {path:'**',component:LoginComponent},


    ])
  ],
  providers: [AuthService,StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
