import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Paper from '@material-ui/core/Paper';

import BulletPoint from '@material-ui/icons/FiberManualRecord';
import campusHackLogo from './campushack19transparent.png';

const styles = (theme) => ({
  bigLogo: {
    filter: theme.palette.type === 'light' && 'brightness(0.15)',
    maxWidth: 400,
    width: '100%',
    margin: 20
  },
  withMargins: {
    margin: 10,
    textAlign: 'center'
  },
  paper: {
    maxWidth: 1120,
    padding: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
});

function Landing(props) {
  const { bigLogo, withMargins, paper } = props.classes;
  return (
    <Paper className={paper}>
      <img
        src={campusHackLogo}
        alt='Campus Hack Logo'
        className={bigLogo}
      />
      <Typography className={withMargins} variant='h3'>Welcome to the official CampusHack19 website!</Typography>
      <Typography variant='h6'>This year we are interested in Technology for Social Good, potentially utilising one of the following suggested technologies:</Typography>
      <List>
        <ListItem>
          <ListItemIcon><BulletPoint/></ListItemIcon>
          <ListItemText>Social Media</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon><BulletPoint/></ListItemIcon>
          <ListItemText>AngularJS</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon><BulletPoint/></ListItemIcon>
          <ListItemText>IoT and embedded</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon><BulletPoint/></ListItemIcon>
          <ListItemText>Embedded Machine Learning</ListItemText>
        </ListItem>
      </List>
      <Typography>Some suggestions for social problems that you could solve with technology can be found at <Link to='https://www.globalgoals.org/'>https://www.globalgoals.org/</Link>. Additionally, usage of social media for disaster relief is another great area of interest.</Typography>
      <Typography variant='h6' style={{ marginTop: 20, marginBottom: 20 }}><b>Remember the theme is advisory only, so you are welcome to do whatever you want if you already have an idea.</b></Typography>
      <Typography>Those attending the hackathon please remember that sign in starts from 11am on the Saturday and will close at 12 unless you contact the page to inform us you will be late. Also, you must join the slack <Link to='https://join.slack.com/t/campushack19/signup'>https://join.slack.com/t/campushack19/signup</Link> using your university email - those who have already assembled teams feel free to create channels.</Typography>
      <Typography>Remember teams will be finalised on the day so those who don't have a team yet do not panic! The Slack is the perfect opportunity to find others and form a team. Max team size is recommended to be 5 (and there will be only 5 prizes available).</Typography>
    </Paper>
  );
}

export default withStyles(styles)(Landing);
