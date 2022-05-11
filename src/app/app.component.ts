import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  numbers = [];

  onCounterCreated(Counterdata: {value: number}) {
    console.log('Counter: ' + Counterdata.value)
  }

  oddNumberCreated(oddNumberData: {value: number}) {
    this.numbers.push({
      value: oddNumberData.value,
      type: 'Odd - NUMBER'
    })
  }

  evenNumberCreated(evenNumberData: {value: number}) {
    this.numbers.push({
      value: evenNumberData.value,
      type: 'Even - NUMBER'
    })
  }
}
