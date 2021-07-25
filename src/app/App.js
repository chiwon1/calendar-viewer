import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { useSelector } from "react-redux";

import Header from "../common/components/Header/Header";
import Daily from "../common/components/Calendar/Daily/Daily";
import Weekly from "../common/components/Calendar/Weekly/Weekly";

import { WEEKLY } from "../features/constant";
import EventCreate from "../common/components/Event/EventCreate/EventCreate";
import EventDetails from "../common/components/Event/EventDetails/EventDetails";

function App() {
  const { calendarType } = useSelector((state) => state.calendar);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <Redirect to="/calendar" />
        </Route>
        <Route path="/calendar" >
          {calendarType === WEEKLY ?
            <Weekly /> : <Daily />
          }
        </Route>
        <Route path="/events/new">
          <EventCreate />
        </Route>
        <Route path="/events/:eventId">
          <EventDetails />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
