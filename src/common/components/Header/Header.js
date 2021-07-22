import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { showLastWeek, showNextWeek, showDailyCalendar, showWeeklyCalendar } from '../../../features/calendar/actions';
import { DAILY, WEEKLY } from '../../../features/constant';

const Wrapper = styled.div`
  header {
    display: flex;
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

  .back-forward {
  }

  .back-forward-button {
    background-color: white;
    color: black;
    border: 2px solid #555555;
  }
`;

function Header () {
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
        <div className="back-forward">
          <button
            className="back-forward-button"
            onClick={() => dispatch(showLastWeek())}
          >
          {"<"}
          </button>
          <button
            className="back-forward-button"
            onClick={() => dispatch(showNextWeek())}
          >
          {">"}
          </button>
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
