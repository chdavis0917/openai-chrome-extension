import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Popup from './components/Popup';
import HighlightsList from './components/HighlightsList';
import SummaryTooltip from './components/SummaryTooltip';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Popup />
        </Route>
        <Route exact path="/highlights">
          <HighlightsList />
        </Route>
        <Route exact path="/summary/:id">
          <SummaryTooltip />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
