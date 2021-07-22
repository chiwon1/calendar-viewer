import { SHOW_LAST_WEEK, SHOW_NEXT_WEEK, SHOW_DAILY_CALENDAR, SHOW_WEEKLY_CALENDAR } from "./types";

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
