import React from 'react';
import { animated } from 'react-spring';

import '../styles/Nav.css';

const Nav = ({ style }) => {
  return (
    <animated.nav className="nav-container" style={style}>
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Store</a>
      <a href="#">Tutorials</a>
    </animated.nav>
  );
};

export default Nav;
