import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent implements OnInit {
  @Output() timerControlEvent = new EventEmitter<string>();
  start: string = 'Start';
  i: number = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  clickEvent(action: string | undefined) {
    this.timerControlEvent.emit(action);
    this.i++;
    if (this.i % 2 != 0)
      this.start = "Stop";
    else this.start = "Start";
  }



}
