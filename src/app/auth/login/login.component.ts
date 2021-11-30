import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import { AuthService } from '../shared/auth.service';
import { LoginDto } from '../shared/login.dto';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm = this.fb.group({
  email: new FormControl(
    '',
    [
      Validators.required,
    ]
  ),
  password: new FormControl(
    '',
    Validators.required
  ),
});
  private unsub: Subscription | undefined;

  constructor(private fb: FormBuilder,
              private _auth: AuthService) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    if(this.unsub) {
      this.unsub.unsubscribe();
    }
  }

  login() {
    const loginDto = this.loginForm.value as LoginDto;
    this._auth.login(loginDto)
      .subscribe(token => {
        console.log('Token: ', token)
      });

  }

  get email() {return this.loginForm.get('email')}
  get password() {return this.loginForm.get('password')}
}
