import React, { Component } from 'react';
import './App.css';

import { Config } from './Config';

import { HashRouter, Route, Switch } from "react-router-dom";
import Left from './Left';
import Right from './Right';
import Admin from './Admin';
import Combined from './Combined';

import * as io from 'socket.io-client';
import SocketContext from './SocketContext';

const socket = io(Config.backend);

class App extends Component {
  render() {
    return (
      <SocketContext.Provider value={socket}>
        <HashRouter>
          <Switch>
            <Route path='/left' component={ Left } />
            <Route path='/right' component={ Right } />
            <Route path='/admin' component={ Admin } />
            <Route path='/' exact component={ Combined } />
          </Switch>
        </HashRouter>
      </SocketContext.Provider>
    );
  }
}

export default App;
