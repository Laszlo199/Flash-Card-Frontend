import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {PomodoroService} from "../pomodoro.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnChanges, OnInit {
  @Input() timerControlAction: string | undefined;
  @Output() completedTimer = new EventEmitter(); // we dont need that anymore ??
  // Subscription
  private componentSubscription: Subscription;
  private timerRemaining = 25 * 60;

  constructor(private pomodoroService: PomodoroService) {
    this.componentSubscription= this.pomodoroService.sampleSubscriber.subscribe(() =>
    {
     // this.pomodoroService.setPomodoroTimer();
      this.refresh();
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.timerControlAction.currentValue === 'Start') {
      this.pomodoroService.start()
    } else if (changes.timerControlAction.currentValue === 'Pause') {
      this.pomodoroService.stop()
    } else if (changes.timerControlAction.currentValue === 'pomodoro') {
      this.pomodoroService.setPomodoroTimer();
      this.refresh();
    } else if (changes.timerControlAction.currentValue === 'short-break') {
      this.pomodoroService.setShortBreakTimer();
      this.refresh();
    } else if (changes.timerControlAction.currentValue === 'long-break') {
      this.pomodoroService.setLongBreakTimer();
      this.refresh();
    }

    this.timerRemaining = this.pomodoroService.timerRemaining
    this.formatTime();
  }

  formatTime() {
    return new Date(this.timerRemaining * 1000).toISOString().substr(14, 5); // mm:ss format
  }

  ngOnInit(): void {
    this.refresh();

    this.pomodoroService.timer$.subscribe(() =>
      this.timerRemaining = this.pomodoroService.timerRemaining
    )
  }

  refresh(){
    this.timerRemaining = this.pomodoroService.timerRemaining
    this.formatTime();
  }
}
