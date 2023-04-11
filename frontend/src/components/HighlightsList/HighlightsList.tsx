import React from 'react';
import { Link } from 'react-router-dom';
import { useHighlights } from '../../hooks/useHighlights';
import { ReturnedHighlightData } from '../../types';

function HighlightsList() {
  const { highlights, deleteHighlight } = useHighlights();

  return (
    <div>
      <h1>My Highlights</h1>
      <ul>
        {highlights.map((highlight: ReturnedHighlightData) => (
          <li key={highlight._id}>
            <Link to={`/summary/${highlight._id}`}>{highlight.highlightedText}</Link>
            <button onClick={() => deleteHighlight(highlight._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HighlightsList;