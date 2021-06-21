import React from "react";
import { noop } from "lodash";

function Row({ onClick = noop, event = {} }) {
  return <tr>{event.title}</tr>;
}

export default App;
