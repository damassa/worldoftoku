import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Home from '../../pages/Home';
import Categories from '../../pages/Categories';
import Detail from '../../pages/Detail';
import EditUser from '../../pages/EditUser';
import FilteredSerie from '../../pages/FilteredSerie';
import Login from '../Login';
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
    <Switch>
      <Route path="/login" exact component={Login} />
      <>
        <Header />
        <div className="wrapper">
          <PrivateRoute path="/" exact component={Home} />
          <PrivateRoute path="/detail/:id" exact component={Detail} />
          <PrivateRoute path="/editProfile" exact component={EditUser} />
          <PrivateRoute path="/search/:id" exact component={FilteredSerie} />
          <PrivateRoute path="/categories" exact component={Categories} />
          <Route path="/register" exact component={Register} />
        </div>
        <Footer />
      </>
    </Switch>
  </BrowserRouter>
);

export default Routes;
