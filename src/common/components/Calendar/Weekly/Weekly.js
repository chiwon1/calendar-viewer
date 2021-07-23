import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Day from "../WeekDay/WeekDay";
import EventBox from "../EventBox/EventBox";
import weeklyCalendarIndex, { changeDateFormat, checkWeeklyEventToShow, dayList } from "../../../utils/dateUtils";

const Wrapper = styled.div`
  .calendar-container {
    max-width: 90%;
  }

  .dayName {
    width: 150px;
    height: 25px;
    text-align: center;
    display: inline-block;
    line-height: 25px;
    color: white;
    background-color: black;
  }

  .time {
    text-align: center;
    width: 150px;
    height: 70px;
    border: 1px solid gray;
  }

  .row-title-container {
    background-color: black;
    width: 1052px;
  }

  .row-title {
    position: relative;
    top: -22px;
    text-align: center;
    width: 150px;
    height: 72px;
    line-height: 80px;
  }

  .week {
    display: flex;
    position: relative;
  }

  .calendar-table {
    display: flex;
    position: relative;
  }
`;

const ScheduleWrapper = styled.div`
  background-color: lightgrey;
  left: ${props => props.left};
  top: ${props => props.top};
  width: 148px;
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
      <div className="calendar-container">
        <div className="week">
          <div>
            <div className="row-title" />
            {Array.from(Array(24).keys()).map((hour, index) => (
              <div
                key={index}
                className="row-title">
                  {`${hour}:00 - ${hour + 1}:00`}
              </div>
            ))}
          </div>
          <div>
            <div>
              <div className="row-title-container">
                {dayList.map((day, index) => (
                  <div
                    key={index}
                    className="dayName">
                      {day}
                  </div>
                ))}
              </div>
              <div className="row-title-container">
                {weekDateList.map((baseDate, index) => {
                  const { date } = changeDateFormat(baseDate);
                  return (
                    <div
                      key={index}
                      className="dayName">
                        {date}
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="calendar-table">
              {weeklyCalendarIndex.map((day, dayIndex) => (
                <Day
                  key={dayIndex}
                  day={day}
                >
                </Day>
              ))}
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
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Weekly;
