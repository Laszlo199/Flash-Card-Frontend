import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { MatButtonToggle } from '@angular/material/button-toggle';
import {PomodoroService} from "../pomodoro.service";


@Component({
  selector: 'app-switching-modes',
  templateUrl: './switching-modes.component.html',
  styleUrls: ['./switching-modes.component.css']
})
export class SwitchingModesComponent implements OnInit {
  @Output() timerControlEvent = new EventEmitter<string>();
  @Output() changeStartEvent = new EventEmitter<string>();
  public selectedVal: string = '';

  constructor(private pomodoroService: PomodoroService) {
  }

  public onValChange(val: string) {
    this.selectedVal = val;
  }



  ngOnInit(): void {
   // this.selectedVal ='draft';
    this.selectedVal = this.pomodoroService.currentTimer;
  }

  clickEvent(type: string) {
    this.timerControlEvent.emit(type);
    this.pomodoroService.currentTimer = type;
  }

  clickEvent2(type: string) {
    this.changeStartEvent.emit(type);
  }


}
