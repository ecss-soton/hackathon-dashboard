import React, { Component } from 'react';

import Clock from './Clock';
import Hack from './Hack';

class Right extends Component {
  render() {
    return (
      <div className='topbar topbar-right bg-ch'>
        <Hack />
        <Clock className='ml-5'/>
      </div>
    );
  }
}

export default Right;
