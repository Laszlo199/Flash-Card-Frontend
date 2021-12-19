import { Component, OnInit } from '@angular/core';
import {DecksDto} from "../shared/dtos/deck/decks.dto";
import {DeckService} from "../shared/deck.service";
import {Observable, Subscription} from "rxjs";
import {Router} from "@angular/router";
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { AuthService } from 'src/app/auth/shared/auth.service';

@Component({
  selector: 'app-collections-list',
  animations: [
    trigger('openClose', [
      state('open', style({
        fontSize : '2rem',
        color : 'black'
      })),
      state('closed', style({
        fontSize : '1.5rem',
        color : 'mediumpurple'
      })),
      transition('open => closed', [
        animate('0.25s')
      ]),
      transition('closed => open', [
        animate('0.25s')
      ]),
    ]),
  ],
  templateUrl: './collections-list.component.html',
  styleUrls: ['./collections-list.component.css']
})
export class CollectionsListComponent implements OnInit {
  userId: number | undefined;

  searchPhrase: string | undefined;
  decks$: Observable<DecksDto[]> | undefined;

  publicShown: boolean = false;

  popupShown: boolean = false;
  currentPage = 1;
  itemsPerPage = 9;

  private newDeckSubscription: Subscription;

  constructor(private service: DeckService, private router: Router, private loginService: AuthService) {
    this.newDeckSubscription = this.service.getUpdate()
      .subscribe((deckCreated: boolean) => {
        this.closePopup();
        if(deckCreated) {
          this.loadDecks();
        }
      });
  }

  ngOnInit(): void {
    this.userId = this.loginService.getUserId();
    this.loadDecks();
  }

  private loadDecks() {
    if(this.userId)
    this.decks$ = this.publicShown ?
      this.service.getPublic("", this.currentPage, this.itemsPerPage)
      : this.service.getByUserId(this.userId, "");
  }

  searchDecks() {
    if(this.searchPhrase && this.searchPhrase!="" && this.userId)
      if(this.publicShown)
        this.decks$ = this.service.getPublic(this.searchPhrase, this.currentPage, this.itemsPerPage);
      else
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
    this.loadDecks();
    this.searchPhrase = "";
  }

  showPublic() {
    this.publicShown = true;
    this.loadDecks();
    this.searchPhrase = "";
  }

  goToCollectionPreview(id: number) {
    this.router.navigateByUrl("/collections/preview/"+id)
  }

  previousPage() {
    this.currentPage--;
    this.loadDecks();
  }

  nextPage() {
    this.currentPage++;
    this.loadDecks();
  }
}
