import React, { Component } from 'react';

import { Config } from './Config';

import Clock from './Clock';
import Hack from './Hack';

import SocketContext from './SocketContext';

class Right extends Component {
  state = {
    timeout: false,
    current_page: 1
  };

  change_page() {
    this.setState(prev => ({ current_page: ++prev.current_page % Config.pages.length }))
  }

  componentDidMount() {
    this.interval_id = setInterval(() => this.change_page(), 20000);
    this.socket = this.context;
    this.socket.on('connect', () => {
      document.getElementById('offline').style.visibility = 'hidden';
      clearInterval(this.interval_id);
    });
    this.socket.on('disconnect', () => {
      document.getElementById('offline').style.visibility = 'visible';
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
      <div className="main">
        <header className='topbar topbar-right bg-ch'>
          <Hack />
          <Clock className='ml-5'/>
        </header>
        <PageContent />
        <footer className="footer-right">
          <small id="offline" className="text-muted m-3">Offline</small>
        </footer>
      </div>
    );
  }
}

Right.contextType = SocketContext

export default Right;
