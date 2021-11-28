import {Component, Input, OnInit} from '@angular/core';
import {CardDto} from "../shared/dtos/card.dto";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() card: CardDto | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
