import React, { useState, useEffect, memo } from 'react';
import { Link } from 'react-router-dom';
import { useHighlights } from '../../hooks/useHighlights';
import { ReturnedHighlightData } from '../../types';

const HighlightListItem = memo<{ highlight: ReturnedHighlightData; onDelete: (id: string) => void }>(
  ({ highlight, onDelete }) => {
    return (
      <li>
        <Link to={`/summary/${highlight._id}`}>{highlight.highlightedText}</Link>
        <button onClick={() => onDelete(highlight._id)}>Delete</button>
      </li>
    );
  }
);

function HighlightsList() {
  const [loading, setLoading] = useState(true);
  const { highlights, deleteHighlight } = useHighlights();

  useEffect(() => {
    if (highlights.length > 0) {
      setLoading(false);
    }
  }, [highlights]);

  return (
    <div>
      <h1>My Highlights</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {highlights.map((highlight: ReturnedHighlightData) => (
            <HighlightListItem key={highlight._id} highlight={highlight} onDelete={deleteHighlight} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default HighlightsList;
