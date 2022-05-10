import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Input() counter: { type: number, value: number };

  constructor() { }

  ngOnInit(): void {
  }

  
}
