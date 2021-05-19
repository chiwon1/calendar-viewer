import React from 'react';
import { Link } from 'react-router-dom';

// TODO: Create your own header.
export default function Header () {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to='/'>Menu 1</Link></li>
          <li><Link to='/event'>Menu 2</Link></li>
        </ul>
      </nav>
    </header>
  );
}
