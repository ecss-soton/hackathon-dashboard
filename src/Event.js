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

  componentDidMount() {
    this.socket = this.context
    this.socket.on('event', (msg) => this.setState({
      event: msg
    }));
    this.socket.on('disconnect', () => this.setState({
      event: Config.event
    }));
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

Event.contextType = SocketContext

export default Event;
