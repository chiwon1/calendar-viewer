import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Header from "../common/components/Header/Header";
import Daily from "../common/components/Calendar/Daily/Daily";
import Weekly from "../common/components/Calendar/Weekly/Weekly";
import { useSelector } from 'react-redux';
import { WEEKLY } from '../features/constant';

function App() {
  const { calendarType } = useSelector((state) => state.calendar);
  console.log('calendarType', calendarType);

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
        <Route path="/event">
          <div>Event</div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
