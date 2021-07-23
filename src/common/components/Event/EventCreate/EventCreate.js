import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { createEvent } from "../../../../features/calendar/actions";

const Wrapper = styled.div`
  div {
    width: 1200px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
`;

function EventCreate() {
  const [inputEventInfo, setInputEventInfo] = useState({});

  const dispatch = useDispatch();

  const onClickCreateEvent = () => {
    dispatch(createEvent(inputEventInfo));
  };

  return (
    <Wrapper>
      <div>
        <label>
          Title :
          <input
            onChange={(event) => (
              setInputEventInfo(
                {...inputEventInfo,
                  title: event.target.value
                }
              )
            )}
          />
        </label>
        <label>
          Description :
          <input
            onChange={(event) => (
              setInputEventInfo(
                {...inputEventInfo,
                  description: event.target.value
                }
              )
            )}
          />
        </label>
        <label>
          Time :
          <input type="date"
            onChange={(event) => (
              setInputEventInfo(
                {...inputEventInfo,
                  date: new Date(event.target.value)
                }
              )
            )}
          />
        </label>
        <label>
          StartTime :
          <input onChange={(event) => (
              setInputEventInfo(
                {...inputEventInfo,
                  startTime: Number(event.target.value)
                }
              )
            )}
          />
        </label>
        <label>
          EndTime :
          <input
            onChange={(event) => (
              setInputEventInfo(
                {...inputEventInfo,
                  endTime: Number(event.target.value)
                }
              )
            )}
          />
        </label>
        <button onClick={onClickCreateEvent}>Submit</button>
      </div>
    </Wrapper>
  );
}

export default EventCreate;
