import { Component, OnInit } from '@angular/core';
import {DECKS} from "../shared/fake-decks";
import {DeckDto} from "../shared/deck.dto";
import {DeckService} from "../shared/deck.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-collections-list',
  templateUrl: './collections-list.component.html',
  styleUrls: ['./collections-list.component.css']
})
export class CollectionsListComponent implements OnInit {
  searchPhrase: string | undefined;
  fakeDecks: DeckDto[] | undefined;
  decks$: Observable<DeckDto[]> | undefined;

  constructor(private service: DeckService) { }

  ngOnInit(): void {
    this.fakeDecks = this.service.getDecks();
    this.loadDecks();
  }

  private loadDecks() {
    this.decks$ = this.service.getByUserId(1, "");
  }

  searchDecks() {
    if(this.searchPhrase && this.searchPhrase!="")
      this.decks$ = this.service.getByUserId(1, this.searchPhrase);
  }
}
