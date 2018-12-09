import { combineReducers } from 'redux';

import blogReducer from './blog/blog.reducer';
import taskReducer from './task/task.reducers';

const rootReducers = combineReducers({
  blogs: blogReducer,
  task: taskReducer,
});

export default rootReducers;