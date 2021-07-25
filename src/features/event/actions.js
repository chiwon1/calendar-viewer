import { CREATE_EVENT, UPDATE_EVENT, DELETE_EVENT } from './types';

export function createEvent(eventInfo) {
  return { type: CREATE_EVENT, payload: eventInfo };
}

export function updateEvent() {
  return { type: UPDATE_EVENT };
}

export function deleteEvent() {
  return { type: DELETE_EVENT };
}
