import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from './auth';

import Home from '../pages/Home';

/* eslint-disable react/prop-types */
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: '/login', state: { from: props.location } }}
        />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <div
      style={{
        width: '100vw',
        display: 'flex',
        flexWrap: 'no-wrap',
      }}
    >
      <Switch>
        <PrivateRoute path="/" exact component={Home} />
        <Route path="/login" exact component={Login} />
      </Switch>
    </div>
  </BrowserRouter>
);

const Login = () => <h1>Login</h1>;

export default Routes;
