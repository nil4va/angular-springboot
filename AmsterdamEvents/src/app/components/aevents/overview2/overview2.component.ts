import {Component, OnInit} from '@angular/core';
import {AEvent} from "../../../models/a-event";

@Component({
  selector: 'app-overview2',
  templateUrl: './overview2.component.html',
  styleUrls: ['./overview2.component.css']
})
export class Overview2Component implements OnInit {

  aEvents = [] as AEvent[];
  selectedAEvent: AEvent | undefined;

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

  aEventChangedHandler(aEvent: AEvent) {
    this.selectedAEvent = aEvent;
  }

  aEventDeletedHandler(aEventToRemove: AEvent) {
    this.aEvents.forEach((aEvent,index)=>{
      if (aEvent === aEventToRemove) {
        this.aEvents.splice(index,1);
        return;
      }
    });
  }
}
