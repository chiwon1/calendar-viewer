import { SHOW_LAST_WEEK, SHOW_NEXT_WEEK, SHOW_DAILY_CALENDAR, SHOW_WEEKLY_CALENDAR, SHOW_LAST_DAY, SHOW_NEXT_DAY } from "./types";
import { cloneDeep } from "lodash";
import { DAILY, WEEKLY } from "../constant";

const today = new Date();

const thisSunday = new Date();
thisSunday.setDate(thisSunday.getDate() - today.getDay());

const initialState = {
  today: today.toISOString(),
  currentDate: today,
  currentSunday: thisSunday.toISOString(),
  calendarType: WEEKLY,
  events: [],
};

export default function calendarReducer(state = initialState, action) {
  const newState = cloneDeep(state);

  switch (action.type) {
    case SHOW_LAST_WEEK: {
      const nextSunday = new Date(newState.currentSunday);
      nextSunday.setDate(nextSunday.getDate() - 7);
      newState.currentSunday = nextSunday.toISOString();

      return newState;
    }
    case SHOW_NEXT_WEEK: {
      const nextSunday = new Date(newState.currentSunday);

      nextSunday.setDate(nextSunday.getDate() + 7);
      newState.currentSunday = nextSunday.toISOString();

      return newState;
    }
    case SHOW_LAST_DAY: {
      const lastDay = new Date(newState.currentDate);
      lastDay.setDate(lastDay.getDate() - 1);
      newState.currentDate = lastDay.toISOString();

      return newState;
    }
    case SHOW_NEXT_DAY: {
      const nextDay = new Date(newState.currentDate);
      nextDay.setDate(nextDay.getDate() + 1);
      newState.currentDate = nextDay.toISOString();

      return newState;
    }
    case SHOW_DAILY_CALENDAR: {
      newState.calendarType = DAILY;

      return newState;
    }
    case SHOW_WEEKLY_CALENDAR: {
      newState.calendarType = WEEKLY;

      return newState;
    }
    default:
      return newState;
  }
}
