import React from "react";
import styled from "styled-components";

function EventBox({ title, description }) {
  return (
    <Wrapper>
      <TitleWrapper>
        {title}
      </TitleWrapper>
      <DescriptionWrapper>
        {description}
      </DescriptionWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  text-align: center;
`;

const TitleWrapper = styled.div`
  font-size: 20px;
`;

const DescriptionWrapper = styled.div`
  font-size: 14px;
`;

export default EventBox;
