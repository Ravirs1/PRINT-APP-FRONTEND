import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from 'src/app/login/auth.service';

@Component({
  selector: 'app-verify-account',
  templateUrl: './verify-account.component.html',
  styleUrls: ['./verify-account.component.scss']
})
export class VerifyAccountComponent implements OnInit, OnDestroy{

  email: string = 'ravi.rr2015rs@gmail.com';
  password: string = 'test12345';
  interval: any;

  constructor(
    private authService:AuthService
  ) {

  }

  ngOnInit() {
    this.interval = setInterval(() => {
      this.checkEmailVerified();
    },5000)
    this.checkEmailVerified();
  }

  checkEmailVerified() {
    this.authService.signInWithEmail(this.email, this.password);
  }

  ngOnDestroy() {
    clearInterval(this.interval)
  }

}
