import React from 'react';

import floorPlan from './labelleddownscaled.png';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  floorPlan: {
    maxHeight: '70vh',
    maxWidth: '90vw',
    filter: theme.palette.type === 'dark' && 'invert(100%)'
  }
});

function FloorPlan(props) {
  return <img src={floorPlan} className={props.classes.floorPlan}/>;
}

export default withStyles(styles)(FloorPlan);
