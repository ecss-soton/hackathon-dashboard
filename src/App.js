import React, { Component } from 'react';
import './App.css';

import { Config } from './Config';

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Left from './Left';
import Right from './Right';
import Admin from './Admin';
import Main from './Main';

import * as io from 'socket.io-client';
import SocketContext from './SocketContext';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';

const socket = io(Config.backend);

const lightTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#bd2031'
    },
    secondary: {
      main: '#24a4db'
    }
  }
});

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#24a4db'
    },
    secondary: {
      main: '#bd2031'
    }
  }
});

class App extends Component {
  state = {
    currentTheme: null
  }
  render() {
    if (this.state.currentTheme === null) {
      this.retreiveTheme();
    }
    return (
      <SocketContext.Provider value={socket}>
        <BrowserRouter>
          <MuiThemeProvider theme={this.state.currentTheme || lightTheme}>
            <Switch>
              <Route path='/left' component={ Left } />
              <Route path='/right' component={ Right } />
              <Route path='/admin' component={ Admin } />
              <Route path='/' exact render={() => <Main toggleTheme={this.toggleTheme.bind(this)} />} />
            </Switch>
          </MuiThemeProvider>
        </BrowserRouter>
      </SocketContext.Provider>
    );
  }

  async retreiveTheme() {
    switch(localStorage.currentTheme) {
      case 'dark':
        this.setState({ currentTheme: darkTheme })
        break;
      default:
        localStorage.currentTheme = 'light';
      // eslint-disable-next-line no-fallthrough
      case 'light':
        this.setState({ currentTheme: lightTheme });
        break;
    }
  }

  async toggleTheme() {
    // eslint-disable-next-line default-case
    switch(localStorage.currentTheme) {
      case 'light':
        this.setState({ currentTheme: darkTheme })
        localStorage.currentTheme = 'dark';
        console.log(darkTheme);
        break;
      case 'dark':
        this.setState({ currentTheme: lightTheme })
        localStorage.currentTheme = 'light';
        break;
    }
  }
}

export default App;
