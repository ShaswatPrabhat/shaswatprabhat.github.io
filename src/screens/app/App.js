import React from 'react';
import './App.css';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Home } from '../home/Home';
import { HbdPnoki } from '../hbdpnoki/HbdPnoki';
import { LINKS } from '../../utils/constants';

const App = () => (
  <div className="App" >
    <HashRouter basename={LINKS.HOME_PATH}>
      <Switch>
        <Route exact path={LINKS.HOME_PATH} component={Home} />
        <Route exact path={LINKS.POEMS_PATH} component={Home} />
        <Route exact path={LINKS.MOVIES_PATH} component={Home} />
        <Route exact path={LINKS.HBD_PNOKI} component={HbdPnoki} />
      </Switch>
    </HashRouter>
  </div>
);

export default App;
