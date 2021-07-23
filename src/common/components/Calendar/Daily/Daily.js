import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import EventBox from "../EventBox/EventBox";
import { TIME } from "../../../../features/constant";
import { checkDailyEventToShow, dayList } from "../../../utils/dateUtils";

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
    margin: 0 0 0 30px;
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

  .calendar-title {
    background-color: black;
    color: white;
  }
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
      <div className="calendar-container">
        <div className="top-row-container">
          <div className="first-column calendar-title">{TIME}</div>
          <div className="second-column calendar-title">{day} {date}</div>
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
        </div>
      </div>
    </Wrapper>
  );
}

export default Daily;
