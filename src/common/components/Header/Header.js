import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { showLastWeek, showNextWeek, showDailyCalendar, showWeeklyCalendar, showLastDay, showNextDay } from '../../../features/calendar/actions';
import { DAILY, WEEKLY } from '../../../features/constant';

const Wrapper = styled.div`
  header {
    display: flex;
    width: 1200px;
    text-align: center;
    justify-content: space-between;
    align-items: center;
    border: 1px solid black;
  }

  .menu-selector {
    vertical-align: middle;
  }

  .today-button {
    background-color: white;
    color: black;
    border: 2px solid #555555;
  }

  .month {
    font-size: 40px;
  }

  .back-forward-button {
    background-color: white;
    color: black;
    border: 2px solid #555555;
  }
`;

function Header () {
  const { currentDate, currentSunday, calendarType } = useSelector((state) => state.calendar);

  const currentMonth = calendarType === WEEKLY ? currentSunday.getMonth() + 1 : currentDate.getMonth() + 1;
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
              <li><Link to='/'>Calendar</Link></li>
              <li><Link to='/event'>Create event</Link></li>
            </ul>
          </nav>
        </div>
        <button className="today-button">Today</button>
        <div className="month">{currentMonth}</div>
        <div className="back-forward">
          {calendarType === WEEKLY ? <button
            className="back-forward-button"
            onClick={() => dispatch(showLastWeek())}
          >
          {"<"}
          </button> : <button
            className="back-forward-button"
            onClick={() => dispatch(showLastDay())}
          >
          {"<"}
          </button>}
          {calendarType === WEEKLY ? <button
            className="back-forward-button"
            onClick={() => dispatch(showNextWeek())}
          >
          {">"}
          </button> : <button
            className="back-forward-button"
            onClick={() => dispatch(showNextDay())}
          >
          {">"}
          </button>}
            <button value="날짜">날짜선택</button>
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
