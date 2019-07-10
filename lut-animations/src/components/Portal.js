import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';

const portalRoot = document.getElementById('portal');

const Portal = ({ children }) => {
  const mainDivRef = useRef(document.createElement('div'));

  useEffect(() => {
    const mainDiv = mainDivRef.current;
    if (portalRoot && mainDiv) {
      portalRoot.appendChild(mainDiv);
    }
    return () => {
      if (portalRoot && mainDiv) {
        portalRoot.removeChild(mainDiv);
      }
    };
  }, []);

  return mainDivRef.current ? createPortal(children, mainDivRef.current) : null;
};

Portal.propTypes = {
  children: PropTypes.node.isRequired
};

export default Portal;
