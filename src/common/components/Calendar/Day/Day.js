import React from "react";
import styled from "styled-components";
import Time from "../Time/Time";

const Wrapper = styled.div`
  .day {
    width: 150px;
    height: 1248px;
  }
`;

const showEventSetting = (i, j) => {
  console.log('showEventSetting!');
  console.log('i', i);
  console.log('j', j);
};

function Day({ day, dayIndex }) {
  console.log('day', day);
  return (
    <Wrapper>
      <div className="day">
        {day.map((time, timeIndex) => {
          return (
            <Time
              key={timeIndex}
              onClick={() => {
                showEventSetting(dayIndex, timeIndex)
              }}
            >
              Time
            </Time>
          )})
        }
      </div>
    </Wrapper>
  );
}

export default Day;
