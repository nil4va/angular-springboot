import {Injectable} from '@angular/core';
import {AEvent} from "../models/a-event";
import {HttpClient} from "@angular/common/http";
import {Observable, Subscription} from "rxjs";
import {filter, map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AEventsSbService {

  aEvents = [] as AEvent[];
  private firstObsSubscription: Subscription | undefined;

  constructor(public httpClient: HttpClient) {
    this.restGetAEvents().subscribe(data => {
        console.log(data)
      }, error => {
        console.log(error)
      }, () => {
        console.log('Completed!');
      });
  }

  restGetAEvents(): Observable<AEvent[]> {
    return this.httpClient.get<AEvent[]>("http://localhost:8080/api/users");
  }

  static trueCopy(aEvent: AEvent): AEvent {
    return <AEvent>(aEvent == null ? null : Object.assign(new AEvent(aEvent.id, aEvent.title, aEvent.start, aEvent.end, aEvent.description, aEvent.status, aEvent.isTicketed, aEvent.participationFee, aEvent.maxParticipants), aEvent));
  }

  // ngOnDestroy(): void {
  //   // @ts-ignore
  //   this.firstObsSubscription.unsubscribe();
  // }

  findAll(): AEvent[] {
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
    this.aEvents.forEach((oldEvent, index) => {
      if (oldEvent.id === event.id) {
        existingAEvent = oldEvent;
        this.aEvents.splice(index, 1);
        return;
      }
    });

    this.aEvents.push(event);
    return existingAEvent;
  }

  deleteBy(id: number): AEvent | null {
    let removedEvent = null;
    this.aEvents.forEach((oldEvent, index) => {
      if (oldEvent.id === id) {
        removedEvent = this.aEvents.splice(index, 1)[0] ?? null;
        return;
      }
    });
    return removedEvent;
  }
}
