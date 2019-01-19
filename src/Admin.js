import React, { Component } from 'react';
import SocketContext from './SocketContext';
import { Config } from './Config';

class Admin extends Component {


  set_event(ev) {
    ev.preventDefault();
    let event_field = document.getElementById('event');
    var form_data = `event=${event_field.value}`;
    fetch(`${Config.backend}/admin/event`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      body: form_data
    });
    event_field.value = '';
  }

  render() {
    return (
      <div className="container">
        <form>
          <div className="form-group row">
            <label htmlFor="event" className="col-sm-2 col-form-label">Event</label>
            <div className="col-sm-7">
              <input className="form-control" id="event" name="event" defaultValue="CampusHack19" />
            </div>
            <div className="col-sm-2">
              <button className="btn btn-primary" onClick={this.set_event}>Set</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

Admin.contextType = SocketContext;

export default Admin;
