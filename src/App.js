import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { LINKS } from './utils/constants';

const App = () => (
  <Router>
    <Switch>
      <Route path={LINKS.HOME_PATH}>
        <Home />
      </Route>
      <Route path={LINKS.POEMS_PATH}>
        <Home />
      </Route>
    </Switch>
  </Router>
);

export default App;
