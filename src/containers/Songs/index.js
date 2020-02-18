/* eslint-disable react/require-default-props */
import React from 'react';
import './index.css';
import PropTypes from 'prop-types';
// import Button from '../../components/Button';
// import Nav from '../../components/Nav';
import { useLocation, Redirect } from 'react-router-dom';
import useInput from '../../hooks/useInput';
import SongCard from '../../components/SongCard';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Songs(props) {
  const { testId } = props;
  const query = useQuery();
  const type = query.get('type');
  const [data, setData, listLoadComplete] = useInput([], '/api/records');
  if (listLoadComplete === null) {
    return (
      <div>
        Loading...
      </div>
    );
  }
  const typeData = [];
  for (let i = 0; i < data.length; i += 1) {
    if (data[i].genres.includes(type)) {
      typeData.push(data[i]);
    }
  }
  const songsList = typeData.map((value) => (
    <SongCard data={value} />
  ));
  console.log(typeData);
  return (
    <div className="CreateTodo">
      {songsList}
    </div>
  );
}
Songs.propTypes = {
  testId: PropTypes.string,
};

export default Songs;
