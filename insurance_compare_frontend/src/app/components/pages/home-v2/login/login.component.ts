import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { AuthService } from '../service-data/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private authService :AuthService , private router: Router) { }

  ngOnInit(): void {
  }

  user: User = new User();
  onSubmit() {
    this.authService.signIn(this.user).subscribe(
      (data: any) => {
        console.log(data)
        let token = data.access_token;
        localStorage.setItem('Token', token);
        this.router.navigate([ '/admin-page' ]);
      },
      (err: HttpErrorResponse) => {
        console.log(err.error);
        if (err.error.msg) {
         alert('Undo');
        } else {
          Swal.fire('Votre compte admin est incorrecte')

        }
      }
    );
  }

  isLoading = false
  classname = "";
  gotoTop() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }

}

