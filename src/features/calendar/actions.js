import { SHOW_LAST_WEEK, SHOW_NEXT_WEEK, SHOW_DAILY_CALENDAR, SHOW_WEEKLY_CALENDAR, SHOW_LAST_DAY, SHOW_NEXT_DAY, CREATE_EVENT, UPDATE_EVENT, DELETE_EVENT } from "./types";

export function showLastWeek() {
  return { type: SHOW_LAST_WEEK };
}

export function showNextWeek() {
  return { type: SHOW_NEXT_WEEK };
}

export function showDailyCalendar() {
  return { type: SHOW_DAILY_CALENDAR };
}

export function showWeeklyCalendar() {
  return { type: SHOW_WEEKLY_CALENDAR };
}

export function showLastDay() {
  return { type : SHOW_LAST_DAY };
}

export function showNextDay() {
  return { type: SHOW_NEXT_DAY };
}
