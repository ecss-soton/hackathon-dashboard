import React, { Component } from 'react';

import * as io from 'socket.io-client';
import SocketContext from './SocketContext';

import { Config } from './Config';

export default class Display extends Component {
  state = {
    socket: io(Config.backend)
  }
  render() {
    return (
      <SocketContext.Provider value={this.state.socket}>
        <this.props.component />
      </SocketContext.Provider>
    );
  }
}
