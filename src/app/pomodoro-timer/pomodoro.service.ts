import {Injectable} from '@angular/core';
import {interval, Observable, Subject} from "rxjs";
import {repeatWhen, takeUntil, takeWhile} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PomodoroService {

  start1: string = 'Start';
  private isRunning: boolean = false;

  public timer$: Observable<number>;
  private currentTimer = 'pomodoro';

  private time = 25; // initial timer amount in minutes
  public timerRemaining = this.timerStartValue;
  private start$ = new Subject();
  private stop$ = new Subject();

  constructor() {
    this.timer$ = interval(1000).pipe(
      takeUntil(this.stop$),
      takeWhile(v => v >= 0),
      repeatWhen(() => this.start$)
    ); // 1 second interval


    this.timer$.subscribe(() => {
      this.timerRemaining -= 1; // countdown 1 by 1
      const percentage = ((this.timerStartValue - this.timerRemaining) /
        this.timerStartValue) * 100;
      if (percentage === 100) {
        this.completeTimer();
      }
    });

    this.stop(); // initially stop
  }

  private get timerStartValue() {
    return this.time * 60; // seconds
  }

  public stop() {
    this.stop$.next();
    this.isRunning = false;
  }

  public start() {
    this.isRunning = true;
    this.start$.next();
  }

  public setPomodoroTimer() {
    this.saveStartState('Start');
    this.setTimer('pomodoro', 25);
  }

  public setShortBreakTimer() {
    this.saveStartState('Start');
    this.setTimer('short-break', 5);
  }

  public setLongBreakTimer() {
    this.saveStartState('Start');
    this.setTimer('long-break', 10);
  }

  public restart() {
    this.stop();
    this.timerRemaining = this.timerStartValue;
  }

  saveStartState(start: string) {
    this.start1 = start;
  }

  getStartState() {
    return this.start1;
  }

  private completeTimer() {
    this.playAudio();
    // this.updateStats();
    this.stop();
  }

  private playAudio() {
    const audio = new Audio('assets/bell.mp3');
    audio.play();
  }

  private setTimer(timerType: string, time: number) {
    this.time = time;
    this.timerRemaining = this.timerStartValue;
    this.currentTimer = timerType;
    this.restart();
  }
}
