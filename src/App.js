import React, { Component } from 'react';
import './App.css';

import { HashRouter, Route, Switch } from "react-router-dom";
import Left from './Left';
import Right from './Right';

import * as io from 'socket.io-client';
import SocketContext from './SocketContext';

const socket = io('//localhost:3001')

class App extends Component {
  componentDidMount() {
    socket.emit('chat message', 'hello');
    socket.on('chat message', function(msg) {
      console.log('message received: ' + msg);
    })
  }

  render() {
    return (
      <SocketContext.Provider value={socket}>
        <HashRouter>
          <Switch>
            <Route path='/left' component={ Left } />
            <Route path='/right' component={ Right } />
          </Switch>
        </HashRouter>
      </SocketContext.Provider>
    );
  }
}

export default App;
