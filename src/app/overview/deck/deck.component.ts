import {Component, Input, OnInit} from '@angular/core';
import {DecksDto} from "../../collections/shared/dtos/deck/decks.dto";
import {OverviewService} from "../overview.service";
import {CardDto} from "../../collections/shared/dtos/card/card.dto";
import {DeckOverview} from "../shared/deckOverview";

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css']
})
export class DeckComponent implements OnInit {
  @Input() deck: DeckOverview | undefined;

  constructor(private service: OverviewService) { }

  ngOnInit(): void {
  }

}
