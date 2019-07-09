import React, { useState } from 'react';
import { useTransition, animated } from 'react-spring';

const TransitionBtn = () => {
  const [items, setItems] = useState([
    {
      letter: 'N',
      key: 1
    },
    {
      letter: 'E',
      key: 2
    },
    {
      letter: 'I',
      key: 3
    },
    {
      letter: 'L',
      key: 4
    }
  ]);

  const transition = useTransition(items, item => item.key, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });

  return (
    <div>
      {transition.map(({ item, key, props }) => (
        <animated.h1 key={key} style={props}>
          {item.letter}
        </animated.h1>
      ))}

      <button onClick={() => setItems([{ letter: 'N', key: 1 }])}>
        Transition
      </button>
    </div>
  );
};

export default TransitionBtn;
