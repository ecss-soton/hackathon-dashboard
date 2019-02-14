import React, { Component } from 'react';

import { withStyles } from '@material-ui/core';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { Config } from './Config' 

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

class DrawerContent extends Component {
  render() {
    const { fullList } = this.props.classes;
    let menuIndex = 0;
    return (
      <div className={fullList}>
        <ListItem>
          <ListItemText primary='Menu' style={{ textAlign: 'spread' }} />
        </ListItem>
        <Divider />
        <List>
          {Config.pagesWithIcons.map(({ content, Icon, name }) => (
            <ListItem button onClick={() => this.props.setContent(content)} key={`menuIndex${menuIndex++}`}>
              <ListItemIcon><Icon /></ListItemIcon>
              <ListItemText primary={name} />
            </ListItem>
          ))}
        </List>
      </div>
    );
  }
}

export default withStyles(styles)(DrawerContent);
