import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useHighlights } from '../../hooks/useHighlights';
import { ReturnedHighlightData } from '../../types';

const SummaryTooltip: React.FC = () => {
  const { _id } = useParams<{ _id: string }>();
  const { highlights } = useHighlights();
  const highlight = highlights.find((h: ReturnedHighlightData) => h._id === _id);

  if (!highlight) {
    return <div>Loading summary...</div>;
  }

  return (
    <div>
      <h2>{highlight.url}</h2>
      <p>{highlight.summary.text}</p>
      <Link to="/highlights">Back to highlights</Link>
    </div>
  );
};

export default SummaryTooltip;
