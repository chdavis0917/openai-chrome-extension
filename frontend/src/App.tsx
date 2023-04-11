import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Popup from './components/Popup/Popup';
import HighlightsList from './components/HighlightsList/HighlightsList';
import SummaryTooltip from './components/SummaryTooltip/SummaryTooltip';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Popup />} />
        <Route path="/highlights" element={<HighlightsList />} />
        <Route path="/summary/:_id" element={<SummaryTooltip />} />
      </Routes>
    </Router>
  );
}

export default App;
