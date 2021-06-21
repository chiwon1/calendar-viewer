import { SHOW_NEXT_MONTH } from "./types";
import { cloneDeep } from "lodash";

const today = new Date();

const initialState = {
  currentDate: today,
  displayedMonth: today.getMonth(),
};

export default function calendarReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_NEXT_MONTH:
      const newState = cloneDeep(state); // why use cloneDeep?

      newState.displayedMonth = state.displayedMonth + 1;

      return newState;
    default:
      return cloneDeep(state);
  }
}
