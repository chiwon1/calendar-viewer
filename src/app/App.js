import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Header from "../common/components/Header/Header";
import Daily from "../common/components/Calendar/Daily/Daily";
import Weekly from "../common/components/Calendar/Weekly/Weekly";
import { useSelector } from "react-redux";
import { WEEKLY } from "../features/constant";
import EventCreate from "../common/components/Event/EventCreate/EventCreate";

function App() {
  const { calendarType } = useSelector((state) => state.calendar);

  return (
    <div >
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
        <Route path="/event">
          <EventCreate />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
