import React, { Component } from 'react';

import { Config } from './Config';

import Clock from './Clock';
import Hack from './Hack';

import Content from './Content';
import SocketContext from './SocketContext';

class Right extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeout: false
    };
    this.current_page = `/${this.props.location.pathname.split('/')[2]}`;
  }

  change_page(next_page = null) {
    if (next_page === null) {
      let i = Config.pages.indexOf(this.current_page);
      if (i < Config.pages.length - 1) {
        next_page = Config.pages[i + 1];
      } else {
        next_page = Config.pages[0];
      }
    }
    this.current_page = next_page;
    next_page = `/right${next_page}`;
    this.props.history.push(next_page);
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
    return (
      <div className="main">
        <header className='topbar topbar-right bg-ch'>
          <Hack />
          <Clock className='ml-5'/>
        </header>
        <Content screen="right"/>
        <footer className="footer-right">
          <small id="offline" className="text-muted m-3">Offline</small>
        </footer>
      </div>
    );
  }
}

Right.contextType = SocketContext

export default Right;
