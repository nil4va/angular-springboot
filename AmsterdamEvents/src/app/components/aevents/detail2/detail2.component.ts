import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {AEvent} from "../../../models/a-event";
import {AEventStatusArrayMapper} from "../../../mapper/a-event-status-array-mapper";

@Component({
  selector: 'app-detail2',
  templateUrl: './detail2.component.html',
  styleUrls: ['./detail2.component.css']
})
export class Detail2Component implements OnInit {

  @Input() selectedAEvent: AEvent | undefined;
  @Output() selectedAEventUpdated: EventEmitter<AEvent> = new EventEmitter<AEvent>();
  @Output() selectedAEventRemoved: EventEmitter<AEvent> = new EventEmitter<AEvent>();

  statusArray: any;

  constructor() { }

  ngOnInit(): void {
    this.statusArray = AEventStatusArrayMapper.map();
  }

  updateSelectedAEvent() {
    this.selectedAEventUpdated.emit(this.selectedAEvent);
  }

  deleteSelectedAEvent() {
    this.selectedAEventRemoved.emit(this.selectedAEvent);
    this.selectedAEvent = undefined;
  }
}
