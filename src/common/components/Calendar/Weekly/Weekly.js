import React from "react";
import styled from "styled-components";
import Day from "../Day/Day";

const Wrapper = styled.div`
  .dayName {
    width: 150px;
    display: inline-block;
    border: 1px solid black;
  }

  .time {
    width: 150px;
    height: 45px;
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

const columnTitleList = ["Time", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function Weekly() {
  return (
    <Wrapper>
      {columnTitleList.map((columnTitle, index) =>
        <div key={index} className="dayName">{columnTitle}</div>
      )}
      <div className="week"></div>
      <div className="week">
        <div>
          {Array.from(Array(24).keys()).map((hour, index) => (
            <div key={index} className="time">{`${hour}:00 - ${hour + 1}:00`}</div>
          ))}
        </div>
        {week.map((day, dayIndex) => (
          <Day
            key={dayIndex}
            day={day}
            dayIndex={dayIndex}
          >
            Day!
          </Day>
        ))}
      </div>
    </Wrapper>
  );
}

export default Weekly;
