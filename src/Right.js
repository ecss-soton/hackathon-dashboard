import React, { Component, Fragment } from 'react';

import { Config } from './Config';

import SocketContext from './SocketContext';
import { Typography } from '@material-ui/core';

class Right extends Component {
  state = {
    timeout: false,
    current_page: 1,
    online: false
  };

  change_page() {
    this.setState(prev => ({ current_page: ++prev.current_page % Config.pages.length }));
  }

  componentDidMount() {
    this.interval_id = setInterval(() => this.change_page(), 20000);
    this.socket = this.context;
    this.socket.on('connect', () => {
      this.setState({ online: true });
      clearInterval(this.interval_id);
    });
    this.socket.on('disconnect', () => {
      this.setState({ online: false });
      this.interval_id = setInterval(() => this.change_page(), 20000);
    });
    this.socket.on('change page', () => this.change_page());
    this.socket.on('right page', (msg) => this.change_page(msg));

  }

  componentWillUnmount() {
    clearInterval(this.interval_id);
  }

  render() {
    const PageContent = Config.pages[this.state.current_page];
    return (
      <Fragment>
        <PageContent />
        <Typography>{this.state.online ? 'Online' : 'Offline' }</Typography>
      </Fragment>
    );
  }
}

Right.contextType = SocketContext;

export default Right;
