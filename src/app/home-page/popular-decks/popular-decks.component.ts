import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {DecksDto} from "../../collections/shared/dtos/deck/decks.dto";
import {HomePageService} from "../shared/home-page.service";

@Component({
  selector: 'app-popular-decks',
  templateUrl: './popular-decks.component.html',
  styleUrls: ['./popular-decks.component.css']
})
export class PopularDecksComponent implements OnInit {
  decks$: Observable<DecksDto[]> | undefined;

  constructor(private service: HomePageService) { }

  ngOnInit(): void {
    this.loadDecks();
  }

  private loadDecks() {
    this.decks$ = this.service.getAllPublic(1, 3);
  }
}
