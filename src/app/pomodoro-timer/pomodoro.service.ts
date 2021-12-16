import {Injectable} from '@angular/core';
import {interval, Observable, Subject} from "rxjs";
import {repeatWhen, takeUntil, takeWhile} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PomodoroService {

  start1: string = 'Start';
  private isRunning: boolean = false;

  private readonly _timer$: Observable<number>;
  private _currentTimer = 'pomodoro';

  private time = 25;
  private _timerRemaining = this.timerStartValue;
  private start$ = new Subject();
  private stop$ = new Subject();
  private audio: HTMLAudioElement | undefined;

  private sampleObservable = new Subject<boolean>();
  // Observable boolean streams
  sampleSubscriber = this.sampleObservable.asObservable();

  constructor() {
    this._timer$ = interval(1000).pipe(
      takeUntil(this.stop$),
      takeWhile(v => v >= 0),
      repeatWhen(() => this.start$)
    ); // 1 second interval


    this._timer$.subscribe(() => {
      this._timerRemaining -= 1; // countdown 1 by 1
      const percentage = ((this.timerStartValue - this._timerRemaining) /
        this.timerStartValue) * 100;
      if (percentage == 100) {
        this.sampleObservable.next();
        this.completeTimer();

      }
    });

    this.stop(); // initially stop
  }

  private get timerStartValue() {
    return this.time * 60; // seconds


  }


  set currentTimer(value: string) {
    this._currentTimer = value;
  }

  public stop() {
    this.stop$.next();
    this.isRunning = false;
  }


  get currentTimer(): string {
    return this._currentTimer;
  }


  get timer$(): Observable<number> {
    return this._timer$;
  }

  get timerRemaining(): number {
    return this._timerRemaining;
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
    this._timerRemaining = this.timerStartValue;
  }

  saveStartState(start: string) {
    this.start1 = start;
  }

  getStartState() {
    return this.start1;
  }

  private completeTimer() {
    this.playAudio();
    this.stop();
  }

  private playAudio() {
    this.audio = new Audio();
    this.audio.src = "../../../assets/Sounds/sound2.mp3";
    this.audio.load();
    this.audio.play();
  }

  private setTimer(timerType: string, time: number) {
    this.time = time;
    this._timerRemaining = this.timerStartValue;
    this._currentTimer = timerType;
    this.restart();
  }

}
