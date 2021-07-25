import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import { DESCRIPTION, END_TIME, START_TIME, DATE, TITLE, INVALID_ID_MESSAGE, DELETE_EVENT_BUTTON_MESSAGE, MODIFY_EVENT_BUTTON_MESSAGE } from "../../../../features/constant";
import { deleteEvent } from "../../../../features/event/actions";
import { changeDateFormat } from "../../../utils/dateUtils";
import EventModifyForm from "../EventModifyForm/EventModifyForm";

function EventDetails() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { events } = useSelector((state) => state.event);
  const { eventId } = useParams();

  const [isModifyMode, setIsModifyMode] = useState(false);

  if (events[eventId] === undefined) {
    return <div>{INVALID_ID_MESSAGE}</div>;
  }

  const { title, description, date, startTime, endTime } = events[eventId];

  const eventDate = changeDateFormat(new Date(date));

  const onClickChangeToModifyMode = () => {
    setIsModifyMode(true);
  };

  const onClickDeleteEvent = () => {
    dispatch(deleteEvent(eventId));
    history.push("/calendar");
  };

  return isModifyMode === false ? (
    <div>
      <div>{TITLE}: {title}</div>
      <div>{DESCRIPTION} {description}</div>
      <div>{DATE}: {`${eventDate.year}.${eventDate.month}.${eventDate.date} (${eventDate.day})`}</div>
      <div>{START_TIME}: {startTime}</div>
      <div>{END_TIME}: {endTime}</div>
      <button onClick={onClickChangeToModifyMode}>{MODIFY_EVENT_BUTTON_MESSAGE}</button>
      <button onClick={onClickDeleteEvent}>{DELETE_EVENT_BUTTON_MESSAGE}</button>
    </div>
  ) : (
    <>
      <EventModifyForm
        id={eventId}
      />
    </>
  );
}

const Wrapper = styled.div`
  width: 1200px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export default EventDetails;
