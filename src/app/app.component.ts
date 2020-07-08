import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  odd=[];
  even=[];
  onCounterStarted(firedNumber: number){
    console.log(firedNumber);
    if(firedNumber % 2 != 0){
      this.odd.push(firedNumber);
    }else this.even.push(firedNumber);
  }
}
