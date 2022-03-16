import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Categories from '../../pages/Categories';
import Detail from '../../pages/Detail';
import EditUser from '../../pages/EditUser';
import Favorites from '../../pages/Favorites';
import Footer from '../Footer';
import ForgotPassword from '../../pages/ForgotPassword';
import Navbar from '../Navbar';
import Home from '../../pages/Home';
import Login from '../Login';
import Register from '../../pages/Register';
import ResetPassword from '../../pages/ResetPassword';
import Search from '../../pages/Search';

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
      <Route path="/forgotPassword" exact component={ForgotPassword} />
      <Route path="/resetPassword/:token" exact component={ResetPassword} />
      <Route path="/register" exact component={Register} />
      <>
        <Navbar />
        <div className="wrapper">
          <PrivateRoute path="/" exact component={Home} />
          <PrivateRoute path="/detail/:id" exact component={Detail} />
          <PrivateRoute path="/editProfile" exact component={EditUser} />
          <PrivateRoute path="/search/:name" exact component={Search} />
          <PrivateRoute path="/categories" exact component={Categories} />
          <PrivateRoute path="/favorites" exact component={Favorites} />
        </div>
        <Footer />
      </>
    </Switch>
  </BrowserRouter>
);

export default Routes;
