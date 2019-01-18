import React, { Component } from 'react';

import { Config } from './Config';

import Event from './Event';

import Content from './Content';

class Left extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeout: false
    };
    this.current_page = `/${this.props.location.pathname.split('/')[2]}`;
  }

  change_page() {
    var next_page = null;
    let i = Config.pages.indexOf(this.current_page);
    if (i < Config.pages.length - 1) {
      next_page = Config.pages[i + 1];
    } else {
      next_page = Config.pages[0];
    }
    this.current_page = next_page;
    next_page = `/left${next_page}`;
    this.props.history.push(next_page);
  }

  componentDidMount() {
    this.interval_id = setInterval(() => this.change_page(), 1000);
  }

  render() {
    return (
      <div className="main">
        <header className="topbar bg-ch">
          <a className="navbar-brand" href="https://society.ecs.soton.ac.uk/campus-hack19/">
            <img src="/favicon.ico" height="50" alt="" />
          </a>
          <Event />
        </header>
        <Content screen="left"/>
        <footer>
          <ul className="m-3 list-unstyled d-inline-flex">
            <li className="mr-5">
              <a href="https://society.ecs.soton.ac.uk/campus-hack19/">society.ecs.soton.ac.uk/campus-hack19/</a>
            </li>
            <li>
              Slack: <a href="https://campus-hack19.slack.com">campus-hack19.slack.com</a>
            </li>
          </ul>
        </footer>
      </div>
    );
  }
}

export default Left;
