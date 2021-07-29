import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { DATE, DESCRIPTION, END_TIME, START_TIME, SUBMIT, TITLE } from "../../../../features/constant";
import { modifyEvent } from "../../../../features/event/actions";

function EventModifyForm({ id }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const { events } = useSelector((state) => state.event);

  const eventToModify = events.filter(event => event.id === id);

  const { title, description, date, startTime, endTime } = eventToModify[0];

  const [inputEventInfo, setInputEventInfo] = useState({
    title, description, date, startTime, endTime
  });

  const onClickModifyEvent = () => {
    dispatch(modifyEvent(id, inputEventInfo));
    history.push("/calendar");
  };

  return (
    <Wrapper>
      <label>
        {TITLE} :
        <input
          value={inputEventInfo.title}
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
          value={inputEventInfo.description}
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
          value={inputEventInfo.date}
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
          value={inputEventInfo.startTime}
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
          value={inputEventInfo.endTime}
          onChange={(event) => (
            setInputEventInfo(prev => ({
              ...prev,
              endTime: Number(event.target.value)
            }))
          )}
        />
      </label>
      <button onClick={onClickModifyEvent}>{SUBMIT}</button>
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

export default EventModifyForm;
