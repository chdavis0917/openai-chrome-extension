import React from 'react';
import { Link } from 'react-router-dom';
import { useHighlights } from '../../hooks/useHighlights';
import { Highlight } from '../../types';

function HighlightsList() {
  const { highlights, deleteHighlight } = useHighlights();

  return (
    <div>
      <h1>My Highlights</h1>
      <ul>
        {highlights.map((highlight: Highlight) => (
          <li key={highlight.id}>
            <Link to={`/summary/${highlight.id}`}>{highlight.text}</Link>
            <button onClick={() => deleteHighlight(highlight.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HighlightsList;