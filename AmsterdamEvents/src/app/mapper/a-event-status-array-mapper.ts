import {AEventStatus} from "../models/a-event-status";

export class AEventStatusArrayMapper {
  public static map(): any {
    const StringIsNumber = (value: any) => !isNaN(Number(value));

    return Object.keys(AEventStatus)
      .filter(StringIsNumber)
      .map(key => {
        // @ts-ignore
        return AEventStatus[key];
      });
  }
}
