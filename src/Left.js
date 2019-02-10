import React, { Component } from 'react';

import { Config } from './Config';

import Event from './Event';

import SocketContext from './SocketContext';

class Left extends Component {
  state = {
    timeout: false,
    current_page: 0
  };

  change_page() {
    this.setState(prev => ({ current_page: ++prev.current_page % Config.pages.length }))
  }

  on_disconnect() {
    document.getElementById('offline').style.visibility = 'visible';
    if (this.interval_id === null) {
      this.interval_id = setInterval(() => this.change_page(), 20000);
      console.log('timer starts');
    }
    console.log('disconnected');
  }

  componentDidMount() {
    this.interval_id = setInterval(() => this.change_page(), 20000);
    console.log('timer starts');
    this.socket = this.context;
    this.socket.on('connect', () => {
      document.getElementById('offline').style.visibility = 'hidden';
      clearInterval(this.interval_id);
      this.interval_id = null;
      console.log('timer ends');
    });
    this.socket.on('disconnect', () => this.on_disconnect());
    this.socket.on('error', () => this.on_disconnect());
    this.socket.on('connect_error', () => this.on_disconnect());
    this.socket.on('connect_timeout', () => this.on_disconnect());
    this.socket.on('change page', () => this.change_page());
    this.socket.on('left page', (msg) => this.change_page(msg));
  }

  render() {
    const PageContent = Config.pages[this.state.current_page];
    return (
      <div className="main">
        <header className="topbar bg-ch">
          <a className="navbar-brand" href="https://society.ecs.soton.ac.uk/campus-hack19/">
            <img src="/favicon.ico" height="50" alt="" />
          </a>
          <Event />
        </header>
        <PageContent />
        <footer>
          <ul className="m-3 list-unstyled d-inline-flex">
            <li className="mr-5">
              <a href="https://society.ecs.soton.ac.uk/campus-hack19/">society.ecs.soton.ac.uk/campus-hack19/</a>
            </li>
            <li>
              Slack: <a href="https://campushack19.slack.com">campushack19.slack.com</a>
            </li>
          </ul>
          <small id="offline" className="text-muted m-3">Offline</small>
        </footer>
      </div>
    );
  }
}

Left.contextType = SocketContext;

export default Left;
