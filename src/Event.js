import React, { Component } from 'react';
import SocketContext from './SocketContext';

class Event extends Component {
  componentDidMount() {
    this.socket = this.context
    this.socket.emit('event', '');
    this.socket.on('event', (msg) => {
      this.event = msg;
    })
  }

  render() {
    return (
      <span className={`${ this.props.className }`}>
        {this.event}
      </span>
    );
  }
}

Event.contextType = SocketContext

export default Event;
