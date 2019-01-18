import React, { Component } from 'react';

import Event from './Event';

class Left extends Component {
  render() {
    return (
      <div className='topbar bg-ch'>
        <a className="navbar-brand" href="https://society.ecs.soton.ac.uk/campushack19/">
          <img src="/favicon.ico" height="50" alt="" />
        </a>
        <Event />
      </div>
    );
  }
}

export default Left;
