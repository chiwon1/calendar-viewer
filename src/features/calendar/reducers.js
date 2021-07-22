import { SHOW_LAST_WEEK, SHOW_NEXT_WEEK, SHOW_DAILY_CALENDAR, SHOW_WEEKLY_CALENDAR, SHOW_LAST_DAY, SHOW_NEXT_DAY } from "./types";
import { cloneDeep } from "lodash";
import { DAILY, WEEKLY } from '../constant';

const today = new Date();

const thisSunday = new Date();
thisSunday.setDate(thisSunday.getDate() - today.getDay());

const initialState = {
  today: today,
  currentDate: today,
  currentSunday: thisSunday,
  calendarType: WEEKLY,
  // displayedMonth: today.getMonth(),
};

export default function calendarReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_LAST_WEEK: {
      const newState = cloneDeep(state);

      const nextSunday = new Date(newState.currentSunday);
      nextSunday.setDate(nextSunday.getDate() - 7);
      newState.currentSunday = nextSunday;

      return newState;
    }
    case SHOW_NEXT_WEEK: {
      const newState = cloneDeep(state);

      const nextSunday = new Date(newState.currentSunday);

      nextSunday.setDate(nextSunday.getDate() + 7);
      newState.currentSunday = nextSunday;

      return newState;
    }
    case SHOW_LAST_DAY: {
      const newState = cloneDeep(state);

      const lastDay = new Date(newState.currentDate);
      lastDay.setDate(lastDay.getDate() - 1);
      newState.currentDate = lastDay;

      return newState;
    }
    case SHOW_NEXT_DAY: {
      const newState = cloneDeep(state);

      const nextDay = new Date(newState.currentDate);
      nextDay.setDate(nextDay.getDate() + 1);
      newState.currentDate = nextDay;

      return newState;
    }
    case SHOW_DAILY_CALENDAR: {
      const newState = cloneDeep(state);

      newState.calendarType = DAILY;

      return newState;
    }
    case SHOW_WEEKLY_CALENDAR: {
      const newState = cloneDeep(state);

      newState.calendarType = WEEKLY;

      return newState;
    }
    default:
      return cloneDeep(state);
  }
}
