import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Day from "../WeekDay/WeekDay";
import EventBox from "../EventBox/EventBox";
import weeklyCalendarIndex, { changeDateFormat, checkWeeklyEventToShow, dayList } from "../../../utils/dateUtils";

function Weekly() {
  const { calendar, event } = useSelector((state) => state);

  const { currentSunday } = calendar;
  const { events } = event;

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
        <TimeIndexWrapper />
        {[...new Array(24)].map((_, hour) => (
          <TimeIndexWrapper key={hour}>
            {`${hour}:00 - ${hour + 1}:00`}
          </TimeIndexWrapper>
        ))}
      </div>
      <div>
        <FirstRowWrapper>
          <div>
            {dayList.map((day) => <DateAndDayWrapper key={day}>{day}</DateAndDayWrapper>)}
          </div>
          <div>
            {weekDateList.map((baseDate) => {
              const { date } = changeDateFormat(baseDate);
              return (
                <DateAndDayWrapper key={baseDate}>{date}</DateAndDayWrapper>
              )
            })}
          </div>
        </FirstRowWrapper>
        <EventBoxesWrapper>
          {weeklyCalendarIndex.map((day, dayIndex) => <Day key={dayIndex} day={day} />)}
          {filteredData.map(({ id, date, startTime, endTime, title, description }) => {
            return (
              <EventBox
                eventId={id}
                title={title}
                description={description}
                key={id}
                left={`${150 * (new Date(date).getDay()) + 2}px`}
                top={`${72 * (startTime)}px`}
                height={`${(endTime - startTime) * 72}px`}
              />
            )
          })}
        </EventBoxesWrapper>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 90%;
  display: flex;
  position: relative;
`;

const TimeIndexWrapper = styled.div`
  position: relative;
  top: -22px;
  text-align: center;
  width: 150px;
  height: 72px;
  line-height: 80px;
`;

const DateAndDayWrapper = styled.div`
  width: 150px;
  height: 25px;
  text-align: center;
  display: inline-block;
  line-height: 25px;
  color: white;
  background-color: black;
`;

const EventBoxesWrapper = styled.div`
  display: flex;
  position: relative;
`;

const FirstRowWrapper = styled.div`
  background-color: black;
  width: 1052px;
`;

export default Weekly;
