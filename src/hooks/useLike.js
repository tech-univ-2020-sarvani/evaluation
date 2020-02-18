import { useState, useEffect } from 'react';
import axios from 'axios';
import details from '../constants/apiData.json';

const useLike = (defaultValue, url) => {
  const [likes, setLikes] = useState(defaultValue);
  const [listLoadComplete, setlistLoadComplete] = useState(null);
  const config = {
    headers: { Authorization: `Bearer ${details.token}` },
  };
  useEffect(() => {
    const someFunc = async () => {
      try {
        const response = await axios.get(url, config);
        console.log(response);
        setLikes(response.data.count);
        setlistLoadComplete(true);
      } catch (e) {
        setlistLoadComplete(false);
      }
    };
    someFunc();
  }, []);
  return [likes, setLikes, listLoadComplete];
};

export default useLike;
