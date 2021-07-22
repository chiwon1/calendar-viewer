import React, { useState } from "react";
import styled from "styled-components";
import events from '../../../../mockData';
import EventBox from "../EventBox/EventBox";

const Wrapper = styled.div`
  .calendar-container {
    text-align: center;
    width: 1202px;
  }

  .top-row-container {
    line-height: 60px;
    height: 60px;
    display: flex;
    border: none;
  }

  .row-container {
    line-height: 60px;
    display: flex;
  }

  .first-column {
    width: 300px;
    height: 60px;
    border: 1px solid black;
  }

  .second-column {
    width: 900px;
    height: 60px;
    border: 1px solid black;
  }

  .day {
    position: relative;
  }
`;

const showEventSetting = (timeIndex) => {
  console.log('showEventSetting!');
  console.log('timeIndex', timeIndex);
};

function Daily() {
  const [data, setData] = useState(events);

  return (
    <Wrapper>
      <div className="calendar-container">
        <div className="top-row-container">
          <div className="first-column">Time</div>
          <div className="second-column">Event name</div>
        </div>
        <div className="day">
          {Array.from(Array(24).keys()).map((hour, index) => (
            <div className="row-container" key={index}>
              <div className="first-column">{`${hour}:00 - ${hour + 1}:00`}</div>
              <div
                className="second-column"
                onClick={() => showEventSetting(hour)}
              >
              </div>
            </div>
          ))}

          {data.map(({ id,startTime, endTime, title, description }) => {
            return (
              <div
                key={id}
                style={{
                  backgroundColor: "pink",
                  left: 302,
                  top: 62 * startTime ,
                  border: "1px solid black",
                  width: 898,
                  height: (endTime - startTime) * 61 + 1,
                  zIndex: 3,
                  position: "absolute",
                }}
              >
              <EventBox
                title={title}
                description={description}
              />
              </div>
            )
          })}
        </div>
      </div>
    </Wrapper>
  );
}

export default Daily;
