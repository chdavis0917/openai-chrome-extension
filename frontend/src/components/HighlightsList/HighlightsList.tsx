import React from 'react';
import { Link } from 'react-router-dom';

interface Highlight {
  id: number;
  text: string;
}

const mockHighlights: Highlight[] = [
  { id: 1, text: 'Lorem ipsum dolor sit amet' },
  { id: 2, text: 'consectetur adipiscing elit' },
  { id: 3, text: 'sed do eiusmod tempor' },
];

function HighlightsList() {
  return (
    <div>
      <h1>My Highlights</h1>
      <ul>
        {mockHighlights.map((highlight) => (
          <li key={highlight.id}>
            <Link to={`/summary/${highlight.id}`}>{highlight.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HighlightsList;
