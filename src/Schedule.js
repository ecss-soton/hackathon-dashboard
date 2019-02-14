import React, { Component } from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { Config } from './Config';

function prettyPrintTime(time) {
  return time + ':00';
}

class Schedule extends Component {
  render() {
    const times = [...Array(24).keys()];

    return (
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Schedule</TableCell>
              { Config.schedule.map(day => <TableCell>{day.name}</TableCell>) }
            </TableRow>
          </TableHead>
          <TableBody>
            { times.map(time => (
              <TableRow>
                <TableCell component="th" scope="row">{prettyPrintTime(time)}</TableCell>
                { Config.schedule.map(day => <TableCell>{day.timings[time] || ''}</TableCell>)}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default Schedule;
