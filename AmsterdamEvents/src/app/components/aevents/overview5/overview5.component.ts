import {Component, OnInit} from '@angular/core';
import {AEvent} from "../../../models/a-event";
import {AEventsService} from "../../../services/a-events.service";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import { Routes } from 'src/app/common/routes/routes';
import {AEventsSbService} from "../../../services/a-events-sb.service";

@Component({
  selector: 'app-overview5',
  templateUrl: './overview5.component.html',
  styleUrls: ['./overview5.component.css']
})
export class Overview5Component implements OnInit {

  selectedAEventId: AEvent | any;
  updatedAtEventId: number | undefined;
  selectedAEvent: AEvent | undefined;

  constructor(public aEventsService: AEventsService, private  router: Router, private activatedRoute: ActivatedRoute, public aEventsSbService: AEventsSbService) {
    // Create random events
    for (let i = 0; i < 9; i++) {
      this.aEventsService.save(<AEvent>AEvent.createRandomAEvent())
    }

    this.routeChangeListener();
    this.selectedAEventChangeListener();
  }

  ngOnInit(): void {
  }

  onSelect (eId: number) {
    this.router.navigate([eId], { relativeTo: this.activatedRoute})
  }

  aEventSelectedHandler(aEvent: AEvent) {
    this.selectedAEventId = aEvent.id;
    this.selectedAEvent = Object.assign({}, aEvent);
  }

  routeChangeListener() {
    this.router.events.subscribe((routerEvent) => {
      if (!(routerEvent instanceof NavigationEnd)) {
        return;
      }
      if (routerEvent.url === Routes.DETAIL_4_OVERVIEW) {
        this.selectedAEventId = -1;
      }
    });
  }

  selectedAEventChangeListener() {
    const instance = this;
    this.activatedRoute.firstChild?.params.subscribe(function(params) {
      instance.selectedAEventId = +params.id ?? -1;
    });
  }
}
