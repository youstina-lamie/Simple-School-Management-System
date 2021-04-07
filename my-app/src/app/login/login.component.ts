import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { AuthService } from './../_service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  emailPattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$";
  constructor(private Auth:AuthService,private route:Router) { }
  
  ngOnInit(): void {
  }
  login(email,password){
    if(email.match(this.emailPattern)&&password!=''){
      this.Auth.login();
      this.route.navigate(['home']);
    }
  }

}
