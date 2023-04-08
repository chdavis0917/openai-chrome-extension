import { useState, useEffect } from 'react';
import axios from 'axios';
import { Summary } from '../types';

const useSummaries = () => {
  const [summaries, setSummaries] = useState<Summary[]>([]);

  useEffect(() => {
    axios
      .get('https://api.example.com/summaries')
      .then((response) => setSummaries(response.data))
      .catch((error) => console.log(error));
  }, []);

  return { summaries };
};

export default useSummaries;
