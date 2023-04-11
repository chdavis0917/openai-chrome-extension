import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useHighlights } from '../../hooks/useHighlights';
import { ReturnedHighlightData } from '../../types';

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
            <li key={highlight._id}>
              <Link to={`/summary/${highlight._id}`}>{highlight.highlightedText}</Link>
              <button onClick={() => deleteHighlight(highlight._id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default HighlightsList;
