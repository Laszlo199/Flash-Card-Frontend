import { Component, OnInit } from '@angular/core';
import {DecksDto} from "../shared/dtos/deck/decks.dto";
import {DeckService} from "../shared/deck.service";
import {Observable, Subscription} from "rxjs";
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

  popupShown: boolean = false;
  private newDeckSubscription: Subscription;

  constructor(private service: DeckService, private router: Router) {
    this.newDeckSubscription = this.service.getUpdate()
      .subscribe((deckCreated: boolean) => {
        this.closePopup();
        if(deckCreated) {
          this.loadDecks();
        }
      });
  }

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

  openPopup() {
    this.popupShown = true;
  }

  closePopup() {
    this.popupShown = false;
  }
}
