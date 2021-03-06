import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { showLastWeek, showNextWeek, showDailyCalendar, showWeeklyCalendar, showLastDay, showNextDay } from "../../../features/calendar/actions";
import { CALENDAR, DAILY, EVENT_CREATE_BUTTON_MESSAGE, TODAY, WEEKLY } from "../../../features/constant";

function Header() {
  const { currentDate, currentSunday, calendarType } = useSelector((state) => state.calendar);

  const currentMonth = calendarType === WEEKLY ? (new Date(currentSunday).getMonth() + 1) : (new Date(currentDate).getMonth() + 1);

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
      <MenuSelectorWrapper>
        <nav>
          <ul>
            <ListWrapper><Link to="/calendar">{CALENDAR}</Link></ListWrapper>
            <ListWrapper><Link to="/events/new">{EVENT_CREATE_BUTTON_MESSAGE}</Link></ListWrapper>
          </ul>
        </nav>
      </MenuSelectorWrapper>
      <TodayButton>{TODAY}</TodayButton>
      <MonthWrapper>{currentMonth}</MonthWrapper>
      <div>
        {calendarType === WEEKLY ? (
          <BackForwardButton
            onClick={() => dispatch(showLastWeek())}
          >
          &lt;
          </BackForwardButton>
        ) : (
          <BackForwardButton
            onClick={() => dispatch(showLastDay())}
          >
          &gt;
          </BackForwardButton>
        )}
        {calendarType === WEEKLY ? (
          <BackForwardButton
            onClick={() => dispatch(showNextWeek())}
          >
          {">"}
          </BackForwardButton>
        ) : (
          <BackForwardButton
            onClick={() => dispatch(showNextDay())}
          >
          {">"}
          </BackForwardButton>
        )}
      </div>
      <div>
        <select onChange={onChangeCalendarTypeSelector}>
          <option value={WEEKLY}>{WEEKLY}</option>
          <option value={DAILY}>{DAILY}</option>
        </select>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  width: 1200px;
  text-align: center;
  justify-content: space-between;
  align-items: center;
`;

const MenuSelectorWrapper = styled.div`
  vertical-align: middle;
`;

const ListWrapper = styled.li`
  list-style: none;
`;

const TodayButton = styled.button`
  padding: 5px 10px;
  background-color: white;
  color: black;
`;

const BackForwardButton = styled.button`
  padding: 5px 10px;
  background-color: white;
  color: black;
  margin: 5px;
`;

const MonthWrapper = styled.div`
  font-size: 80px;
`;

export default Header;
