import React, { Component } from 'react';
import classnames from 'classnames';
import ContactItem from './ContactItem';

import Grid from '@material-ui/core/Grid';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import NativeSelect from '@material-ui/core/NativeSelect';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

const cat_image =
  'https://i.pinimg.com/originals/81/6d/a5/816da533638aee63cfbd315ea24cccbd.jpg';

class TaskList extends Component {
  state = {
    name: [],
    anchorEl: null,
  };

  handleChange = panel => (event, expanded) => {
    this.props.onExpand(event, expanded, panel);
  };

  handleChangeSelect = event => {
    this.setState({ name: event.target.value });
  };

  handleClick = event => {
    this.setState({
      anchorEl: event.currentTarget,
    });
  };

  handleClose = () => {
    this.setState({
      anchorEl: null,
    });
  };
  render() {
    const { expanded } = this.props;
    const { anchorEl } = this.state;

    return (
      <section className="item">
        <ExpansionPanel
          expanded={expanded === 'panel1'}
          onChange={this.handleChange('panel1')}
          className={classnames('task-item', {
            'active-item': expanded === 'panel1',
          })}
        >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Grid container spacing={24}>
              <Grid item xs={10}>
                <span className="task-title">Implement the task list</span>
                <span className="task-priority">High Priority</span>
              </Grid>

              <Grid item xs={2}>
                <button className="_normalize-button">
                  <i className="fas fa-align-left" />
                </button>

                <button className="_normalize-button">
                  <i className="fas fa-paperclip" />
                </button>

                <span className="task-due-date">
                  <i className="far fa-clock" />
                  Dec 10
                </span>

                <div className="avatar-wrapper">
                  <i className="fas fa-user-tie" />
                </div>
              </Grid>
            </Grid>
          </ExpansionPanelSummary>

          <ExpansionPanelDetails className="editable-items">
            <section className="option-items">
              <div className="option-wrapper">
                <span className="option-title"> Status </span>
                <NativeSelect className="status-selection" name="age">
                  <option value={0}>All Active</option>
                  <option value={1}>Active</option>
                  <option value={2}>Inactive</option>
                  <option value={3}>Block</option>
                </NativeSelect>
              </div>

              <div className="option-wrapper">
                <span className="option-title"> Reference </span>
                <FormControl className="reference-select">
                  <Select
                    multiple
                    value={this.state.name}
                    onChange={this.handleChangeSelect}
                    input={<Input id="select-multiple-checkbox" />}
                    renderValue={selected => selected.join(', ')}
                  >
                    {names.map(name => (
                      <MenuItem key={name} value={name}>
                        <Checkbox
                          checked={this.state.name.indexOf(name) > -1}
                        />
                        <ListItemText primary={name} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </div>

              <div className="option-wrapper">
                <span className="option-title"> Assignees </span>
                <div className="assignes-container">
                  <div className="assignes-wrapper">
                    <img className="avatar-item" src={cat_image} />
                    <button className="_normalize-button remove-assignee">
                      <i className="far fa-times-circle" />
                    </button>
                  </div>
                </div>
              </div>
            </section>

            <section className="contacts _spacer-md">
              <span className="contact-title">Contacts</span>
              <ContactItem
                anchorEl={anchorEl}
                handleClick={this.handleClick}
                handleClose={this.handleClose}
              />
            </section>

            <section className="description">
              <span className="description-title">Description</span>
            </section>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </section>
    );
  }
}

export default TaskList;