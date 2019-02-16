import React, { Component } from 'react';
import './App.css';

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Left from './Left';
import Right from './Right';
import Main from './Main';
import Display from './Display';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import Landing from './Landing';
import Sponsors from './Sponsors';
import Schedule from './Schedule';

const lightTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#bd2031'
    },
    secondary: {
      main: '#24a4db'
    }
  },
  typography: {
    useNextVariants: true,
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
  },
  typography: {
    useNextVariants: true,
  }
});

class App extends Component {
  state = {
    currentTheme: this.retreiveTheme()
  }
  render() {
    return (
      <BrowserRouter>
        <MuiThemeProvider theme={this.state.currentTheme || lightTheme}>
          <Switch>
            <Route path='/left' render={() => <Display component={Left } />} />
            <Route path='/right' render={() => <Display component={Right } />} />
            <Route path='/sponsors'  render={() => <Main toggleTheme={this.toggleTheme.bind(this)} content={Sponsors}/>} />
            <Route path='/schedule'  render={() => <Main toggleTheme={this.toggleTheme.bind(this)} content={Schedule}/>} />
            <Route path='/' exact render={() => <Main toggleTheme={this.toggleTheme.bind(this)} content={Landing}/>} />
          </Switch>
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }

  retreiveTheme() {
    switch(localStorage.currentTheme) {
      case 'dark':
        return darkTheme;
      default:
        localStorage.currentTheme = 'light';
      // eslint-disable-next-line no-fallthrough
      case 'light':
        return lightTheme;
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
