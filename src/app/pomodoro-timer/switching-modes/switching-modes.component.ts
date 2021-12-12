import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-switching-modes',
  templateUrl: './switching-modes.component.html',
  styleUrls: ['./switching-modes.component.css']
})
export class SwitchingModesComponent implements OnInit {
  @Output() timerControlEvent = new EventEmitter<string>();
  @Output() changeStartEvent = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }

  clickEvent(type: string) {
    this.timerControlEvent.emit(type);
  }

  clickEvent2(type: string) {
    this.changeStartEvent.emit(type);
  }


}
