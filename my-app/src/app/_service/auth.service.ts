import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable()
export class AuthService {
    constructor(private router:Router){}
    login(){
        sessionStorage.setItem('token', 'login');
    }
    logout(){
        sessionStorage.clear();
        this.router.navigate(['']);

    }
    
}
  