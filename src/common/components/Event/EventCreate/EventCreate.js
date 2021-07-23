import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { createEvent } from "../../../../features/calendar/actions";
import { DESCRIPTION, END_TIME, START_TIME, SUBMIT, TIME, TITLE } from "../../../../features/constant";

function EventCreate() {
  const [inputEventInfo, setInputEventInfo] = useState({});

  const dispatch = useDispatch();

  const onClickCreateEvent = () => {
    dispatch(createEvent(inputEventInfo));
  };

  return (
    <Wrapper>
      <label>
        {TITLE} :
        <input
          onChange={(event) => (
            setInputEventInfo({
              ...inputEventInfo,
              title: event.target.value
            })
          )}
        />
      </label>
      <label>
        {DESCRIPTION} :
        <input
          onChange={(event) => (
            setInputEventInfo({
              ...inputEventInfo,
              description: event.target.value
            })
          )}
        />
      </label>
      <label>
        {TIME} :
        <input
          type="date"
          onChange={(event) => (
            setInputEventInfo({
              ...inputEventInfo,
              date: new Date(event.target.value)
            })
          )}
        />
      </label>
      <label>
        {START_TIME} :
        <input
          onChange={(event) => (
            setInputEventInfo({
              ...inputEventInfo,
              startTime: Number(event.target.value)
            })
          )}
        />
      </label>
      <label>
        {END_TIME} :
        <input
          onChange={(event) => (
            setInputEventInfo({
              ...inputEventInfo,
              endTime: Number(event.target.value)
            })
          )}
        />
      </label>
      <button onClick={onClickCreateEvent}>{SUBMIT}</button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 1200px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export default EventCreate;
