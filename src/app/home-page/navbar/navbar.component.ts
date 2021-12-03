import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/shared/auth.service';
import {take} from "rxjs/operators";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public jwt: string | null | undefined;

  constructor(private _auth: AuthService, private router: Router) {
    _auth.isLoggedIn$.subscribe(jwt => {
      this.jwt = jwt;
    })
  }

  ngOnInit(): void {
  }

  logout() {
    this._auth.logout().subscribe(loggedOut => {
    this.router.navigateByUrl("/auth/login")
    });
  }
}
