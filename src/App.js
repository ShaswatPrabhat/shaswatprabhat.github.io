import React from 'react';
import './App.css';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { LINKS } from './utils/constants';

const App = () => (
  <HashRouter>
    <Switch>
      <Route exact path={LINKS.HOME_PATH}>
        <Home />
      </Route>
      <Route exact path={LINKS.POEMS_PATH}>
        <Home />
      </Route>
    </Switch>
  </HashRouter>
);

export default App;
