import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DeckService} from "../shared/deck.service";
import {DeckDto} from "../shared/dtos/deck/deck.dto";
import {Observable, Subscription} from "rxjs";
import {CardDto} from "../shared/dtos/card/card.dto";

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

  constructor(private route: ActivatedRoute, private service: DeckService) {

    this.newCardSubscription = this.service.getUpdate()
      .subscribe((id: number) => {
        this.deck$ = this.service.getByDeckId(id, this.sortOrder);
    });
  }

  ngOnInit(): void {
    // @ts-ignore
    this.deckId = +this.route.snapshot.paramMap.get('id');
    this.deck$ = this.service.getByDeckId(this.deckId, "");
  }

  sort(orderBy: string) {
    if(this.deckId) {
      this.sortOrder = orderBy;
      this.deck$ = this.service.getByDeckId(this.deckId, this.sortOrder);
    }
  }
}
