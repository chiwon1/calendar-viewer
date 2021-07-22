import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  .time {
    width: 150px;
    height: 50px;
    border: 1px solid pink;
  }
`;

function Time({ onClick }) {
  return (
    <Wrapper>
      <div
        className="time"
        onClick={onClick}
      >
        Time
      </div>
    </Wrapper>
  );
}

export default Time;
