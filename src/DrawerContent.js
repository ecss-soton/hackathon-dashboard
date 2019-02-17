import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import ToggleOn from '@material-ui/icons/ToggleOn';
import ToggleOff from '@material-ui/icons/ToggleOff';
import Home from '@material-ui/icons/Home';

import { Config } from './Config';

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  }
};

function DrawerContent({ setContent, toggleTheme, classes}) {
  let menuIndex = 0;
  return (
    <div className={classes.fullList}>
      <List>
        <ListItem button onClick={() => setContent('/')} key='goHome'>
          <ListItemIcon><Home /></ListItemIcon>
          <ListItemText primary='Home' />
        </ListItem>
        {Config.pagesWithIcons.map(({ content, Icon, name }) => (
          <ListItem button onClick={() => setContent(content)} key={`menuIndex${menuIndex++}`}>
            <ListItemIcon><Icon /></ListItemIcon>
            <ListItemText primary={name} />
          </ListItem>
        ))}
        <Divider />
        <ListItem button onClick={toggleTheme} key={`menuIndex${menuIndex}`}>
          <ListItemIcon>{localStorage.currentTheme === 'dark' ? <ToggleOn /> : <ToggleOff />}</ListItemIcon>
          <ListItemText primary='Dark Theme' />
        </ListItem>
      </List>
    </div>
  );
}

export default withStyles(styles)(DrawerContent);
