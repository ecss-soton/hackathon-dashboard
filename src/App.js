import React, { Component } from 'react';
import './App.css';

import { BrowserRouter, Route } from "react-router-dom";
import Left from './Left';
import Right from './Right';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path='/left' component={ Left } />
          <Route path='/right' component={ Right } />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
