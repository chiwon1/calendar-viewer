import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  .time {
    width: 150px;
    height: 50px;
  }
`;

function Time({ onClick }) {
  return (
    <Wrapper>
      <div
        className="time"
        onClick={onClick}
      >
      </div>
    </Wrapper>
  );
}

export default Time;
