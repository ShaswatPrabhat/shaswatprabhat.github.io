import React from 'react';
import './App.css';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { LINKS } from './utils/constants';

const App = () => (
  <div className="App">
    <HashRouter basename={LINKS.HOME_PATH}>
      <Switch>
        <Route exact path={LINKS.HOME_PATH} component={Home} />
        <Route exact path={LINKS.POEMS_PATH} component={Home} />
      </Switch>
    </HashRouter>
  </div>
);

export default App;
