import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import EventBox from "../EventBox/EventBox";
import { DATE, DAY_LIST } from "../../../../features/constant";
import { checkDailyEventToShow } from "../../../utils/dateUtils";

const emptyArrayForTimeIndex = [...new Array(24)];

function Daily() {
  const { currentDate, events } = useSelector((state) => ({
    currentDate: state.calendar.currentDate,
    events: state.event.events
  }));

  const date = new Date(currentDate).getDate();

  const day = DAY_LIST[new Date(currentDate).getDay()];

  const currentDateEvents = events.filter(event => checkDailyEventToShow(event.date, currentDate));

  return (
    <Wrapper>
      <TopRowContainer>
        <TimeIndexTitleWrapper>{DATE}</TimeIndexTitleWrapper>
        <DayAndDateWrapper>{day} {date}</DayAndDateWrapper>
      </TopRowContainer>
      <TimeIndexAndEventBoxesWrapper>
        {emptyArrayForTimeIndex.map((_, hour) => (
          <RowContainer key={hour}>
            <FirstColumnWrapper>{`${hour}:00 - ${hour + 1}:00`}</FirstColumnWrapper>
            <SecondColumn />
          </RowContainer>
        ))}
        {currentDateEvents.map(({ id, startTime, endTime, title, description }) => (
          <EventBox
            eventId={id}
            title={title}
            description={description}
            key={id}
            left={`${325}px`}
            top={`${62 * startTime}px`}
            height={`${(endTime - startTime) * 62}px`}
          />
        ))}
      </TimeIndexAndEventBoxesWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  text-align: center;
  width: 1202px;
`;

const TopRowContainer = styled.div`
  line-height: 60px;
  height: 60px;
  display: flex;
  border: none;
`;

const TimeIndexAndEventBoxesWrapper = styled.div`
  position: relative;
`;

const RowContainer = styled.div`
  line-height: 60px;
  display: flex;
`;

const TimeIndexTitleWrapper = styled.div`
  width: 300px;
  height: 60px;
  border: 1px solid black;
  margin-left: 30px;
  background-color: black;
  color: white;
`;

const DayAndDateWrapper = styled.div`
  font-size: 25px;
  width: 900px;
  height: 60px;
  border: 1px solid black;
  background-color: black;
  color: white;
`;

const FirstColumnWrapper = styled.div`
  width: 300px;
  height: 60px;
  border: 1px solid black;
  margin-left: 30px;
`;

const SecondColumn = styled.div`
  font-size: 25px;
  width: 900px;
  height: 60px;
  border: 1px solid black;
`;

const EventBoxWrapper = styled.div`
  background-color: lightgrey;
  left: 325px;
  top: ${props => props.top};
  width: 876px;
  height: ${props => props.height};
  z-index: 3;
  position: absolute;
`;

export default Daily;
