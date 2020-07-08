import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() counterStarted = new EventEmitter<number>();
  counter;
  y = 1;

  constructor() { }

  ngOnInit(): void {
  }

  onStartGame(){
    this.counter = setInterval(() => {
      this.counterStarted.emit(this.y);
      this.y++;
    }, 1000);
  }

  onStopGame(){
    clearInterval(this.counter);
  }
}
