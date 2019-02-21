import React, { Component } from 'react';

import SocketContext from './SocketContext';

class Hack extends Component {
  constructor(props) {
    super(props);
    this.state = {
      started: false,
      time_left: null
    };
  }

  get_time_left() {
    var time_left = new Date(1970, 0, 1); // Epoch
    time_left.setSeconds(Math.floor((this.end_time - new Date()) / 1000) + 60);
    return time_left.toLocaleString('en-GB', {hour: '2-digit', minute: '2-digit'});
  }

  tick() {
    this.setState({
      started: new Date() > this.start_time,
      time_left: this.get_time_left()
    });
  }

  on_disconnect() {
    this.setState({
      started: false
    });
    if (this.intervalID !== null) {
      clearInterval(this.intervalID);
    }
  }

  componentDidMount() {
    this.socket = this.context;
    this.socket.on('hacking time', (msg) => {
      this.start_time = new Date(msg.start);
      this.end_time = new Date(msg.end);
      if (this.intervalID !== null) {
        clearInterval(this.intervalID);
      }
      this.intervalID = setInterval(() => this.tick(), 2000);
    });
    this.socket.on('disconnect', () => this.on_disconnect());
    this.socket.on('error', () => this.on_disconnect());
    this.socket.on('connect_error', () => this.on_disconnect());
    this.socket.on('connect_timeout', () => this.on_disconnect());
    this.socket.emit('request hacking time', '');
  }

  componentWillUnmount() {
    if (this.intervalID !== null) {
      clearInterval(this.intervalID);
    }
  }

  render() {
    return !this.state.started ? null : (
      <span className={`${ this.props.className }`}>
        Hacking Ends in {this.state.time_left}
      </span>
    );
  }
}

Hack.contextType = SocketContext;

export default Hack;
