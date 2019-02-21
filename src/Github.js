import React, { Component } from 'react';

import request from 'request-promise-native';
import VisibilitySensor from 'react-visibility-sensor';

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Button from '@material-ui/core/Button';


const styles = {
  smallMargin: {
    margin: 5
  },
  github: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  }
};

class Github extends Component {
  state = {
    repoDetails: [],
    commits: {},
    errorMessage: '',

    open: false,
    user: '',
    team: '',
    repo: ''
  }

  managePolling(isVisible) {
    if (isVisible) {
      this.timer = setInterval(() => this.pollData(), 10000);
    } else {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  render() {
    const { smallMargin, github } = this.props.classes;
    const sortedCommits = Object.keys(this.state.commits).map(key => this.state.commits[key]).sort((a, b) => b.date - a.date);
    return (
      <VisibilitySensor onChange={this.managePolling.bind(this)}>
        <div className={github}>
          <Button style={{ margin: '0 auto' }} onClick={() => this.setState({ open: true })}>Add Repo</Button>
          <Dialog
            open={this.state.open}
            onClose={() => this.setState({ open: false })}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
            <DialogContent>
              <DialogContentText>
                To add a repo to the watchlist, enter the details here
              </DialogContentText>
              <TextField
                onKeyPress={this.mightAddRepo.bind(this)}
                placeholder='user'
                onChange={this.updateField.bind(this, 'user')}
                className={smallMargin}
              />
              <TextField
                onKeyPress={this.mightAddRepo.bind(this)}
                placeholder='repo'
                onChange={this.updateField.bind(this, 'repo')}
                className={smallMargin}
              />
              <TextField
                onKeyPress={this.mightAddRepo.bind(this)}
                placeholder='team'
                onChange={this.updateField.bind(this, 'team')}
                className={smallMargin}
              />
            </DialogContent>
          </Dialog>
          {this.state.errorMessage && <Typography color='secondary' className={smallMargin}>{this.state.errorMessage}</Typography>}
          {Object.keys(this.state.commits).length > 0 && this.showCommits(sortedCommits)}
        </div>
      </VisibilitySensor>
    );
  }  
  
  showCommits(sortedCommits) {
    return (
      <div>
        <Paper>
          <Typography variant='h6' style={{textAlign: 'center', padding: 15 }}>Commits</Typography>
          <Table padding='dense'>
            <TableHead>
              <TableRow key='headerrow'>
                <TableCell key='team'><Typography>Team</Typography></TableCell>
                <TableCell key='datetime'><Typography>DateTime</Typography></TableCell>
                <TableCell key='author'><Typography>Author</Typography></TableCell>
                <TableCell key='message'><Typography>Message</Typography></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                sortedCommits.map(commit => <TableRow key={`row${commit.sha}`}>
                  <TableCell key={`team${commit.sha}`}>{commit.team}</TableCell>
                  <TableCell key={`date${commit.sha}`} component='th' scope='row'>{`${commit.date.toLocaleDateString()} ${commit.date.toLocaleTimeString()}`}</TableCell>
                  <TableCell key={`author${commit.sha}`}>{commit.author}</TableCell>
                  <TableCell key={`message${commit.sha}`}>{commit.message}</TableCell>
                </TableRow>)
              }
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }

  updateField(field, { target: { value }}) {
    this.setState({ [field]: value });
  }

  mightAddRepo({ key }) {
    if(key === 'Enter' && this.state.user && this.state.repo && this.state.team) {
      this.addRepo(this.state);
    }
  }

  async addRepo({ user, repo, team }) {
    try {
      await request(`https://api.github.com/repos/${user}/${repo}/commits`);
      this.setState(prev => ({ errorMessage: '', repoDetails: [...prev.repoDetails, { user, repo, team }]}), this.updateCommits.bind(this));
    } catch (exception) {
      this.setState({ errorMessage: JSON.parse(exception.error).message });
    }
  }

  async updateCommits() {
    const commitJSON = await Promise.all(this.state.repoDetails
      .map(async ({ user, repo, team }) => {
        const commitData = await request(`https://api.github.com/repos/${user}/${repo}/commits`);
        return JSON.parse(commitData).map(commit => ({ ...commit, team }));
      })
    );
    const commits = commitJSON.reduce(
      (acc, repo) => ({
        ...acc,
        ...repo.reduce(
          (acc, commit) => ({
            ...acc,
            [commit.sha]: {
              sha: commit.sha,
              author: commit.commit.author.name,
              date: new Date(commit.commit.author.date),
              message: commit.commit.message,
              team: commit.team
            }
          }), {}
        )
      }), {}
    );
    
    this.setState(prev => ({ commits: { ...prev.commits, ...commits } }));
  }

  async pollData() {
    setTimeout(() => this.updateCommits(), 10000);
  }
}

export default withStyles(styles)(Github);
