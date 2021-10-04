import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AEventStatusArrayMapper} from "../../mapper/a-event-status-array-mapper";
import {AEvent} from "../../models/a-event";
import {AEventsService} from "../../services/a-events.service";

@Component({
  selector: 'app-detail3',
  templateUrl: './detail3.component.html',
  styleUrls: ['./detail3.component.css']
})
export class Detail3Component implements OnInit {

  @Input() selectedAEventId: number | undefined;
  @Input() updatedAtEventId: number | undefined;

  @Input() selectedAEvent: AEvent | undefined;

  @Output() selectedAEventUpdated: EventEmitter<AEvent> = new EventEmitter<AEvent>();

  statusArray: any;

  constructor(private aEventsService: AEventsService) {}

  ngOnInit(): void {
    this.statusArray = AEventStatusArrayMapper.map();
  }

  hasFormChanged(): boolean {
    if (this.selectedAEvent === undefined) {
      return false;
    }

    const originalSelectedAEvent = this.aEventsService.findById(this.selectedAEvent.id);
    if (originalSelectedAEvent === null) {
      return false;
    }

    else if (this.selectedAEvent.title !== originalSelectedAEvent.title) {
      return true;
    }

    else if (this.selectedAEvent.start !== originalSelectedAEvent.start) {
      return true;
    }

    else if (this.selectedAEvent.end !== originalSelectedAEvent.end) {
      return true;
    }

    else if (this.selectedAEvent.description !== originalSelectedAEvent.description) {
      return true;
    }

    else if (this.selectedAEvent.status !== originalSelectedAEvent.status) {
      return true;
    }

    else if (this.selectedAEvent.isTicketed !== originalSelectedAEvent.isTicketed) {
      return true;
    }

    else if (this.selectedAEvent.participationFee !== originalSelectedAEvent.participationFee) {
      return true;
    }

    else if (this.selectedAEvent.maxParticipants !== originalSelectedAEvent.maxParticipants) {
      return true;
    }
    return false;
  }

  updateSelectedAEvent() {
    if (this.selectedAEvent === undefined) {
      return;
    }
    this.aEventsService.save(this.selectedAEvent);
  }

  //TODO: Create alert to confirm; Delete, clear, reset, and cancel. Check if something has changed.
  //TODO: Disable the Save and reset if nothing has changed. And the delete button when there are unsaved changes (using the "hasFormChanged" method).

  clearSelectedAEvent() {
    if (this.selectedAEvent === undefined) {
      return;
    }
    this.selectedAEvent.title = '';
    this.selectedAEvent.description = '';
    this.selectedAEvent.start = new Date();
    this.selectedAEvent.end = new Date();
    this.selectedAEvent.description = '';
    this.selectedAEvent.status = '';
    this.selectedAEvent.isTicketed = false;
    this.selectedAEvent.participationFee = 0;
    this.selectedAEvent.maxParticipants = 0;
  }

  resetSelectedAEvent() {
    if (this.selectedAEvent === undefined) {
      return;
    }

    const originalAEvent = this.aEventsService.findById(this.selectedAEvent.id);
    if (originalAEvent === null) {
      return;
    }

    this.selectedAEvent.title = originalAEvent.title;
    this.selectedAEvent.description = originalAEvent.description;
    this.selectedAEvent.start = originalAEvent.start;
    this.selectedAEvent.end = originalAEvent.end;
    this.selectedAEvent.status = originalAEvent.status;
    this.selectedAEvent.isTicketed = originalAEvent.isTicketed;
    this.selectedAEvent.participationFee = originalAEvent.participationFee;
    this.selectedAEvent.maxParticipants = originalAEvent.maxParticipants;
  }

  saveSelectedAEvent() {
    if (this.selectedAEvent === undefined) {
      return;
    }

    console.log(this.aEventsService.aEvents)

    const originalAEvent = this.aEventsService.findById(this.selectedAEvent.id);
    if (originalAEvent === null) {
      return;
    }

    originalAEvent.title = this.selectedAEvent.title;
    originalAEvent.description = this.selectedAEvent.description;
    originalAEvent.start = this.selectedAEvent.start;
    originalAEvent.end = this.selectedAEvent.end;
    originalAEvent.status = this.selectedAEvent.status;
    originalAEvent.isTicketed = this.selectedAEvent.isTicketed;
    originalAEvent.participationFee = this.selectedAEvent.participationFee;
    originalAEvent.maxParticipants = this.selectedAEvent.maxParticipants;
  }

  cancelSelectedAEvent() {
    this.selectedAEvent = undefined;
    this.selectedAEventId = -1;
  }

  deleteSelectedAEvent() {
    if (this.selectedAEventId === undefined) {
      return;
    }
    this.aEventsService.deleteBy(this.selectedAEventId);
    this.selectedAEvent = undefined;
    this.selectedAEventId = undefined;
  }
}
