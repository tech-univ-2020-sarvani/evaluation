/* eslint-disable react/require-default-props */
import React from 'react';
import './index.css';
import PropTypes from 'prop-types';
import Button from '../../components/Button';
import Nav from '../../components/Nav';

function HomePage(props) {
  const { testId } = props;
  return (
    <div className="homePage" data-testid={testId}>
      <Nav />
      <div className="container">
        <p>:((</p>
        <br />
        <h3>seems a bit empty in here..</h3>
        <Button path="/genres">sync</Button>
      </div>
    </div>
  );
}
HomePage.propTypes = {
  testId: PropTypes.string,
};

export default HomePage;
