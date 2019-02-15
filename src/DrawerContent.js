import React from 'react';

import { withStyles } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import ToggleOn from '@material-ui/icons/ToggleOn';
import ToggleOff from '@material-ui/icons/ToggleOff';

import { Config } from './Config' 

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
        {Config.pagesWithIcons.map(({ content, Icon, name }) => (
          <ListItem button onClick={() => setContent(content)} key={`menuIndex${menuIndex++}`}>
            <ListItemIcon><Icon /></ListItemIcon>
            <ListItemText primary={name} />
          </ListItem>
        ))}
        <ListItem button onClick={toggleTheme} key={`menuIndex${menuIndex}`}>
          <ListItemIcon>{localStorage.currentTheme === 'dark' ? <ToggleOn /> : <ToggleOff />}</ListItemIcon>
          <ListItemText primary="Dark Theme" />
        </ListItem>
      </List>
    </div>
  );
}

export default withStyles(styles)(DrawerContent);
