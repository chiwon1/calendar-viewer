import React, { useState } from "react";
import styled from "styled-components";
import Day from "../Day/Day";
import events from "../../../../mockData";
import EventBox from "../EventBox/EventBox";
import { useSelector } from 'react-redux';

const Wrapper = styled.div`
  .calendar-container {
    max-width: 90%;
  }

  .dayName {
    width: 150px;
    text-align: center;
    display: inline-block;
  }

  .time {
    text-align: center;
    width: 150px;
    height: 80px;
    border: 1px solid black;
  }

  .rowTitle {
    text-align: center;
    width: 150px;
    height: 80px;
    line-height: 80px;
    border: 1px solid black;
  }

  .week {
    display: flex;
    position: relative;
  }
`;

const week = [];

for (let i = 0; i < 7; i++) {
  const day = [];

  for (let j = 0; j < 24; j++) {
    day.push({i, j});
  }

  week.push(day);
}

const columnTitleList = ["Day", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function Weekly() {
  const [data, setData] = useState(events);

  const { currentSunday } = useSelector((state) => state.calendar);


  const weekDateList = ["Time"];

  for (let i = 0; i < 7; i++) {
    const date = currentSunday.getDate() + i;

    weekDateList.push(date);
  }

  return (
    <Wrapper>
      <div className="calendar-container">
        {columnTitleList.map((columnTitle, index) => (
          <div key={index} className="dayName">{columnTitle}</div>
          )
        )}
        {weekDateList.map((date, index) => (
          <div key={index} className="dayName">{date}</div>
        ))}
        <div className="week">
          <div>
            {Array.from(Array(24).keys()).map((hour, index) => (
              <div key={index} className="rowTitle">{`${hour}:00 - ${hour + 1}:00`}</div>
            ))}
          </div>
          {week.map((day, dayIndex) => (
            <Day
              key={dayIndex}
              day={day}
              dayIndex={dayIndex}
            >
            </Day>
          ))}
          {data.map(({ id, day, startTime, endTime, title, description }) => {
            return (
              <div
                key={id}
                style={{
                  backgroundColor: "pink",
                  left: (150 * (day + 1)) + 2,
                  top: 82 * startTime,
                  border: "1px solid black",
                  width: 150,
                  height: (endTime - startTime) * 82,
                  zIndex: 3,
                  position: 'absolute',
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

export default Weekly;
