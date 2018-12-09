import { handleActions } from 'redux-actions';
import * as ACTION from './blog.action';
import Model from './blog.model';

export default handleActions(
  {
    [ACTION.getBlogSuccess]: (state, action) => ({
      ...state,
      blogs: action.payload,
      loading: false,
    }),
    [ACTION.getBlogLoading]: (state, action) => ({
      ...state,
      loading: true,
    }),
    [ACTION.getBlogError]: (state, action) => ({
      ...state,
      error: action.payload,
      loading: false,
    }),
    [ACTION.getBlogCancel]: (state, action) => ({
      ...state,
      loading: false,
    }),
  },
  Model,
);
