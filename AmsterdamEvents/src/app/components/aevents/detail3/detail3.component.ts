import {Component, Input, OnInit} from '@angular/core';
import {AEventStatusArrayMapper} from "../../../mapper/a-event-status-array-mapper";
import {AEvent} from "../../../models/a-event";
import {AEventsService} from "../../../services/a-events.service";

@Component({
  selector: 'app-detail3',
  templateUrl: './detail3.component.html',
  styleUrls: ['./detail3.component.css']
})
export class Detail3Component implements OnInit {

  @Input() selectedAEventId: number | undefined;
  @Input() updatedAtEventId: number | undefined;

  @Input() selectedAEvent: AEvent | undefined;

  statusArray: any;
  hasChanged: boolean = false;

  constructor(private aEventsService: AEventsService) {}

  ngOnInit(): void {
    this.statusArray = AEventStatusArrayMapper.map();
    this.updateHasChanged();
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

  updateHasChanged() {
    this.hasChanged = this.hasFormChanged();
  }

  clearSelectedAEvent() {
    if (this.selectedAEvent === undefined) {
      return;
    }

    if (this.hasChanged) {
      const confirmation = confirm('Are you sure you want to discard unsaved changes?');
      if (!confirmation) {
        return;
      }
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

    this.updateHasChanged();
  }

  resetSelectedAEvent() {
    if (this.selectedAEvent === undefined) {
      return;
    }

    const originalAEvent = this.aEventsService.findById(this.selectedAEvent.id);
    if (originalAEvent === null) {
      return;
    }

    if (this.hasChanged) {
      const confirmation = confirm('Are you sure you want to discard unsaved changes?');
      if (!confirmation) {
        return;
      }
    }

    this.selectedAEvent.title = originalAEvent.title;
    this.selectedAEvent.description = originalAEvent.description;
    this.selectedAEvent.start = originalAEvent.start;
    this.selectedAEvent.end = originalAEvent.end;
    this.selectedAEvent.status = originalAEvent.status;
    this.selectedAEvent.isTicketed = originalAEvent.isTicketed;
    this.selectedAEvent.participationFee = originalAEvent.participationFee;
    this.selectedAEvent.maxParticipants = originalAEvent.maxParticipants;

    this.updateHasChanged();
  }

  saveSelectedAEvent() {
    if (this.selectedAEvent === undefined) {
      return;
    }

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

    this.updateHasChanged();
  }

  cancelSelectedAEvent() {
    if (this.hasChanged) {
      const confirmation = confirm('Are you sure you want to discard unsaved changes?');
      if (!confirmation) {
        return;
      }
    }

    this.selectedAEvent = undefined;
    this.selectedAEventId = -1;

    this.updateHasChanged();
  }

  deleteSelectedAEvent() {
    if (this.selectedAEventId === undefined) {
      return;
    }
    if (this.hasChanged) {
      const confirmation = confirm('Are you sure you want to discard unsaved changes?');
      if (!confirmation) {
        return;
      }
    }

    this.aEventsService.deleteBy(this.selectedAEventId);
    this.selectedAEvent = undefined;
    this.selectedAEventId = undefined;

    this.updateHasChanged();
  }
}
