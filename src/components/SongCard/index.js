/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import './index.css';
import PropTypes from 'prop-types';
import { FaHeart } from 'react-icons/fa';
import useLike from '../../hooks/useLike';

function SongCard(props) {
  const { data } = props;
  const [count, setCount] = useState(0);
  const path = `/records/${data.id}/love`;
  const [likes, setLikes, listLoadComplete] = useLike(0, path);
  console.log(likes);
  if (listLoadComplete === null) {
    return (
      <div>
        Loading...
      </div>
    );
  }
  return (
    <div className="card">
      <img src={data.albumArtUrl} alt="artist" />
      <p>{data.name}</p>
      {' '}
      <p>{data.albumName}</p>
      <br />
      {likes}
      <button type="button" onClick={() => setLikes(likes + 1)}><FaHeart /></button>
    </div>
  );
}

SongCard.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
export default SongCard;
