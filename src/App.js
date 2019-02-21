import React, { Component } from 'react';
import './App.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Right from './Right';
import Main from './Main';
import Display from './Display';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import Landing from './Landing';
import Sponsors from './Sponsors';
import Schedule from './Schedule';
import Github from './Github';
import FloorPlan from './Floorplan';

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
    currentTheme: this.retrieveTheme()
  }
  
  render() {
    return (
      <BrowserRouter>
        <MuiThemeProvider theme={this.state.currentTheme || lightTheme}>
          <Switch>
            <Route path='/left' render={this.mainContent(Github)} />
            <Route path='/right' render={() => <Display component={Right } />} />
            <Route path='/sponsors'  render={this.mainContent(Sponsors)} />
            <Route path='/schedule'  render={this.mainContent(Schedule)} />
            <Route path='/github' render={this.mainContent(Github)} />
            <Route path='/floorplan' render={this.mainContent(FloorPlan)} />
            <Route path='/' exact render={this.mainContent(Landing)} />
          </Switch>
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }

  mainContent(content) {
    return () => <Main toggleTheme={this.toggleTheme.bind(this)} content={content}/>;
  }

  retrieveTheme() {
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
      this.setState({ currentTheme: darkTheme });
      localStorage.currentTheme = 'dark';
      break;
    case 'dark':
      this.setState({ currentTheme: lightTheme });
      localStorage.currentTheme = 'light';
      break;
    }
  }
}

export default App;
