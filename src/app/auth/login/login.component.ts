import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import { AuthService } from '../shared/auth.service';
import { LoginDto } from '../shared/login.dto';
import {Observable, Subscription} from "rxjs";
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

loginForm = this._fb.group({

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
  errorText:['']
});

  private unsub: Subscription | undefined;

  constructor(private _fb: FormBuilder,
              private _auth: AuthService,
              private _router: Router) { }

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
      .subscribe((response) =>{
        console.log('Test van toka');
        if (response && response.jwt != null){
          console.log('Token: ',response.jwt);
          this._router.navigateByUrl('collections');
        }else if (response && response.jwt == null){
          console.log('No token');
          this.errorText?.setValue('Wrong email or password');
          this.errorText?.disable();
        }
        });
  }

  get email() {return this.loginForm.get('email')}
  get password() {return this.loginForm.get('password')}
  get errorText(){return this.loginForm.get('errorText')}

  }
