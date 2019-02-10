import React, { Component, Fragment } from 'react';

import Left from './Left';
import Right from './Right';

export default class Combined extends Component {
  render() {
    return (
      <Fragment>
        <div style={{ position: 'absolute', width: '50%', display: 'inline-block' }}>
          <Left />
        </div>
        <div style={{ position: 'absolute', left: '50%', width: '50%', display: 'inline-block' }}>
          <Right />
        </div>
      </Fragment>
    );
  }
}
