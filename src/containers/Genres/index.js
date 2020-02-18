/* eslint-disable react/require-default-props */
import React from 'react';
import './index.css';
import PropTypes from 'prop-types';
import CardList from '../../components/CardList';
import Nav from '../../components/Nav';
// import { Link, Router } from 'react-router-dom';

function Genres(props) {
  const { testId } = props;
  return (
    <div className="genres" data-testid={testId}>
      <Nav />
      <div>
        <h2>Genres</h2>
      </div>
      <CardList />
    </div>
  );
}

Genres.propTypes = {
  testId: PropTypes.string,
};

export default Genres;
