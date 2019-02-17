import React, { Component } from 'react';
import SocketContext from './SocketContext';
import { Config } from './Config';

class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event: 'CampusHack19'
    };
  }

  on_disconnect() {
    this.setState({
      event: Config.event
    });
  }

  componentDidMount() {
    this.socket = this.context;
    this.socket.on('event', (msg) => this.setState({
      event: msg
    }));
    this.socket.on('disconnect', () => this.on_disconnect());
    this.socket.on('error', () => this.on_disconnect());
    this.socket.on('connect_error', () => this.on_disconnect());
    this.socket.on('connect_timeout', () => this.on_disconnect());
    this.socket.emit('request event', '');
  }

  render() {
    return (
      <span className={`${ this.props.className }`}>
        {this.state.event}
      </span>
    );
  }
}

Event.contextType = SocketContext;

export default Event;
