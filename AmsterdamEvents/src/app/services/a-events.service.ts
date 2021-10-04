import { Injectable } from '@angular/core';
import {AEvent} from "../models/a-event";

@Injectable({
  providedIn: 'root'
})
export class AEventsService {

  aEvents = [] as AEvent[];

  constructor() { }

  findAll(): AEvent[]  {
    return this.aEvents;
  }

  findById(id: number): AEvent | null {
    return this.aEvents.filter(aEvent => aEvent.id === id)[0] ?? null;
  }

  /**
   * This method will save the provided AEvent and override the existing one.
   * If it had an existing one, it will return it (for some reason.. its really weird, but the docs describe it).
   * @param event
   */
  save(event: AEvent): AEvent | null {
    let existingAEvent = null;
    this.aEvents.forEach((oldEvent,index)=>{
      if (oldEvent.id === event.id) {
        existingAEvent = oldEvent;
        this.aEvents.splice(index,1);
        return;
      }
    });

    this.aEvents.push(event);
    return existingAEvent;
  }

  deleteBy(id: number): AEvent | null {
    let removedEvent = null;
    this.aEvents.forEach((oldEvent,index)=>{
      if (oldEvent.id === id) {
        removedEvent = this.aEvents.splice(index,1)[0] ?? null;
        return;
      }
    });
    return removedEvent;
  }
}
