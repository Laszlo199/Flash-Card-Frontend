import {Injectable} from '@angular/core';
import {interval, Observable, Subject} from "rxjs";
import {repeatWhen, takeUntil, takeWhile} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PomodoroService {
  private _pomodoroTime :number = 25;
  private _shortBreakTime :number = 5;
  private _longBreakTime :number = 10;
  private no:number =1;

  start1: string = 'Start';
  private isRunning: boolean = false;

  private readonly _timer$: Observable<number>;
  private _currentTimer = 'pomodoro';

  private _time = 25;
  private _timerRemaining = this.timerStartValue;
  private start$ = new Subject();
  private stop$ = new Subject();
  private audio: HTMLAudioElement | undefined;

  private sampleObservable = new Subject<string>();
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
       /* this.setPomodoroTimer();
        this.sampleObservable.next("pomodoro");
        this.completeTimer();*/
        if(this._currentTimer=='pomodoro' && this.no<=3){
          this.no++;
          //this.sampleObservable.next("short-break");
          this.nextShortBreak()
        }
        else if(this._currentTimer=='pomodoro' && this.no==4){
         // this.no++;
          this.nextLongBreak()
        }
       else if(this._currentTimer=='short-break'){
          this.nextPomodoro()
        }
       else if(this._currentTimer=='long-break'){
          this.no = 1;
          this.nextPomodoro()
        }

      }
    });

    this.stop(); // initially stop
  }

  private nextPomodoro(){
    this.completeTimer();
    this.setPomodoroTimer();
    this.sampleObservable.next("pomodoro");
    this.sampleObservable.next("pomodoro1");
  }

  //change that
  private nextShortBreak(){
    this.completeTimer();
    this.setShortBreakTimer();
    this.sampleObservable.next("short-break");
  }

  private nextLongBreak(){
    this.completeTimer();
    this.setLongBreakTimer();
    this.sampleObservable.next("long-break");
  }

  private get timerStartValue() {
   return this._time * 60; // seconds
   //return 2;
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
    this.setTimer('pomodoro', this._pomodoroTime);
  }

  public setShortBreakTimer() {
    this.saveStartState('Start');
    this.setTimer('short-break', this._shortBreakTime);
  }

  public setLongBreakTimer() {
    this.saveStartState('Start');
    this.setTimer('long-break', this._longBreakTime);
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
    this._time = time;
    this._timerRemaining = this.timerStartValue;
    this._currentTimer = timerType;
    this.restart();
  }


  get pomodoroTime(): number {
    return this._pomodoroTime;
  }

  set pomodoroTime(value: number) {
    this._pomodoroTime = value;
    if(this.start1=='Start' && this._currentTimer=='pomodoro') {
      this.setPomodoroTimer()
      this.refresh('pomodoro')
    }

  }

  refresh(val:string){
      this.sampleObservable.next(val);
  }

  get shortBreakTime(): number {
    return this._shortBreakTime;
  }

  set shortBreakTime(value: number) {
    this._shortBreakTime = value;
    if(this.start1=='Start' && this._currentTimer=='short-break') {
      this.setShortBreakTimer()
      this.refresh('short-break')
    }

  }

  get longBreakTime(): number {
    return this._longBreakTime;
  }

  set longBreakTime(value: number) {
    this._longBreakTime = value;
    if(this.start1=='Start' && this._currentTimer=='long-break') {
      this.setLongBreakTimer()
      this.refresh('long-break')
    }

  }

}
