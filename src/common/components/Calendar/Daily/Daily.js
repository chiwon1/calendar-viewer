import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  .calendar-container {
    width: 1200px;
  }

  .top-row-container, .row-container  {
    display: flex;
  }

  .first-column {
    width: 30%;
    height: 50px;
    border: 1px solid black;
  }

  .second-column {
    width: 70%;
    height: 50px;
    border: 1px solid black;
  }
`;

function Daily() {
  return (
    <Wrapper>
      <div className="calendar-container">
        <div className="top-row-container">
          <div className="first-column">Time</div>
          <div className="second-column">Event name</div>
        </div>
        <div>
        {Array.from(Array(24).keys()).map((hour) => (
          <div className="row-container">
            <div className="first-column">{`${hour}:00 - ${hour + 1}:00`}</div>
            <div
              className="second-column"
            >
            </div>
          </div>
        ))}
        </div>
      </div>
    </Wrapper>
  );
}

export default Daily;
