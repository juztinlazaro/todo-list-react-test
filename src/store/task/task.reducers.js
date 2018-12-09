import { handleActions } from 'redux-actions';
import * as ACTION from './task.actions';
import Model from './task.model';

export default handleActions({}, Model);
