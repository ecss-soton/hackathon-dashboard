import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';

import Shedule from './Shedule';
import Map from './Map';
import Sponsors from './Sponsors';

class Content extends Component {
  render() {
    let router_basename = `/${this.props.screen}`;
    return (
      <HashRouter basename={router_basename}>
        <div className="content">
          <Route path="/shedule" component={Shedule} />
          <Route path="/map" component={Map} />
          <Route path="/sponsors" component={Sponsors} />
        </div>
      </HashRouter>
    );
  }
}

export default Content;
