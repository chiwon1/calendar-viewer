import React from "react";
import styled from "styled-components";
import Time from "../WeeklyScheduleUnit/WeeklyScheduleUnit";

function WeekDay({ day }) {
  return (
    <Wrapper>
      {day.map((_, index) => <Time key={index} />)}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 150px;
  height: 1248px;
`;

export default WeekDay;
