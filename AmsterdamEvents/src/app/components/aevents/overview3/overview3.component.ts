import {Component, OnInit} from '@angular/core';
import {AEvent} from "../../../models/a-event";
import {AEventsService} from "../../../services/a-events.service";

@Component({
  selector: 'app-overview3',
  templateUrl: './overview3.component.html',
  styleUrls: ['./overview3.component.css']
})
export class Overview3Component implements OnInit {

  selectedAEventId: number | undefined;
  updatedAtEventId: number | undefined;

  selectedAEvent: AEvent | undefined;

  constructor(public aEventsService: AEventsService) {}

  ngOnInit(): void {
    for (let i = 0; i < 9; i++) {
      this.aEventsService.save(<AEvent>AEvent.createRandomAEvent())
    }
  }

  aEventSelectedHandler(aEvent: AEvent) {
    this.selectedAEventId = aEvent.id;
    this.selectedAEvent = Object.assign({}, aEvent);
  }
}
