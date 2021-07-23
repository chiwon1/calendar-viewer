import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { checkDailyEventToShow, dayList } from "../../../utils/dateUtils";
import EventBox from "../EventBox/EventBox";

const Wrapper = styled.div`
  .calendar-container {
    text-align: center;
    width: 1202px;
  }

  .top-row-container {
    line-height: 60px;
    height: 60px;
    display: flex;
    border: none;
  }

  .row-container {
    line-height: 60px;
    display: flex;
  }

  .first-column {
    width: 300px;
    height: 60px;
    border: 1px solid black;
  }

  .second-column {
    font-size: 25px;
    width: 900px;
    height: 60px;
    border: 1px solid black;
  }

  .day {
    position: relative;
  }
`;

function Daily() {
  const { currentDate, events } = useSelector((state) => state.calendar);

  const date = new Date(currentDate).getDate();

  const day = dayList[new Date(currentDate).getDay()];

  const filteredData = events.filter(event => checkDailyEventToShow(event.date, currentDate));

  return (
    <Wrapper>
      <div className="calendar-container">
        <div className="top-row-container">
          <div className="first-column">Time</div>
          <div className="second-column">{day} {date}</div>
        </div>
        <div className="day">
          {Array.from(Array(24).keys()).map((hour, index) => (
            <div className="row-container" key={index}>
              <div className="first-column">{`${hour}:00 - ${hour + 1}:00`}</div>
              <div className="second-column" />
            </div>
          ))}
          {filteredData.map(({ id,startTime, endTime, title, description }) => {
            return (
              <div
                key={id}
                style={{
                  backgroundColor: "pink",
                  left: 302,
                  top: 62 * startTime ,
                  border: "1px solid black",
                  width: 898,
                  height: (endTime - startTime) * 62,
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
    </Wrapper>
  );
}

export default Daily;
