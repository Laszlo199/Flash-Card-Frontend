import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {interval, Observable, Subject} from "rxjs";
import {repeatWhen, takeUntil, takeWhile} from "rxjs/operators";

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit, OnChanges {
  @Input() timerControlAction: string | undefined;
  @Output() completedTimer = new EventEmitter();
  private timer$: Observable<number>;
  private currentTimer = 'pomodoro';

  private time = 25; // initial timer amount in minutes
  private timerRemaining = this.timerStartValue;
  private start$ = new Subject();
  private stop$ = new Subject();

  constructor() {
    this.timer$ = interval(1000).pipe(
      takeUntil(this.stop$),
      takeWhile(v => v >= 0),
      repeatWhen(() => this.start$)
    ); // 1 second interval
  }

  private get timerStartValue() {
    return this.time * 60; // seconds
  }

  ngOnInit(): void {
    this.timer$.subscribe(() => {
      this.timerRemaining -= 1; // countdown 1 by 1
      this.formatTime();
      const percentage = ((this.timerStartValue - this.timerRemaining) / this.timerStartValue) * 100;
      if (percentage === 100) {
        this.completeTimer();
      }
    });

    this.stop(); // initially stop
  }

  formatTime() {
    return new Date(this.timerRemaining * 1000).toISOString().substr(14, 5); // mm:ss format
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.timerControlAction.currentValue === 'Start') {
      this.start()
    }
    if (changes.timerControlAction.currentValue === 'Stop') {
      this.stop()
    }
  }

  private completeTimer() {
    this.playAudio();
    this.updateStats();
    this.stop();
  }

  private playAudio() {
    const audio = new Audio('assets/bell.mp3');
    audio.play();
  }

  private updateStats() {
    this.completedTimer.emit(this.currentTimer);
  }

  private stop() {
    this.stop$.next();
  }

  private start() {
    this.start$.next();
  }

  private restart() {
    this.stop();
    this.timerRemaining = this.timerStartValue;
  }
}
