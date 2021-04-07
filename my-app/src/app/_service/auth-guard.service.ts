import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
// import { Observable } from "rxjs";
@Injectable({providedIn:'root'})

export class AuthGuard implements CanActivate {
    constructor(private router:Router){}
    canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot) {
        
        if(sessionStorage.length===1){
            console.log('fe token')
            return true;
            
        }else {
            this.router.navigate(['']);
            return false;
        }
            

    }
    
}