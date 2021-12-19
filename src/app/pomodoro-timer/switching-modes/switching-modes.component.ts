import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { MatButtonToggle } from '@angular/material/button-toggle';
import {PomodoroService} from "../pomodoro.service";
import {Subscription} from "rxjs";


@Component({
  selector: 'app-switching-modes',
  templateUrl: './switching-modes.component.html',
  styleUrls: ['./switching-modes.component.css']
})
export class SwitchingModesComponent implements OnInit {
  @Output() timerControlEvent = new EventEmitter<string>();
  @Output() changeStartEvent = new EventEmitter<string>();
  public selectedVal: string = '';
  // Subscription
  private componentSubscription: Subscription;
  constructor(private pomodoroService: PomodoroService) {
    this.componentSubscription= this.pomodoroService.sampleSubscriber.subscribe((value) =>
    {
      if(value=='pomodoro'){
      this.selectedVal = 'pomodoro'
      this.pomodoroService.currentTimer = 'pomodoro';
      }
      if(value=='short-break'){
        this.selectedVal = 'short-break'
        this.pomodoroService.currentTimer = 'short-break'; //
      }
      if(value=='long-break'){
        this.selectedVal = 'long-break'
        this.pomodoroService.currentTimer = 'long-break'; //
      }
    });
  }

  public onValChange(val: string) {
    this.selectedVal = val;
  }



  ngOnInit(): void {
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
