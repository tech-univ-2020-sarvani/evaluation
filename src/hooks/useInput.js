import { useState, useEffect } from 'react';
import axios from 'axios';
import details from '../constants/apiData.json';

const useInput = (defaultValue, url) => {
  const [data, setData] = useState(defaultValue);
  const [listLoadComplete, setlistLoadComplete] = useState(null);
  const config = {
    headers: { Authorization: `Bearer ${details.token}` },
  };
  useEffect(() => {
    const someFunc = async () => {
      try {
        const response = await axios.get(url, config);
        setData(response.data.data);
        setlistLoadComplete(true);
      } catch (e) {
        setlistLoadComplete(false);
      }
    };
    someFunc();
  }, []);
  return [data, setData, listLoadComplete];
};
export default useInput;
