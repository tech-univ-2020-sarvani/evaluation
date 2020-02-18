/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import './index.css';
import PropTypes from 'prop-types';
import { FaHeart } from 'react-icons/fa';
import axios from 'axios';
import useLike from '../../hooks/useLike';
import details from '../../constants/apiData.json';

function SongCard(props) {
  const { data } = props;
  const path = `/${data.id}/love`;
  const path2 = `/${data.id}/love`;
  const [likes, setLikes, listLoadComplete] = useLike(0, path);
  console.log(likes);
  //   const updateLikes = async () => {
  //     const newCount = {
  //       count: likes + 1,
  //     };
  //     const note = await axios.patch(path2, newCount);
  //     setLikes(note + 1);
  //   };
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
