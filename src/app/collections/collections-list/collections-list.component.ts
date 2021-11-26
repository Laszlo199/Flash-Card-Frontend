import { Component, OnInit } from '@angular/core';
import {DECKS} from "../shared/fake-decks";
import {DeckDto} from "../shared/deck.dto";
import {DeckService} from "../shared/deck.service";

@Component({
  selector: 'app-collections-list',
  templateUrl: './collections-list.component.html',
  styleUrls: ['./collections-list.component.css']
})
export class CollectionsListComponent implements OnInit {
  searchPhrase: string | undefined;
  decks: DeckDto[] | undefined;

  constructor(private service: DeckService) { }

  ngOnInit(): void {
    this.decks = this.service.getDecks()
  }

}
