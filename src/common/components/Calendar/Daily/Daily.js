import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import EventBox from "../EventBox/EventBox";
import { TIME } from "../../../../features/constant";
import { checkDailyEventToShow, dayList } from "../../../utils/dateUtils";

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

const DayWrapper = styled.div`
  position: relative;
`;

const RowContainer = styled.div`
  line-height: 60px;
  display: flex;
`;

const FirstColumnCalendarTitle = styled.div`
  width: 300px;
  height: 60px;
  border: 1px solid black;
  margin-left: 30px;
  background-color: black;
  color: white;
`;

const SecondColumnCalendarTitle = styled.div`
  font-size: 25px;
  width: 900px;
  height: 60px;
  border: 1px solid black;
  background-color: black;
  color: white;
`;

const FirstColumn = styled.div`
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

const ScheduleWrapper = styled.div`
  background-color: lightgrey;
  left: 325px;
  top: ${props => props.top};
  width: 876px;
  height: ${props => props.height};
  z-index: 3;
  position: absolute;
`;

function Daily() {
  const { currentDate, events } = useSelector((state) => state.calendar);

  const date = new Date(currentDate).getDate();

  const day = dayList[new Date(currentDate).getDay()];

  const filteredData = events.filter(event => checkDailyEventToShow(event.date, currentDate));

  return (
    <Wrapper>
      <TopRowContainer>
        <FirstColumnCalendarTitle>{TIME}</FirstColumnCalendarTitle>
        <SecondColumnCalendarTitle>{day} {date}</SecondColumnCalendarTitle>
      </TopRowContainer>
      <DayWrapper>
        {Array.from(Array(24).keys()).map((hour, index) => (
          <RowContainer key={index}>
            <FirstColumn>{`${hour}:00 - ${hour + 1}:00`}</FirstColumn>
            <SecondColumn />
          </RowContainer>
        ))}
        {filteredData.map(({ id,startTime, endTime, title, description }) => {
          return (
            <ScheduleWrapper
              key={id}
              top={`${62 * startTime}px`}
              height={`${(endTime - startTime) * 62}px`}
            >
            <EventBox
              title={title}
              description={description}
            />
            </ScheduleWrapper>
          )
        })}
      </DayWrapper>
    </Wrapper>
  );
}

export default Daily;
