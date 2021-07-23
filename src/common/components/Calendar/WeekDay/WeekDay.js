import React from "react";
import styled from "styled-components";
import Time from "../WeeklyScheduleUnit/WeeklyScheduleUnit";

const Wrapper = styled.div`
  .day {
    width: 150px;
    height: 1248px;
  }
`;

function Day({ day }) {
  return (
    <Wrapper>
      <div className="day">
        {day.map((time, timeIndex) => <Time key={timeIndex} />)}
      </div>
    </Wrapper>
  );
}

export default Day;
