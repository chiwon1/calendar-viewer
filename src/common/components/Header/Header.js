import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

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

  .selector {
  }
`;

// TODO: Create your own header.
function Header () {
  return (
    <Wrapper>
      <header>
        <div className="menu-selector">
          <nav>
            <ul>
              <li><Link to='/'>Menu 1</Link></li>
              <li><Link to='/event'>Menu 2</Link></li>
            </ul>
          </nav>
        </div>

        <button className="today-button">Today</button>

        <div className="back-forward">
          <button className="back-forward-button">{"<"}</button>
          <button className="back-forward-button">{">"}</button>
            <button value="날짜">날짜선택</button>
        </div>

        <div className="selector">
          <select>
            <option value="day">Day</option>
            <option value="week">Week</option>
            <option value="month">Month</option>
          </select>
        </div>

      </header>
    </Wrapper>
  );
}

export default Header;
