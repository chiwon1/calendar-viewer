import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  text-align: center;
  width: 150px;
  height: 70px;
  border: 1px solid gray;
`;

function Time({ onClick }) {
  return (
    <Wrapper onClick={onClick} />
  );
}

export default Time;
