import React, { Component } from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { Config } from './Config';

function prettyPrintTime(time) {
  return time + ':00';
}

class Schedule extends Component {
  render() {
    const times = [12,1,2,3,4,5,6,7,8,9,10,11];

    return (
      <Paper>
        <Table padding='dense'>
          <TableHead>
            <TableRow key='headerrow'>
              <TableCell key='tableTitle'>Schedule</TableCell>
              { Config.schedule.map(day => <TableCell key={day.name}>{day.name}</TableCell>) }
            </TableRow>
          </TableHead>
          <TableBody>
            { times.map(time => (
              <TableRow key={`row${time}`}>
                <TableCell key={`time${time}`} component='th' scope='row'>{prettyPrintTime(time)}</TableCell>
                { Config.schedule.map(day => <TableCell key={day.name + time}>{day.timings[time] || ''}</TableCell>)}
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Typography style={{ textAlign: 'center' }}>Any dates or times shown are subject to change.</Typography>
      </Paper>
    );
  }
}

export default Schedule;
