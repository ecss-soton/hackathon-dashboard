import React, { Component } from 'react';

import { Config } from './Config';

import Clock from './Clock';
import Hack from './Hack';

import Content from './Content';

class Right extends Component {
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
    next_page = `/right${next_page}`;
    this.props.history.push(next_page);
  }

  componentDidMount() {
    this.interval_id = setInterval(() => this.change_page(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval_id);
  }

  render() {
    return (
      <div>
        <header className='topbar topbar-right bg-ch'>
          <Hack />
          <Clock className='ml-5'/>
        </header>
        <Content screen="right"/>
        <footer>
        </footer>
      </div>
    );
  }
}

export default Right;
