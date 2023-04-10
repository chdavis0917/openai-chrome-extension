import React from 'react';
import { useParams } from 'react-router-dom';
import useSummaries from '../../hooks/useSummaries';
import { Summary } from '../../types';

const SummaryTooltip: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { summaries } = useSummaries();
  const summary = summaries.find((s: Summary) => s.id === Number(id));

  if (!summary) {
    return <div>Loading summary...</div>;
  }

  return (
    <div>
      <h2>{summary.title}</h2>
      <p>{summary.content}</p>
    </div>
  );
};

export default SummaryTooltip;
