import { CREATE_EVENT, UPDATE_EVENT, DELETE_EVENT } from './types';
import { cloneDeep } from "lodash";

const initialState = {
  events: [],
};

export default function eventReducer(state = initialState, action) {
  const newState = cloneDeep(state);

  switch (action.type) {
    case CREATE_EVENT: {
      newState.events = [...newState.events, { ... action.payload, id: newState.events.length + 1 }];

      return newState;
    }
    case UPDATE_EVENT: {
      const newEvent = { id: action.id, ...action.payload };

      newState[action.id] = newEvent;

      return newState;
    }
    case DELETE_EVENT: {
      const newEvents = [...newState.events.slice(0, action.id), ...newState.events.slice(action.id + 1)];

      newState.events = newEvents;

      return newState;
    }
    default:
      return newState;
  }
}
