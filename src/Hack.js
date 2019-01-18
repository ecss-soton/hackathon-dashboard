import React, { Component } from 'react';

import { Config } from './Config'

class Hack extends Component {
  constructor(props) {
    super(props);
    this.state = {
      started: new Date() > Config.hack_start_time,
      time_left: this.get_time_left()
    };
  }

  get_time_left() {
    var time_left = new Date(1970, 0, 1); // Epoch
    time_left.setSeconds(Math.floor((Config.hack_end_time - new Date()) / 1000) + 60);
    return time_left.toLocaleString('en-GB', {hour: '2-digit', minute: '2-digit'});
  }

  tick() {
    this.setState({
      started: new Date() > Config.hack_start_time,
      time_left: this.get_time_left()
    });
  }

  componentDidMount() {
    this.intervalID = setInterval(() => this.tick(),2000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  render() {
    return !this.state.started ? null : (
      <span className={`${ this.props.className }`}>
        Hacking Ends in {this.state.time_left}
      </span>
    );
  }
}

export default Hack;
