/* eslint-disable react/require-default-props */
import React from 'react';
import './index.css';
import PropTypes from 'prop-types';
// import { Link, Router } from 'react-router-dom';

function Button(props) {
  const { children, buttonClick, testId } = props;
  return (
    <div className="buttonContainer">
      <button className="button" type="button" onClick={buttonClick} data-testid={testId}>{children}</button>
    </div>
  );
}

Button.propTypes = {
  testId: PropTypes.string,
  children: PropTypes.string.isRequired,
  buttonClick: PropTypes.func,
};

export default Button;
