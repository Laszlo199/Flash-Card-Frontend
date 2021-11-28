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
  id: number | undefined;
  deck$: Observable<DeckDto> | undefined;

  private newCardSubscription: Subscription;

  constructor(private route: ActivatedRoute, private service: DeckService) {

    this.newCardSubscription = this.service.getUpdate()
      .subscribe((id: number) => {
        this.deck$ = this.service.getByDeckId(id);
    });
  }

  ngOnInit(): void {
    // @ts-ignore
    this.id = +this.route.snapshot.paramMap.get('id');
    this.deck$ = this.service.getByDeckId(this.id);
  }

}
