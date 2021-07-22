import { combineReducers, applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import calendar from "../features/calendar";

const reducer = combineReducers({
  calendar,
});

// const store = createStore(reducer, applyMiddleware(logger));
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
