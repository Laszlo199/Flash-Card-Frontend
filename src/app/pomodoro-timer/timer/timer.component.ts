import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {PomodoroService} from "../pomodoro.service";

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnChanges, OnInit {
  @Input() timerControlAction: string | undefined;
  @Output() completedTimer = new EventEmitter();

  private timerRemaining = 25 * 60;

  constructor(private pomodoroService: PomodoroService) {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.timerControlAction.currentValue === 'Start') {
      this.pomodoroService.start()
    } else if (changes.timerControlAction.currentValue === 'Pause') {
      this.pomodoroService.stop()
    } else if (changes.timerControlAction.currentValue === 'pomodoro') {
      this.pomodoroService.setPomodoroTimer();
    } else if (changes.timerControlAction.currentValue === 'short-break') {
      this.pomodoroService.setShortBreakTimer();
    } else if (changes.timerControlAction.currentValue === 'long-break') {
      this.pomodoroService.setLongBreakTimer();
    }
  }

  formatTime() {
    return new Date(this.timerRemaining * 1000).toISOString().substr(14, 5); // mm:ss format
  }

  ngOnInit(): void {
    this.timerRemaining = this.pomodoroService.timerRemaining
    this.formatTime();

    this.pomodoroService.timer$.subscribe(() =>
      this.timerRemaining = this.pomodoroService.timerRemaining
    )
  }
}
