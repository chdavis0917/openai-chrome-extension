import React from 'react';
import { useParams } from 'react-router-dom';
import { useHighlights } from '../../hooks/useHighlights';
import { ReturnedHighlightData } from '../../types';

const SummaryTooltip: React.FC = () => {
  const { _id } = useParams<{ _id: string }>();
  const { highlights } = useHighlights();
  const highlight = highlights.find((h: ReturnedHighlightData) => h._id === _id);

  // console.log("What is _id?", _id);
  // console.log("What is highlight in summaryTooltip?", highlight)

  if (!highlight) {
    return <div>Loading summary...</div>;
  }

  // const { summary, url } = highlight;

  return (
    <div>
      <h2>{highlight.url}</h2>
      <p>{highlight.summary.text}</p>
    </div>
  );
};

export default SummaryTooltip;
