import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {DeckDto} from "../../../collections/shared/deck.dto";
import {DeckService} from "../../../collections/shared/deck.service";

@Component({
  selector: 'app-popular-decks',
  templateUrl: './popular-decks.component.html',
  styleUrls: ['./popular-decks.component.css']
})
export class PopularDecksComponent implements OnInit {
  decks$: Observable<DeckDto[]> | undefined;

  constructor(private service: DeckService) { }

  ngOnInit(): void {
    this.loadDecks();
  }

  private loadDecks() {
    this.decks$ = this.service.getAllPublic();
  }
}
