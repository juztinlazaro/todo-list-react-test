import { combineReducers } from 'redux';

import blogReducer from './blog/blog.reducer';
import taskReducer from './task/task.reducers';

const rootReducers = combineReducers({
  blogs: blogReducer,
  tasks: taskReducer,
});

export default rootReducers;
