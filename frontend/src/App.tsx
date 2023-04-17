import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Popup = React.lazy(() => import('./components/Popup/Popup'));
const HighlightsList = React.lazy(() => import('./components/HighlightsList/HighlightsList'));
const SummaryTooltip = React.lazy(() => import('./components/SummaryTooltip/SummaryTooltip'));

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Suspense fallback={<div>Loading...</div>}><Popup /></Suspense>} />
        <Route path="/highlights" element={<Suspense fallback={<div>Loading...</div>}><HighlightsList /></Suspense>} />
        <Route path="/summary/:_id" element={<Suspense fallback={<div>Loading...</div>}><SummaryTooltip /></Suspense>} />
      </Routes>
    </Router>
  );
}

export default App;
