import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../auth/shared/auth.service";

@Component({
  selector: 'app-navbar-collections',
  templateUrl: './navbar-collections.component.html',
  styleUrls: ['./navbar-collections.component.css']
})
export class NavbarCollectionsComponent implements OnInit {

  constructor(private router: Router ,
              private authService: AuthService) { }

  ngOnInit(): void {
  }

  goToCollections() {
    this.router.navigateByUrl("/collections");
  }

  logOut() {
    this.router.navigateByUrl("/home");
    this.authService.logout();
  }

  goToOverview() {
    this.router.navigateByUrl("/overview")
  }
}
