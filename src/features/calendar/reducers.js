import { SHOW_LAST_WEEK, SHOW_NEXT_WEEK } from "./types";
import { cloneDeep } from "lodash";

const today = new Date();

const thisSunday = new Date();
thisSunday.setDate(thisSunday.getDate() - today.getDay());

const initialState = {
  today: today,
  currentDate: today,
  currentSunday: thisSunday,
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
    default:
      return cloneDeep(state);
  }
}
