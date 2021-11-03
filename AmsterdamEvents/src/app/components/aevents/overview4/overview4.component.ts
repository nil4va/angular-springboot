import {Component, OnInit} from '@angular/core';
import {AEvent} from "../../../models/a-event";
import {AEventsService} from "../../../services/a-events.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-overview4',
  templateUrl: './overview4.component.html',
  styleUrls: ['./overview4.component.css']
})
export class Overview4Component implements OnInit {

  selectedAEventId: AEvent | any;
  updatedAtEventId: number | undefined;
  selectedAEvent: AEvent | undefined;

  constructor(public aEventsService: AEventsService, private  router: Router, private activatedRoute: ActivatedRoute) {
    activatedRoute.firstChild?.params.subscribe(this.selectedAEventId)
  }

  ngOnInit(): void {
    for (let i = 0; i < 9; i++) {
      this.aEventsService.save(<AEvent>AEvent.createRandomAEvent())
    }
  }

  onSelect (eId: number) {
    this.router.navigate([eId], { relativeTo: this.activatedRoute})
  }

  aEventSelectedHandler(aEvent: AEvent) {
    this.selectedAEventId = aEvent.id;
    this.selectedAEvent = Object.assign({}, aEvent);
  }
}
