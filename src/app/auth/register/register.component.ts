import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../shared/auth.service';
import {LoginDto} from "../shared/login.dto";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm = this.fb.group({
    email:[''],
    password:['']
  });

  constructor(private fb: FormBuilder,
              private _auth: AuthService) { }

  ngOnInit(): void {
  }

  signup() {
    const registerDto = this.registerForm.value as LoginDto;
    this._auth.register(registerDto).subscribe();
  }
}
