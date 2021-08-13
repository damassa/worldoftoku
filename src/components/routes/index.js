import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Home from '../../pages/Home';
import Detail from '../../pages/Detail';
import User from '../../pages/User';
import Login from '../../pages/Login';
import Register from '../../pages/Register';
import Header from '../header';
import Footer from '../footer';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = useSelector((state) => state.user);
  return (
    <Route
      {...rest}
      render={(props) =>
        user.id ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/login', state: { from: props.location } }}
          />
        )
      }
    />
  );
};

const Routes = () => (
  <BrowserRouter>
    <Header />
    <div className="wrapper">
      <Switch>
        <PrivateRoute path="/" exact component={Home} />
        <PrivateRoute path="/detail/:id" exact component={Detail} />
        <PrivateRoute path="/editProfile" exact component={User} />
        <Route path="/register" exact component={Register} />
        <Route path="/login" exact component={Login} />
      </Switch>
    </div>
    <Footer />
  </BrowserRouter>
);

export default Routes;
