import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DeckDto} from "../shared/dtos/deck/deck.dto";
import {Observable, Subscription} from "rxjs";
import {CardService} from "../shared/card.service";
import {DeckService} from "../shared/deck.service";
import {PutDeckDto} from "../shared/dtos/deck/put-deck.dto";
import {GoToPractisePopupComponent} from "../go-to-practise-popup/go-to-practise-popup.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-collection-details',
  templateUrl: './collection-details.component.html',
  styleUrls: ['./collection-details.component.css']
})
export class CollectionDetailsComponent implements OnInit {
  deckId: number | undefined;
  deck$: Observable<DeckDto> | undefined;
  sortOrder: string = "";

  private newCardSubscription: Subscription;

  editDeckMode: boolean = false;
  newTitle: string = "";
  newDescription: string = "";
  isPublic: boolean = false;

  constructor(private route: ActivatedRoute, private cardService: CardService,
              private deckService: DeckService, private router: Router,
              private dialog: MatDialog) {

    this.newCardSubscription = this.cardService.getUpdate()
      .subscribe((id: number) => {
        this.deck$ = this.cardService.getByDeckId(id, this.sortOrder);
    });
  }

  ngOnInit(): void {
    // @ts-ignore
    this.deckId = +this.route.snapshot.paramMap.get('id');
    this.loadDeck("");
  }

  private loadDeck(sortOrder: string) {
    if (this.deckId) {
      this.deck$ = this.cardService.getByDeckId(this.deckId, sortOrder);
    }
  }

  sort(orderBy: string) {
    if(this.deckId) {
      this.sortOrder = orderBy;
      this.loadDeck(this.sortOrder);
    }
  }

  deleteDeck() {
    if(confirm("Are you sure you want to delete this collection?") && this.deckId) {
      this.deckService.deleteDeck(this.deckId)
        .subscribe(data=> {
          this.router.navigateByUrl("/collections");
        })
    }
  }

  backToCollections() {
    this.router.navigateByUrl("/collections");
  }

  editDeck(name: string, description: string, isPublic: boolean) {
    this.editDeckMode = true;

    this.newTitle = name;
    this.newDescription = description;
    this.isPublic = isPublic
  }

  cancelEdit() {
    this.editDeckMode = false;
  }

  saveEdit() {
    if(this.deckId) {
      let deck: PutDeckDto = {
        "id": this.deckId,
        "name": this.newTitle,
        "description": this.newDescription,
        "isPublic": this.isPublic
      }

      this.deckService.updateDeck(deck)
        .subscribe(data=> {
          this.loadDeck(this.sortOrder);
          this.editDeckMode=false;
        })
    }


  }

  goToTestMode() {
    /*this.router.navigateByUrl("/test-mode/"+this.deckId);*/
    const dialogRef= this.dialog.open(GoToPractisePopupComponent,
      {
        height: '50vh',
        width: '30vw',
        data: {
          id: this.deckId
        }
      });
  }
}
