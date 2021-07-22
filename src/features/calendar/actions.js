import { SHOW_LAST_WEEK, SHOW_NEXT_WEEK } from "./types";

export function showLastWeek() {
  return { type: SHOW_LAST_WEEK };
}

export function showNextWeek() {
  return { type: SHOW_NEXT_WEEK };
}
