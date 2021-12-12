import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent implements OnInit {
  @Output() timerControlEvent = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }

  clickEvent(action: string | undefined) {
    this.timerControlEvent.emit(action);
  }

}
