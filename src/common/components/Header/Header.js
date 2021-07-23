import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { showLastWeek, showNextWeek, showDailyCalendar, showWeeklyCalendar, showLastDay, showNextDay } from "../../../features/calendar/actions";
import { CALENDAR, DAILY, EVENT_CREATE, TODAY, WEEKLY } from "../../../features/constant";

const Wrapper = styled.div`
  header {
    display: flex;
    width: 1200px;
    text-align: center;
    justify-content: space-between;
    align-items: center;
  }

  .menu-selector {
    vertical-align: middle;
  }

  button {
    /* border: none; */
    padding: 5px 10px;
  }

  .today-button {
    background-color: white;
    color: black;
  }

  .month {
    font-size: 40px;
  }

  .back-forward-button {
    background-color: white;
    color: black;
    margin: 5px;
  }

  li {
    list-style: none;
  }
`;

function Header () {
  const { currentDate, currentSunday, calendarType } = useSelector((state) => state.calendar);

  const currentMonth = calendarType === WEEKLY ? new Date(currentSunday).getMonth() + 1 : new Date(currentDate).getMonth() + 1;
  const dispatch = useDispatch();

  const onChangeCalendarTypeSelector = (event) => {
    if (event.target.value === DAILY) {
      dispatch(showDailyCalendar());
    } else {
      dispatch(showWeeklyCalendar());
    }
  };

  return (
    <Wrapper>
      <header>
        <div className="menu-selector">
          <nav>
            <ul>
              <li><Link to="/">{CALENDAR}</Link></li>
              <li><Link to="/event">{EVENT_CREATE}</Link></li>
            </ul>
          </nav>
        </div>
        <button className="today-button">{TODAY}</button>
        <div className="month">{currentMonth}</div>
        <div className="back-forward">
          {calendarType === WEEKLY ? (
            <button
              className="back-forward-button"
              onClick={() => dispatch(showLastWeek())}
            >
            {"<"}
            </button>
          ) : (
            <button
              className="back-forward-button"
              onClick={() => dispatch(showLastDay())}
            >
            {"<"}
            </button>
          )}
          {calendarType === WEEKLY ? (
            <button
              className="back-forward-button"
              onClick={() => dispatch(showNextWeek())}
            >
            {">"}
            </button>
          ) : (
            <button
              className="back-forward-button"
              onClick={() => dispatch(showNextDay())}
            >
            {">"}
            </button>
          )}
        </div>
        <div className="selector">
          <select onChange={onChangeCalendarTypeSelector}>
            <option value={WEEKLY}>{WEEKLY}</option>
            <option value={DAILY}>{DAILY}</option>
          </select>
        </div>
      </header>
    </Wrapper>
  );
}

export default Header;
