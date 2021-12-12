import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent implements OnInit, OnChanges {
  @Input() change: any;
  @Output() timerControlEvent = new EventEmitter<string>();
  start: string = 'Start';
  i: number = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  /*we need to reset that each time we switch the mode*/
  clickEvent(action: string | undefined) {
    this.timerControlEvent.emit(action);


    this.i++;
    if (this.i % 2 != 0)
      this.start = "Pause";
    else this.start = "Start";
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.i = 0;
    this.start = "Start"
  }


}
