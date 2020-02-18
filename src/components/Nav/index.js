/* eslint-disable react/require-default-props */
import React from 'react';
import './index.css';
import PropTypes from 'prop-types';

function Nav(props) {
  const { testId } = props;
  return (
    <div className="NavBar" data-testid={testId}>
      <p>
        <b>Record</b>
        Shelf
      </p>
    </div>
  );
}
Nav.propTypes = {
  testId: PropTypes.string,
};

export default Nav;
