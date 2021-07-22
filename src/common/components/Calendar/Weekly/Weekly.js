import React, { useState } from "react";
import styled from "styled-components";
import Day from "../Day/Day";
import events from "../../../../mockData";
import EventBox from "../EventBox/EventBox";
import { useSelector } from 'react-redux';
import changeDateFormat from '../../../utils/date';

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
`;

const week = [];

for (let i = 0; i < 7; i++) {
  const day = [];

  for (let j = 0; j < 24; j++) {
    day.push({i, j});
  }

  week.push(day);
}

const dayList = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function Weekly() {
  const [dataList, setDataList] = useState(events);

  const { currentSunday } = useSelector((state) => state.calendar);

  const weekDateList = [];

  for (let i = 0; i < 7; i++) {
    const date = new Date(currentSunday);

    date.setDate(date.getDate() + i);

    weekDateList.push(date);
  }

  const checkEventToShow = (date, currentWeekDateList) => {
    const isCurrentWeek = currentWeekDateList.map(baseDate => changeDateFormat(baseDate).date).includes(date.getDate());
    const isCurrentMonth = currentSunday.getMonth() === date.getMonth();

    return isCurrentWeek && isCurrentMonth;
  };

  const sortedData = dataList.filter(data => checkEventToShow(data.date, weekDateList));

  return (
    <Wrapper>
      <div className="calendar-container">
        <div className="week">
          <div>
            <div className="rowTitle"></div>
            {Array.from(Array(24).keys()).map((hour, index) => (
              <div key={index} className="rowTitle">{`${hour}:00 - ${hour + 1}:00`}</div>
            ))}
          </div>
          <div >
            <div>
              <div>
                {dayList.map((day, index) => (
                  <div key={index} className="dayName">{day}</div>
                  )
                )}
              </div>
              <div>
                {weekDateList.map((baseDate, index) => {
                  const { date } = changeDateFormat(baseDate);

                  return (
                    <div key={index} className="dayName">{date}</div>
                )})}
              </div>
            </div>
            <div style={{ display: 'flex' }}>
              {week.map((day, dayIndex) => (
                <Day
                  key={dayIndex}
                  day={day}
                  dayIndex={dayIndex}
                >
                </Day>
              ))}
            </div>
            {sortedData.map(({ id, day, startTime, endTime, title, description }) => {
              return (
                <div
                  key={id}
                  style={{
                    backgroundColor: "pink",
                    left: (150 * (day + 1)),
                    top: 82 * (startTime + 1),
                    border: "1px solid black",
                    width: 150,
                    height: (endTime - startTime) * 82,
                    zIndex: 3,
                    position: 'absolute',
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
