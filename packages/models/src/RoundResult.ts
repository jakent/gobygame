import {Coordinate} from "./Coordinate";


export interface GobyCoordinates {
  gobyId: string;
  position: Coordinate;
}

export interface CatchTime extends GobyCoordinates {
  time: number;
}

export interface MissedClick {
  time: number;
  position: Coordinate;
  success: boolean;
  locations: GobyCoordinates[];
}

export interface RoundResult {
  uuid: string;
  roundId: number;
  attempt: number;
  totalTime: number;
  foundAll: boolean;
  catchTimes: {gobyId: string; catchTime: CatchTime | null}[];
  missedClicks: MissedClick[];
}
