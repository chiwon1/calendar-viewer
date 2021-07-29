import { CREATE_EVENT, MODIFY_EVENT, DELETE_EVENT } from "./types";
import { cloneDeep, uniqueId } from "lodash";

const initialState = {
  events: [],
};

export default function eventReducer(state = initialState, action) {
  const newState = cloneDeep(state);

  switch (action.type) {
    case CREATE_EVENT: {
      newState.events = [...newState.events, { ...action.payload, id: uniqueId() }];

      return newState;
    }
    case MODIFY_EVENT: {
      const eventToModify = newState.events.filter(event => event.id === action.id);

      eventToModify[0] = { id: action.id, ...action.payload };

      const restEvents = newState.events.filter(event => event.id !== action.id);

      newState.events = [ ...restEvents, ...eventToModify ];

      return newState;
    }
    case DELETE_EVENT: {
      const newEvents = newState.events.filter(event => event.id !== action.id);

      newState.events = newEvents;

      return newState;
    }
    default:
      return newState;
  }
}
