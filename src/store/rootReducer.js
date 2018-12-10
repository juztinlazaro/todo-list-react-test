import { combineReducers } from 'redux';

import taskReducer from './task/task.reducers';

const rootReducers = combineReducers({
  tasks: taskReducer,
});

export default rootReducers;
