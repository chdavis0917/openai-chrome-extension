import React from 'react';
import { Link } from 'react-router-dom';
import './../../../public/index.css';


function Popup() {
  return (
    <div>
      <h1>Frontdoor Chrome Extension</h1>
      <nav>
        <ul>
          <li>
            <Link to="/highlights">My Highlights</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Popup;
