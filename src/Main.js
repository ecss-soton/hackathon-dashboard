import React, { Component, Fragment } from 'react';

import Landing from './Landing';
import DrawerContent from './DrawerContent';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

import campusHackLogo from './campushack19transparent.png'

const styles = (theme) => ({
  background: {
    display: 'flex',
    background: theme.palette.background.default,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  child: {
    width: '50%',
    display: 'inline-block'
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  appBarButton: {
    color: theme.palette.primary.contrastText,
    marginLeft: 'auto'
  },
  parent: {
    marginTop: '-2.5%',
    maxHeight: '90%',
    maxWidth: '90%',
    overflowY: 'auto',
    padding: '10px'

    
  },
  logo: {
    height: theme.mixins.toolbar.minHeight,
    position: 'absolute',
    margin: 'auto',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    filter: theme.palette.type === 'dark' && 'brightness(0.15)'  
  },
});

class Main extends Component {
  state = {
    drawerOpen: false,
    content: Landing,
  };

  render() {
    const { menuButton, background, parent, logo } = this.props.classes;

    return (
      <Fragment>
        <AppBar position='static'>
          <Toolbar>
            <IconButton className={menuButton} color='inherit' aria-label='Menu' onClick={this.toggleDrawer.bind(this, true)}>
              <MenuIcon />
            </IconButton>
            <img
              src={campusHackLogo}
              className={logo}
              alt='campushack19 logo'
            />
          </Toolbar>
        </AppBar>
        <SwipeableDrawer
          open={this.state.drawerOpen}
          onClose={this.toggleDrawer.bind(this, false)}
          onOpen={this.toggleDrawer.bind(this, true)}
        >
          <DrawerContent setContent={this.setContent.bind(this)} toggleTheme={this.props.toggleTheme} />
        </SwipeableDrawer>
        <div className={background}>
          <div className={parent}>
            <this.state.content />
          </div>
        </div>
      </Fragment>
    );
  }

  toggleDrawer(drawerOpen) {
    this.setState({ drawerOpen });
  }

  setContent(content) {
    this.setState({ content, drawerOpen: false });
  }
}

export default withStyles(styles)(Main);
