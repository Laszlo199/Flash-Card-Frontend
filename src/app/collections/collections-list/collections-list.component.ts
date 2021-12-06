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
  userId = 1;

  searchPhrase: string | undefined;
  decks$: Observable<DecksDto[]> | undefined;

  publicShown: boolean = false;

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
    this.loadDecks();
  }

  private loadDecks() {
    this.decks$ = this.service.getByUserId(this.userId, "");
  }

  searchDecks() {
    if(this.searchPhrase && this.searchPhrase!="")
      this.decks$ = this.service.getByUserId(this.userId, this.searchPhrase);
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

  showPrivate() {
    this.publicShown = false;
    this.decks$ = this.service.getByUserId(this.userId, "");
  }

  showPublic() {
    this.publicShown = true;
    this.decks$ = this.service.getPublic();
  }
}
