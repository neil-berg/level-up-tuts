import React from 'react';
import styled from 'styled-components';
import { animated, useTransition } from 'react-spring';

const Modal = ({ showModal, setShowModal }) => {
  const backdropTransition = useTransition(showModal, null, {
    delay: 2,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });

  const cardTransition = useTransition(showModal, null, {
    delay: 2,
    from: { opacity: 0, transform: `scale(0.6)` },
    enter: { opacity: 1, transform: `scale(1)` },
    leave: { opacity: 0, transform: `scale(0.6)` }
  });

  return (
    <Container>
      {backdropTransition.map(({ item, key, props: animation }) => {
        return (
          item && (
            <animated.div
              className="backdrop"
              key={key}
              style={animation}
              aria-modal="true"
              role="dialog"
              onClick={e => {
                if (e.target.classList.contains('backdrop')) {
                  setShowModal(false);
                }
              }}
            >
              {cardTransition.map(({ item, key, props: animation }) => {
                return (
                  item && (
                    <animated.div className="card" key={key} style={animation}>
                      <div>
                        Close Modal
                        <button onClick={() => setShowModal(false)}>
                          Close
                        </button>
                      </div>
                    </animated.div>
                  )
                );
              })}
            </animated.div>
          )
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  & .backdrop {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    z-index: 200;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.4);
    overflow: hidden;
  }
  & .card {
    position: relative;
    border-radius: 10px;
    padding: 15px;
    z-index: 201;
    height: 200px;
    min-width: 320px;
    background-color: white;
  }
`;

export default Modal;
