import { Component, OnInit } from '@angular/core';
import {DECKS} from "../shared/fake-decks";
import {DecksDto} from "../shared/dtos/decks.dto";
import {DeckService} from "../shared/deck.service";
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-collections-list',
  templateUrl: './collections-list.component.html',
  styleUrls: ['./collections-list.component.css']
})
export class CollectionsListComponent implements OnInit {
  searchPhrase: string | undefined;
  fakeDecks: DecksDto[] | undefined;
  decks$: Observable<DecksDto[]> | undefined;

  constructor(private service: DeckService, private router: Router) { }

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

  goToCollection(id: number) {
    this.router.navigateByUrl("/collections/"+id)
  }

  resetDecks() {
    if(!this.searchPhrase || this.searchPhrase=="")
      this.loadDecks()
  }
}
