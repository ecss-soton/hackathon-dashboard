import React, { Component, Fragment } from 'react';

import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import { Config } from './Config';

const styles = {
  card: {
    maxWidth: 355,
    minHeight: 490,
    margin: 20,
    textAlign: 'center'
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    minHeight: 'calc(100% - 100px)'
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'contain',
    borderRadius: 4,
    padding: 10,
    width: 'calc(100% - 20px)'
  },
  sponsorContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'stretch'
  },
  sectionTitle: {
    textAlign: 'center'
  },
  cardActions: {
    margin: '30px 10px',
    display: 'flex',
    justifyContent: 'space-evenly'
  }
};

class Sponsors extends Component {
  render() {
    let sponsorIndex = 0;
    return (
      <Fragment>
        <Typography variant='h3' className={this.props.classes.sectionTitle}>Premium Sponsors:</Typography>
        <div className={this.props.classes.sponsorContainer}>
          { Config.sponsors.premium.map(sponsor => <this.sponsorCard classes={this.props.classes} company={sponsor} key={`sponsorIndex${sponsorIndex++}`}/>) }
        </div>
        <Typography variant='h3' className={this.props.classes.sectionTitle}>Standard Sponsors:</Typography>
        <div className={this.props.classes.sponsorContainer}>
          { Config.sponsors.standard.map(sponsor => <this.sponsorCard classes={this.props.classes} company={sponsor} key={`sponsorIndex${sponsorIndex++}`}/>) }
        </div>
      </Fragment>
    );
  }

  sponsorCard({ classes, company }) {
    return (
      <Card className={classes.card}>
        <CardMedia
          component='img'
          alt={`${company.name} logo`}
          className={classes.media}
          height='100'
          image={company.links.logo}
          title={`${company.name} logo`}
          style={{ backgroundColor: 'white' }}
        />
        <div className={classes.content}>
          <CardContent style={{ margin: '10px' }}>
            <Typography gutterBottom variant='h5' component='h2'>{company.name}</Typography>
            <Typography component='p'>{company.description}</Typography>
          </CardContent>
          <CardActions className={classes.cardActions}>
            <Button size='small' color='secondary' href={company.links.opportunities}>
              Careers
            </Button>
            <Button size='small' color='secondary' href={company.links.website}>
              Website
            </Button>
            <Button size='small' color='secondary' href={company.links.ecss}>
              ECSS Page
            </Button>
          </CardActions>
        </div>
      </Card>
    );
  }
}

export default withStyles(styles)(Sponsors);
