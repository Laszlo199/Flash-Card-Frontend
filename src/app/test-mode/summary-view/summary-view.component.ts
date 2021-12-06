import {Component, Input, OnInit} from '@angular/core';
import {CardDto} from "../../collections/shared/dtos/card/card.dto";
import {SummaryService} from "../shared/summary.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-summary-view',
  templateUrl: './summary-view.component.html',
  styleUrls: ['./summary-view.component.css']
})
export class SummaryViewComponent implements OnInit {

  correctCards: Array<CardDto> = [];
  wrongCards: Array<CardDto> = [];
  skippedCards: Array<CardDto> = [];

  constructor(private service: SummaryService, private router: Router) { }

  ngOnInit(): void {
    this.correctCards = this.service.getCorrectCards();
    this.wrongCards = this.service.getWrongCards();
    this.skippedCards = this.service.getSkippedCards();
  }

  goBack() {
    this.router.navigateByUrl("/collections/"+this.service.getDeckId());
  }
}
