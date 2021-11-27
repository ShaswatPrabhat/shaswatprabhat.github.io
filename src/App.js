import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';

const App = () => (
  <Router>
    <Switch>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/poems">
        <Home />
      </Route>
    </Switch>
  </Router>
);

export default App;
