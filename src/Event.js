import React, { Component } from 'react';

class Event extends Component {
  render() {
    return (
      <span className={`${ this.props.className }`}>
        Opening Ceremony
      </span>
    );
  }
}

export default Event;
