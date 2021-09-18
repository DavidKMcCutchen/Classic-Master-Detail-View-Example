import { User } from './../../../../api-interfaces/src/lib/api-interfaces';
import { AuthService } from './../../../../core-data/src/lib/services/authentication/auth.service';
import { NotificationsService } from '@public-apis/core-data';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'API-app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userInfo: User = { email: 'davemccutch@gmail.com', password: 'abc'};
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private notify: NotificationsService,
    private authservice: AuthService
  ) { }

  ngOnInit() {
    this.initForm();
  }

  //PRACTICING BELOW


  // login() {
  //   const inputedUser: User = this.form.value;
  //   if (inputedUser.email === this.userInfo.email && inputedUser.password === this.userInfo.password)
  //   return (this.authservice.setToken(inputedUser.email),
  //   this.notify.notify('Successfully Logged In'),
  //   this.router.navigate(['/entries'])); else return  (this.notify.notify('Invalid User'), false); 
  // };

    // login() {
    //   const inputedUser: User = this.form.value;
    //   const pass =
    //   this.authservice.setToken(inputedUser.email);
    //   this.notify.notify('Successfully Loggin In');
    //   this.router.navigate(['/entries']);
    //   const fail = this.notify.notify('Invalid User');
    //   if (inputedUser.email === this.userInfo.email && inputedUser.password === this.userInfo.password) return {pass};
    //   else return {fail};}

    login() {
      const inputedUser: User = this.form.value;
      return (inputedUser.email === this.userInfo.email && inputedUser.password === this.userInfo.password ? (this.authservice.setToken(inputedUser.email), this.notify.notify('Successfully Logged In'), this.router.navigate(['/entries'])) : this.notify.notify('Invalid User'));
    }




  private initForm() {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
}