import React from "react";
import styled from "styled-components";

function WeeklyScheduleUnit() {
  return (
    <ScheduleBox />
  );
}

const ScheduleBox = styled.div`
  text-align: center;
  width: 150px;
  height: 70px;
  border: 1px solid gray;
`;

export default WeeklyScheduleUnit;
