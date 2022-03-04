import React, { useState, useEffect, useCallback } from 'react';
import Routes from './components/routes';

import { Snackbar, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import api from './services/api';
import * as AppActions from './store/modules/app/actions.js';
import { setUserOnStore } from './store/modules/user/actions.js';
import Alert from '@material-ui/lab/Alert';

import './styles/app.scss';

function App() {
  const dispatch = useDispatch();
  const appStates = useSelector((state) => state.app);
  const [isLoaded, setIsLoaded] = useState(false);

  const checkToken = useCallback(() => {
    api
      .get('me')
      .then((response) => {
        const data = response.data;
        dispatch(
          setUserOnStore(
            localStorage.getItem('token'),
            data.name,
            data.email,
            data.id,
          ),
        );
        setIsLoaded(true);
      })
      .catch(() => {
        localStorage.setItem('token', null);
        setIsLoaded(true);
      });
  }, [dispatch]);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      return checkToken();
    }
    setIsLoaded(true);
  }, [checkToken]);

  return (
    <div className="App">
      {isLoaded ? <Routes /> : null}
      <Snackbar
        open={appStates.snackbar.active}
        autoHideDuration={8000}
        onClose={() => dispatch(AppActions.closeSnackbar())}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
      >
        <Alert
          variant="filled"
          severity={appStates.snackbar.severity}
          onClose={() => dispatch(AppActions.closeSnackbar())}
        >
          <Typography>{appStates.snackbar.message}</Typography>
        </Alert>
      </Snackbar>
    </div>
  );
}
export default App;
