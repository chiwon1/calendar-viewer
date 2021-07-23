import React, { useState } from "react";
import styled from "styled-components";
import Day from "../Day/Day";
import EventBox from "../EventBox/EventBox";
import { useSelector } from "react-redux";
import weeklyCalendarIndex, { changeDateFormat, checkWeeklyEventToShow, dayList } from "../../../utils/dateUtils";

const Wrapper = styled.div`
  .calendar-container {
    max-width: 90%;
  }

  .dayName {
    width: 150px;
    height: 41px;
    text-align: center;
    display: inline-block;
    font-size: 22px;
    line-height: 41px;
  }

  .time {
    text-align: center;
    width: 150px;
    height: 80px;
    border: 1px solid black;
  }

  .rowTitle {
    text-align: center;
    width: 150px;
    height: 82px;
    line-height: 80px;
  }

  .week {
    display: flex;
    position: relative;
  }

  .calendar-table {
    display: flex;
  }
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
            <div className="rowTitle" />
            {Array.from(Array(24).keys()).map((hour, index) => (
              <div
                key={index}
                className="rowTitle">
                  {`${hour}:00 - ${hour + 1}:00`}
              </div>
            ))}
          </div>
          <div>
            <div>
              <div>
                {dayList.map((day, index) => (
                  <div
                    key={index}
                    className="dayName">
                      {day}
                  </div>
                ))}
              </div>
              <div>
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
            </div>
            {filteredData.map(({ id, date, startTime, endTime, title, description }) => {
              return (
                <div
                  key={id}
                  style={{
                    backgroundColor: "pink",
                    left: (150 * (date.getDay() + 1)),
                    top: 82 * (startTime + 1),
                    border: "1px solid black",
                    width: 150,
                    height: (endTime - startTime) * 82,
                    zIndex: 3,
                    position: "absolute",
                  }}
                >
                <EventBox
                  title={title}
                  description={description}
                />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Weekly;
