import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

const Toggle = () => {
  const [isToggled, setToggle] = useState(false);
  const { color, y } = useSpring({
    // opacity: isToggled ? 1 : 0,
    color: isToggled ? 'seagreen' : 'palevioletred',
    // fontSize: isToggled ? '1em' : '2.5em',
    // transform: isToggled ? 'translate3d(0, 0, 0)' : 'translate3d( -50px, 0, 0)'
    y: isToggled ? 0 : 1
  });

  const animation = {
    transform: y
      .interpolate({
        range: [0, 0.25, 0.5, 0.75, 1],
        output: [0, -10, -50, -100, 20]
      })
      .interpolate(y => `translate3d(0, ${y}px, 0)`),
    color
  };

  return (
    <div>
      <animated.h1 style={animation}>Hello</animated.h1>
      <button onClick={() => setToggle(!isToggled)}>Toggle</button>
    </div>
  );
};

// const AnimatedTitle = animated.h1``;

export default Toggle;
