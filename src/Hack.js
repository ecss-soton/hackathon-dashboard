import React, { Component } from 'react';

import { Config } from './Config'

class Hack extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time_left: this.get_time_left()
    };
  }

  get_time_left() {
    let second_left = Math.floor((Config.hack_end_time - new Date()) / 1000);
    let hrs = Math.floor(second_left / 3600);
    let mins = Math.floor(second_left % 3600 / 60);
    return `${hrs}:${mins}`
  }

  tick() {
    this.setState({
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
    return (
      <span className={`${ this.props.className }`}>
        Hack Ends in {this.state.time_left}
      </span>
    );
  }
}

export default Hack;
