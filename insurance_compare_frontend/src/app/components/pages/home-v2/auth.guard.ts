import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './service-data/auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private router: Router,   private    authService: AuthService) { }
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

        const body = {
            "token": localStorage.getItem('Token')
        }
        if (localStorage.getItem('Token') != null )  {
            
            this.authService.checkAccesToken(body).subscribe((data) =>{
                console.log(data, 'xxxxxxxxxxx')
                if(data == 'Valide Token'){
                    this.router.navigate(['/admin-page']);
                    return false;
                } else{
                    localStorage.removeItem('Token');
                    return true;
                }
            })
        } 
        return true;
    }

}

