import React, { Component, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import PublicRoutes from './public.routes';
import PrivateRoutes from './private.routes';

class Routes extends Component {
  state = {
    auth: true,
    routes: [],
  };

  componentDidMount() {
    if (this.state.auth) {
      this.setState({
        routes: [...PublicRoutes, ...PrivateRoutes],
      });
    } else {
      this.setState({
        routes: [...PublicRoutes],
      });
    }
  }

  render() {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          {this.state.routes.map(r => {
            return (
              <Route
                key={r.path}
                path={r.path}
                component={
                  r.async ? props => <r.component {...props} /> : r.component
                }
                exact
              />
            );
          })}
          {!this.state.auth && <Redirect to="/login" />}
          <Route component={() => <h1>404 no page found</h1>} />
        </Switch>
      </Suspense>
    );
  }
}

export default Routes;
