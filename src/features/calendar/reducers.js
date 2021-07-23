import { SHOW_LAST_WEEK, SHOW_NEXT_WEEK, SHOW_DAILY_CALENDAR, SHOW_WEEKLY_CALENDAR, SHOW_LAST_DAY, SHOW_NEXT_DAY, CREATE_EVENT, UPDATE_EVENT, DELETE_EVENT } from "./types";
import { cloneDeep } from "lodash";
import { DAILY, WEEKLY } from '../constant';

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
  switch (action.type) {
    case SHOW_LAST_WEEK: {
      const newState = cloneDeep(state);

      const nextSunday = new Date(newState.currentSunday);
      nextSunday.setDate(nextSunday.getDate() - 7);
      newState.currentSunday = nextSunday.toISOString();

      return newState;
    }
    case SHOW_NEXT_WEEK: {
      const newState = cloneDeep(state);

      const nextSunday = new Date(newState.currentSunday);

      nextSunday.setDate(nextSunday.getDate() + 7);
      newState.currentSunday = nextSunday.toISOString();

      return newState;
    }
    case SHOW_LAST_DAY: {
      const newState = cloneDeep(state);

      const lastDay = new Date(newState.currentDate);
      lastDay.setDate(lastDay.getDate() - 1);
      newState.currentDate = lastDay.toISOString();

      return newState;
    }
    case SHOW_NEXT_DAY: {
      const newState = cloneDeep(state);

      const nextDay = new Date(newState.currentDate);
      nextDay.setDate(nextDay.getDate() + 1);
      newState.currentDate = nextDay.toISOString();

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
    case CREATE_EVENT: {
      const newState = cloneDeep(state);

      newState.events = [...newState.events, { ... action.payload, id: newState.events.length + 1 }];

      return newState;
    }
    case UPDATE_EVENT: {
      const newState = cloneDeep(state);

      const newEvent = { id: action.id, ...action.payload };

      newState[action.id] = newEvent;

      return newState;
    }
    case DELETE_EVENT: {
      const newState = cloneDeep(state);

      const newEvents = [...newState.events.slice(0, action.id), ...newState.events.slice(action.id + 1)];

      newState.events = newEvents;

      return newState;
    }
    default:
      return cloneDeep(state);
  }
}
