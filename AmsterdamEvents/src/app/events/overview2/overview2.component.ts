import { Component, OnInit } from '@angular/core';
import {AEvent} from "../../models/a-event";

@Component({
  selector: 'app-overview2',
  templateUrl: './overview2.component.html',
  styleUrls: ['./overview2.component.css']
})
export class Overview2Component implements OnInit {
  aEvents = [] as AEvent[];

  constructor() {
  }

  ngOnInit(): void {
    for (let i = 0; i < 9; i++) {
      this.addRandomEvent()
    }
  }

  addRandomEvent() {
    this.aEvents.push(<AEvent>AEvent.createRandomAEvent());
  }
}
