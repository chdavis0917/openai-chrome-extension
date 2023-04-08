import React, { useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';
import axios from 'axios';
import { Summary } from '../../types';



const SummaryTooltip: React.FC = () => {
  const { id } = useParams();
  const [summary, setSummary] = useState<Summary>();

  useEffect(() => {
    axios
      .get<Summary>(`https://api.example.com/summaries/${id}`)
      .then((response) => setSummary(response.data))
      .catch((error) => console.log(error));
  }, [id]);

  if (!summary) {
    return <div>Loading summary...</div>;
  }

  return (
    <div>
      <h2>{summary.title}</h2>
      <p>{summary.content}</p>
      <p>Author: {summary.author}</p>
    </div>
  );
};

export default SummaryTooltip;
