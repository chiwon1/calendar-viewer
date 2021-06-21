import { combineReducers, applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import calendar from "../features/calendar";

const reducer = combineReducers({
  calendar,
});

const store = createStore(reducer, applyMiddleware(logger));

export default store;
