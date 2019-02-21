import React, { Component, Fragment } from 'react';

import { Redirect, withRouter} from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

import DrawerContent from './DrawerContent';
import campusHackLogo from './campushack19transparent.png';

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
    filter: theme.palette.type === 'dark' && 'invert(100%)'  
  },
});

class Main extends Component {
  state = {
    drawerOpen: false,
    redirect: null
  };

  render() {
    const { menuButton, background, parent, logo } = this.props.classes;

    return (
      <Fragment>
        {this.state.redirect && this.state.redirect !== this.props.location.pathname && <Redirect push from={`^[\\${this.state.redirect}]`} to={this.state.redirect} />}
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
            <this.props.content />
          </div>
        </div>
      </Fragment>
    );
  }

  toggleDrawer(drawerOpen) {
    this.setState({ drawerOpen });
  }

  setContent(newPage) {
    this.setState({ redirect: newPage, drawerOpen: false });
  }
}

export default withRouter(withStyles(styles)(Main));
