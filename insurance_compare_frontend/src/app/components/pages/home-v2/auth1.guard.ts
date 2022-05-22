import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './service-data/auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard1 implements CanActivate {
    constructor(private router: Router, private    authService: AuthService) { }
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const body = {
            "token": localStorage.getItem('Token')
        }

        if (localStorage.getItem('Token') == null )  {
            this.router.navigate(['/login']);
            return false;
        } 
        if (localStorage.getItem('Token') != null )  {
            this.authService.checkAccesToken(body).subscribe((data) =>{
                console.log(data, 'xxxxxxxxxxx')
                if(data == 'Valide Token'){
                        return true
                      }
                 else{
                    localStorage.removeItem('Token');
                    this.router.navigate(['/login']);
                    return false;
                }
            })
            return true
        }
   

    }

}
