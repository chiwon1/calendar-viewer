import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  div {
    text-align: center;
  }

  .title {
    font-size: 20px;
  }
`;

function Event({ title, description }) {
  return (
    <Wrapper>
      <div className="title">
        {title}
      </div>
      <div>
        {description}
      </div>
    </Wrapper>
  );
}

export default Event;
