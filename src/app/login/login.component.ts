import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string = 'ravi.rr2015rs@gmail.com';
  password: string = '123456';

  constructor(
    public afAuth: AngularFireAuth,
    private router: Router,
    private authService: AuthService
  ) { }
  ngOnInit(): void {
   
  }
  signUpWithEmail(e:any) {
    e.preventDefault();
  this.authService.signUpWithEmail();
}

// Example of logging in
signInWithEmail(e:any) {
  e.preventDefault();
this.authService.signInWithEmail(this.email, this.password);
}


// Example of logging out
logout() {
this.authService.logout();
}

forgotPassword(email:string) {
  this.authService.forgotPassword('email');
}

 }
