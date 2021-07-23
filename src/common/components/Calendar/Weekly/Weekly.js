import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Day from "../WeekDay/WeekDay";
import EventBox from "../EventBox/EventBox";
import weeklyCalendarIndex, { changeDateFormat, checkWeeklyEventToShow, dayList } from "../../../utils/dateUtils";

const Wrapper = styled.div`
  max-width: 90%;
  display: flex;
  position: relative;
`;

const RowTitle = styled.div`
  position: relative;
  top: -22px;
  text-align: center;
  width: 150px;
  height: 72px;
  line-height: 80px;
`;

const DayName = styled.div`
  width: 150px;
  height: 25px;
  text-align: center;
  display: inline-block;
  line-height: 25px;
  color: white;
  background-color: black;
`;

const CalendarTable = styled.div`
  display: flex;
  position: relative;
`;

const ScheduleWrapper = styled.div`
  background-color: lightgrey;
  left: ${props => props.left};
  top: ${props => props.top};
  width: 149px;
  height: 1200px;
  height: ${props => props.height};
  z-index: 3;
  position: absolute;
`;

function Weekly() {
  const { currentSunday, events } = useSelector((state) => state.calendar);

  const weekDateList = [];

  for (let i = 0; i < 7; i++) {
    const date = new Date(currentSunday);

    date.setDate(date.getDate() + i);

    weekDateList.push(date);
  }

  const filteredData = events.filter(event => checkWeeklyEventToShow(event.date, weekDateList, currentSunday));

  return (
    <Wrapper>
      <div>
        <RowTitle />
        {Array.from(Array(24).keys()).map((hour, index) => (
          <RowTitle key={index}>
            {`${hour}:00 - ${hour + 1}:00`}
          </RowTitle>
        ))}
      </div>
      <div>
        <div>
          <div>
            {dayList.map((day, index) => <DayName key={index}>{day}</DayName>)}
          </div>
          <div>
            {weekDateList.map((baseDate, index) => {
              const { date } = changeDateFormat(baseDate);
              return (
                <DayName key={index}>{date}</DayName>
              )
            })}
          </div>
        </div>
        <CalendarTable>
          {weeklyCalendarIndex.map((day, dayIndex) => <Day key={dayIndex} day={day} />)}
          {filteredData.map(({ id, date, startTime, endTime, title, description }) => {
            return (
              <ScheduleWrapper
                key={id}
                left={`${150 * (date.getDay()) + 2}px`}
                top={`${72 * (startTime)}px`}
                height={`${(endTime - startTime) * 72}px`}
              >
              <EventBox
                title={title}
                description={description}
              />
              </ScheduleWrapper>
            )
          })}
        </CalendarTable>
      </div>
    </Wrapper>
  );
}

export default Weekly;
