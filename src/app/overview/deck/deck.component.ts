import {Component, HostListener, Input, OnInit} from '@angular/core';
import {OverviewService} from "../shared/overview.service";
import {DeckOverview} from "../shared/deckOverview";
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css'],
  animations: [
    trigger('openClose', [
      state('open', style({
        height : '200px',
        width : '400px'
      })),
      state('closed', style({
        height : '*',
        width : '100%'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ],
})
export class DeckComponent implements OnInit {
  @Input() deck: DeckOverview | undefined;
  isHover:boolean | undefined;

  constructor(private service: OverviewService) { }

  ngOnInit(): void {
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.isHover = true;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.isHover = false;
  }

}
