import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "../common/components/Header/Header";
// import Daily from "../common/components/Calendar/Daily/Daily";
import Weekly from "../common/components/Calendar/Weekly/Weekly";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact>
          {/* <Daily /> */}
          <Weekly />
        </Route>
        <Route path="/event">
          <div>Event</div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
