import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

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
    private router: Router
  ) { }

  ngOnInit(): void {
    this.afAuth.authState.subscribe((res) => {
      console.log(res)
    })
  }

  signUpWithEmail(e: any) {
    e.preventDefault()
    console.log('called')
    this.afAuth.createUserWithEmailAndPassword(this.email, this.password).then((credentials) => {
      console.log(credentials)
      this.SendVerificationMail();
    })
  }
  signInWithEmail(e: any) {
    e.preventDefault()
    console.log('called')
    this.afAuth.signInWithEmailAndPassword(this.email, this.password).then((credentials) => {
      if(credentials.user?.emailVerified) {
        // navigate to dashboard
        console.log('verified')
      } else {
        // verify email
      }
      console.log(credentials)
    })
  }
  SendVerificationMail() {
    return this.afAuth.currentUser.then((u: any) => u.sendEmailVerification()).then(() => {
        // this.router.navigate(['verify-email-address']);
      });
  }

  ForgotPassword(passwordResetEmail: string) {
      return this.afAuth.sendPasswordResetEmail(this.email).then(() => {
         window.alert('Password reset email sent, check your inbox.');
        })
    .catch((error) => {
    window.alert(error);
    });
  }
}
