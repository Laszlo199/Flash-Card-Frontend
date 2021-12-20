import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../auth/shared/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private loginService: AuthService, private router: Router) { }

  ngOnInit(): void {
    if(this.loginService.isLoggedIn)
      this.router.navigateByUrl("/collections")
  }
}
