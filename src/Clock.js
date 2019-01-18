import React, { Component } from 'react';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: this.get_time()
    };
  }

  get_time() {
    return new Date().toLocaleString('en-GB', {hour: '2-digit', minute: '2-digit'});
  }

  tick() {
    this.setState({
      time: this.get_time()
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
        Current Time {this.state.time}
      </span>
    );
  }
}

export default Clock;
