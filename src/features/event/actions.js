import { CREATE_EVENT, MODIFY_EVENT, DELETE_EVENT } from "./types";

export function createEvent(eventInfo) {
  return { type: CREATE_EVENT, payload: eventInfo };
}

export function updateEvent() {
  return { type: MODIFY_EVENT };
}

export function deleteEvent(id) {
  return { type: DELETE_EVENT, id };
}
