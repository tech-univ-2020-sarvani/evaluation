/* eslint-disable react/require-default-props */
import React from 'react';
import './index.css';
import PropTypes from 'prop-types';
import Button from '../Button';
// import { Link, Router } from 'react-router-dom';
import rock from '../../images/001-guitar.png';
import pop from '../../images/049-singer.png';
import bollywood from '../../images/006-amplifier.png';
import country from '../../images/012-electric guitar.png';

function CardList(props) {
  const { testId } = props;
  return (
    <div className="CardList" data-testid={testId}>
      <div className="card">
        <img src={rock} alt="Avatar" />
        <div className="container">
          <Button path="/songs?type=rock">rock</Button>
        </div>
      </div>
      <div className="card">
        <img src={pop} alt="Avatar" />
        <div className="container">
          <Button path="/songs?type=pop">pop</Button>
        </div>
      </div>
      <div className="card">
        <img src={bollywood} alt="Avatar" />
        <div className="container">
          <Button path="/songs?type=bollywood">bollywood</Button>
        </div>
      </div>
      <div className="card">
        <img src={country} alt="Avatar" />
        <div className="container">
          <Button path="/songs?type=country">country</Button>
        </div>
      </div>
    </div>
  );
}

CardList.propTypes = {
  testId: PropTypes.string,
};

export default CardList;
