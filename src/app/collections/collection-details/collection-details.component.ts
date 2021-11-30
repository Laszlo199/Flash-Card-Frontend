import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DeckDto} from "../shared/dtos/deck/deck.dto";
import {Observable, Subscription} from "rxjs";
import {CardService} from "../shared/card.service";
import {DeckService} from "../shared/deck.service";

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

  constructor(private route: ActivatedRoute, private cardService: CardService,
              private deckService: DeckService, private router: Router) {

    this.newCardSubscription = this.cardService.getUpdate()
      .subscribe((id: number) => {
        this.deck$ = this.cardService.getByDeckId(id, this.sortOrder);
    });
  }

  ngOnInit(): void {
    // @ts-ignore
    this.deckId = +this.route.snapshot.paramMap.get('id');
    this.deck$ = this.cardService.getByDeckId(this.deckId, "");
  }

  sort(orderBy: string) {
    if(this.deckId) {
      this.sortOrder = orderBy;
      this.deck$ = this.cardService.getByDeckId(this.deckId, this.sortOrder);
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
}
