import React from 'react';
import { List, Typography, withStyles } from '@material-ui/core';

import campusHackLogo from './campushack19transparent.png';

const styles = (theme) => ({
  bigLogo: {
    filter: theme.palette.type === 'light' && 'brightness(0.15)',
    maxWidth: 400,
    width: '100%',
    margin: 10
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center'
  },
  withMargins: {
    margin: 10
  }
});

function Landing(props) {
  const { main, bigLogo, withMargins } = props.classes;
  return (
    <div className={main}>
      <Typography className={withMargins} variant='h3'>Welcome to the official CampusHack19 website!</Typography>
      <div className={withMargins}>
        <Typography>This year we are interested in Technology for Social Good, potentially utilising one of the following suggested technologies:</Typography>
        <List>
          <Typography>Social Media</Typography>
          <Typography>AngularJS</Typography>
          <Typography>IoT and embedded</Typography>
          <Typography>Embedded Machine Learning</Typography>
        </List>
        <Typography>Additionally, usage of social media for disaster relief is another great area of interest.</Typography>
        <Typography>Remember the theme is advisory only, so you are welcome to do whatever you want if you already have an idea.</Typography>
      </div>
      <img
      src={campusHackLogo}
      alt='Campus Hack Logo'
      className={bigLogo}
      />
    </div>
  );
}

export default withStyles(styles)(Landing);
