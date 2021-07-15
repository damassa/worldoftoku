import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from './auth';

import Home from '../../pages/Home';
import Detail from '../../pages/Detail';
import User from '../../pages/User';
import Register from '../../pages/Register';
import Header from '../header';
import Footer from '../footer';

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
    <Header />
    <div className="wrapper">
      <Switch>
        <PrivateRoute path="/" exact component={Home} />
        <PrivateRoute path="/detail/:id" exact component={Detail} />
        <PrivateRoute path="/user/:id" exact component={User} />
        <Route path="/register" exact component={Register} />
      </Switch>
    </div>
    <Footer />
  </BrowserRouter>
);

export default Routes;
