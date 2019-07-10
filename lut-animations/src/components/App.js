import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

import Toggle from '../components/Toggle';
import Nav from '../components/Nav';
import Checkout from '../components/Checkout';
import TransitionBtn from '../components/Transition';
import Portal from '../components/Portal';
import Modal from '../components/Modal';

import logo from '../logo.svg';
import '../styles/App.css';

const App = () => {
  const [isNavOpen, setNavOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const navAnimation = useSpring({
    transform: isNavOpen
      ? `translate3d(0, 0, 0) scale(1)`
      : `translate3d(100%, 0, 0) scale(0.6)`,
    opacity: isNavOpen ? 1 : 0
  });

  const fade = useSpring({
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    }
  });

  return (
    <animated.div className="App" style={fade}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button
          className="menu-button"
          onClick={() => setNavOpen(!isNavOpen)}
          style={{ zIndex: 5 }}
        >
          MENU
        </button>
        <button onClick={() => setShowModal(true)}>Show Modal</button>
        {/* <Nav style={navAnimation} /> */}
      </header>

      <main>
        <Toggle />
        <TransitionBtn />
        <Checkout isOpen={isNavOpen} />
        {/* <Modal showModal={showModal} setShowModal={setShowModal} /> */}
        <Portal>
          <Modal showModal={showModal} setShowModal={setShowModal} />
        </Portal>
      </main>
    </animated.div>
  );
};

export default App;
