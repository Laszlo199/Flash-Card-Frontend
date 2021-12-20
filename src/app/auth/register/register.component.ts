import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import { AuthService } from '../shared/auth.service';
import {LoginDto} from "../shared/login.dto";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm = this.fb.group({
    email: new FormControl(
      '',
      [
        Validators.required,
        Validators.maxLength(20)
      ]
    ),
    password: new FormControl(
      '',
      [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20)
      ]
    ),
  });

  constructor(private fb: FormBuilder,
              private _auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  signup() {
    const registerDto = this.registerForm.value as LoginDto;
    this._auth.register(registerDto).subscribe(tokenDto=> {
      this.router.navigateByUrl("collections")
    });
  }

  get email() {return this.registerForm.get('email')}
  get password() {return this.registerForm.get('password')}
}
