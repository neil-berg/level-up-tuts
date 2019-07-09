import React, { useState } from 'react';
import { useSpring, animated, interpolate } from 'react-spring';

import '../styles/Checkout.css';

const Checkout = ({ isOpen }) => {
  // Using 2 animated divs
  const animationLeft = useSpring({
    transform: isOpen
      ? `translate3d(0,0,0) scale(1)`
      : `translate3d(-100%, 0, 0) scale(0.6)`
  });
  const animationRight = useSpring({
    transform: isOpen ? `translate3d(0,0,0)` : `translate3d(100%, 0, 0)`
  });

  // Using 1 animation with the same reference
  // to the x property of the transform
  // const { x } = useSpring({
  //   x: isOpen ? 0 : 100
  // });

  // const animationLeft = {
  //   transform: x.interpolate(x => `translate3d(-${x}%, 0, 0)`)
  // };

  // const animationRight = {
  //   transform: x.interpolate(x => `translate3d(${x}%,0, 0)`)
  // };

  return (
    <div
      className="checkout"
      style={{ pointerEvents: isOpen ? 'none' : 'all' }}
    >
      {/* Using two animations, no interpolation */}
      {/* <animated.div className="checkout-left" style={animationLeft} />
      <animated.div className="checkout-right" style={animationRight} /> */}

      {/* Using a single animation */}
      {/* <animated.div
        className="checkout-left"
        style={{
          transform: x.interpolate(x => `translate3d(-${x}%, 0, 0)`)
        }}
      />
      <animated.div
        className="checkout-right"
        style={{
          transform: x.interpolate(x => `translate3d(${x}%, 0, 0)`)
        }}
      /> */}

      <animated.div className="checkout-left" style={animationLeft} />
      <animated.div className="checkout-right" style={animationRight} />
    </div>
  );
};

export default Checkout;
