import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges} from '@angular/core';
import {PomodoroService} from "../pomodoro.service";

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent implements OnInit, OnChanges, OnDestroy {
  @Input() change: any;
  @Output() timerControlEvent = new EventEmitter<string>();
  start: string = 'Start';
  i: number = 0;

  constructor(private pomodoroService: PomodoroService) {
  }

  /*we need to reset that each time we switch the mode*/
  clickEvent(action: string | undefined) {
    this.timerControlEvent.emit(action);

    if (this.pomodoroService.getStartState() == 'Start') {
      this.start = 'Pause';
      this.pomodoroService.saveStartState(this.start)
    } else {
      this.start = 'Start';
      this.pomodoroService.saveStartState(this.start);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.i = 0;
    this.start = this.pomodoroService.getStartState();
  }

  ngOnDestroy(): void {
    this.pomodoroService.saveStartState(this.start);
  }

  ngOnInit(): void {

    this.start = this.pomodoroService.getStartState();
  }

}
