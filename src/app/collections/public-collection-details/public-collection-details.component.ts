import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CardService} from "../shared/card.service";
import {DeckDto} from "../shared/dtos/deck/deck.dto";
import {Observable} from "rxjs";
import {DeckService} from "../shared/deck.service";
import {AuthService} from "../../auth/shared/auth.service";

@Component({
  selector: 'app-public-collection-details',
  templateUrl: './public-collection-details.component.html',
  styleUrls: ['./public-collection-details.component.css']
})
export class PublicCollectionDetailsComponent implements OnInit {

  deckId: number | undefined;
  deck$: Observable<DeckDto> | undefined;
  userId: number | undefined;
  errorMsg: string = "";

  constructor(private router: Router, private route: ActivatedRoute,
              private service: CardService, private deckService: DeckService,
              private loginService: AuthService) { }

  ngOnInit(): void {
    // @ts-ignore
    this.deckId = +this.route.snapshot.paramMap.get('id');
    this.userId = this.loginService.getUserId();
    this.loadDeck();
  }

  private loadDeck() {
    if (this.deckId) {
      this.deck$ = this.service.getByDeckId(this.deckId, "question_asc");
    }
  }

  backToCollections() {
    this.router.navigateByUrl("/collections")
  }

  addCollection() {
    if(this.deckId && this.userId)
      this.deckService.createCopiedDeck(this.deckId, this.userId)
        .subscribe(newDeck=>{
          this.router.navigateByUrl("/collections/"+newDeck.id)
        },error => {
          console.log(error);
          this.errorMsg = "cannot add this collection";
        })
  }
}
