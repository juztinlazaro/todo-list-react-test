import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import {
  switchMap,
  takeUntil,
  map,
  startWith,
  catchError,
} from 'rxjs/operators';
import { of } from 'rxjs';
import * as TYPES from './blog.types';
import * as ACTION from './blog.action';

export const getBlogEpic = (action$, state$, { API }) => {
  return action$.pipe(
    ofType(TYPES.GET_BLOG_EPIC),
    switchMap(() =>
      ajax.get(`${API.jsonEncode}/posts`).pipe(
        map(result => ACTION.getBlogSuccess(result.response)),
        takeUntil(action$.pipe(ofType(TYPES.GET_BLOG_CANCEL))),
        catchError(error => of(ACTION.getBlogError(error))),
        startWith(ACTION.getBlogLoading()),
      ),
    ),
  );
};
