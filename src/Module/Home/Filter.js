import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import NativeSelect from '@material-ui/core/NativeSelect';

class Filter extends Component {
  render() {
    return (
      <Grid container spacing={24}>
        <Grid item xs={9}>
          <span className="status-title"> Status:</span>

          <NativeSelect className="status-selection" name="age">
            <option value={0}>All Active</option>
            <option value={1}>Active</option>
            <option value={2}>Inactive</option>
            <option value={3}>Block</option>
          </NativeSelect>
        </Grid>

        <Grid item xs={3}>
          <Button
            className="add-task-btn _primary-btn"
            color="primary"
            variant="contained"
          >
            <Icon fontSize="small">add</Icon>
            ADD TASK
          </Button>

          <Button
            className="_secondary-btn-outline"
            color="primary"
            variant="outlined"
          >
            BULK EDIT
          </Button>
        </Grid>
      </Grid>
    );
  }
}

export default Filter;
