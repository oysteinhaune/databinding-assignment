import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  IntervalCounter;
  IntervalCounterIndex = 0;
  
  @Output() counterCreated = new EventEmitter<{ value: number }>();
  @Output() oddNumberCreated = new EventEmitter<{ value: number}>();
  @Output() evenNumberCreated = new EventEmitter<{ value: number}>();
  constructor() { }

  ngOnInit(): void {
  }

  startIntervalCounter() {
    this.IntervalCounter = setInterval(() => {
      this.IntervalCounterIndex += 1
      this.counterCreated.emit({ value: this.IntervalCounterIndex});
      this.numberCheck();
    }, 1000)
  }

  numberCheck() {
    if(this.IntervalCounterIndex % 2 === 0) {
      this.oddNumberCreated.emit({ value: this.IntervalCounterIndex});
    } else {
      this.evenNumberCreated.emit({ value: this.IntervalCounterIndex});
    }
  }

  onGameStart() {
    this.startIntervalCounter()
  }

  onGameStop() {
    clearInterval(this.IntervalCounter)
  }
}
