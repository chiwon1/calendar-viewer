import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { WEEKLY } from "../../../../features/constant";

function EventBox({ eventId, title, description, left, top, height }) {
  const history = useHistory();

  const { calendarType } = useSelector((state) => state.calendar);
  const width = calendarType === WEEKLY ? 149 : 876;

  const moveToEventDetails = () => {
    history.push(`events/${eventId}`);
  };

  return (
    <Wrapper
      onClick={moveToEventDetails}
      left={left}
      top={top}
      height={height}
      width={`${width}px`}
    >
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
  background-color: lightgrey;
  left: ${props => props.left};
  top: ${props => props.top};
  width: ${props => props.width};
  height: ${props => props.height};
  z-index: 3;
  position: absolute;
`;

const TitleWrapper = styled.div`
  font-size: 20px;
`;

const DescriptionWrapper = styled.div`
  font-size: 14px;
`;

export default EventBox;
