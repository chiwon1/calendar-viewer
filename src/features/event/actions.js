import { CREATE_EVENT, MODIFY_EVENT, DELETE_EVENT } from "./types";

export function createEvent(eventInfo) {
  return { type: CREATE_EVENT, payload: eventInfo };
}

export function modifyEvent(id, eventInfo) {
  return { type: MODIFY_EVENT, id, payload: eventInfo };
}

export function deleteEvent(id) {
  return { type: DELETE_EVENT, id };
}
