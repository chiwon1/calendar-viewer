import { combineReducers, createStore } from "redux";
import calendar from "../features/calendar";
import event from "../features/event";

const reducer = combineReducers({
  calendar,
  event,
});

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
