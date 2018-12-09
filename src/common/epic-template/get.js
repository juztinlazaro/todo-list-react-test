import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { takeUntil, map, startWith, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

const get = actions => {
  const { succeeded, cancel, failed, loading } = actions;
  return ajax.get('https://jsonplaceholder.typicode.com/post').pipe(
    map(result => succeeded(result.response)),
    takeUntil(actions.cancel),
    catchError(error => of(failed(error))),
    startWith(loading()),
  );
};
