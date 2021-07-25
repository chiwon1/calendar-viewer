import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { DESCRIPTION, END_TIME, START_TIME, DATE, TITLE, INVALID_ID_MESSAGE, DELETE_EVENT_BUTTON_MESSAGE } from "../../../../features/constant";
import { changeDateFormat } from "../../../utils/dateUtils";

function EventDetails() {
  const { events } = useSelector((state) => state.event);
  const { eventId } = useParams();

  if (events[eventId] === undefined) {
    return <div>{INVALID_ID_MESSAGE}</div>;
  }

  const { title, description, date, startTime, endTime } = events[eventId];

  const eventDate = changeDateFormat(new Date(date));

  return (
    <div>
      <div>{TITLE}: {title}</div>
      <div>{DESCRIPTION} {description}</div>
      <div>{DATE}: {`${eventDate.year}.${eventDate.month}.${eventDate.date} (${eventDate.day})`}</div>
      <div>{START_TIME}: {startTime}</div>
      <div>{END_TIME}: {endTime}</div>
    </div>
  );
}

export default EventDetails;
