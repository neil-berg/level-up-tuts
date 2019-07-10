import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

const portalRoot = document.getElementById('portal');
class Portal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    portalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    portalRoot.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}

Portal.propTypes = {
  children: PropTypes.node.isRequired
};

export default Portal;
