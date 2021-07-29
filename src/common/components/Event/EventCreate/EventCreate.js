import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import { DESCRIPTION, END_TIME, START_TIME, SUBMIT, DATE, TITLE } from "../../../../features/constant";
import { createEvent } from "../../../../features/event/actions";

function EventCreate() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [inputEventInfo, setInputEventInfo] = useState({});

  const onClickCreateEvent = () => {
    dispatch(createEvent(inputEventInfo));
    history.push("/calendar");
  };

  return (
    <Wrapper>
      <label>
        {TITLE} :
        <input
          onChange={(event) => (
            setInputEventInfo(prev => ({
              ...prev,
              title: event.target.value
            }))
          )}
        />
      </label>
      <label>
        {DESCRIPTION} :
        <input
          onChange={(event) => (
            setInputEventInfo(prev => ({
              ...prev,
              description: event.target.value
            }))
          )}
        />
      </label>
      <label>
        {DATE} :
        <input
          type="date"
          onChange={(event) => (
            setInputEventInfo(prev => ({
              ...prev,
              date: (new Date(event.target.value)).toISOString(),
            }))
          )}
        />
      </label>
      <label>
        {START_TIME} :
        <input
          onChange={(event) => (
            setInputEventInfo(prev => ({
              ...prev,
              startTime: Number(event.target.value)
            }))
          )}
        />
      </label>
      <label>
        {END_TIME} :
        <input
          onChange={(event) => (
            setInputEventInfo(prev => ({
              ...prev,
              endTime: Number(event.target.value)
            }))
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
