import {AEventStatus} from "./a-event-status";

export class AEvent {
  title: String = "Amazing event";
  description: String = "just come";
  start: Date;
  end: Date;
  status: AEventStatus | string;
  isTicketed: boolean;
  participationFee: number;
  maxParticipants: number;
  id: number = AEvent.beginId;
  static beginId: number = 19999;
  static getNextId = () => ++AEvent.beginId;

  constructor(id: number, title: String, start: Date, end: Date, description: String, status: AEventStatus | string, isTicketed: boolean,
              participationFee: number, maxParticipants: number) {
    this.title = title;
    this.start = start;
    this.end = end;
    this.description = description;
    this.status = status;
    this.isTicketed = isTicketed;
    this.participationFee = participationFee;
    this.maxParticipants = maxParticipants;
  }

  public static createRandomAEvent(): AEvent {
    let title: String = "Amazing event";
    let description: String = "just come";

    return new AEvent(this.getNextId(), title, this.randomStart(), this.randomDuration(), description, this.randomStatus(),
      this.randomIsTicketed(), this.randomFee(), this.randomParticipants()
    )
  }

  public static randomStatus(): string {
    let key = Math.floor(Math.random() * (Object.keys(AEventStatus).length+1) / 2);
    while (key > 2) {
       key = Math.floor(Math.random() * (Object.keys(AEventStatus).length+1) / 2);
    }
    return AEventStatus[key];
  }

  public static randomStart(): Date {
    let startDate = Date.now() + Math.random() * 100000000000;

    return new Date(startDate);
  }

  public static randomDuration(): Date {
    const startDate = Date.now() + Math.random() * 100000000000;
    const endDate = startDate + Math.random() * 10000000;
    const duration = (endDate - startDate);
    let timestamp = Math.round(Math.random() * duration);
    timestamp += startDate;

    return new Date(timestamp);
  }

  public static randomIsTicketed(): boolean {
    return Math.random() < 0.5;
  }

  public static randomFee(): any {
    if (this.randomIsTicketed()) {
      return (Math.random() * (30 - 1 + 1) + 1).toFixed(2);
    } else return "free"
  }

  public static randomParticipants(): any {
    if (this.randomIsTicketed()) {
      return Math.round(Math.random() * (10 - 1 + 1) + 1) + "00";
    }
  }
}
