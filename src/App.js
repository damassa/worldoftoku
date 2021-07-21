import React from 'react';
import Routes from './components/routes';

import { Snackbar, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import * as AppActions from './store/modules/app/actions.js';
import Alert from '@material-ui/lab/Alert';

import './App.css';

function App() {
  const dispatch = useDispatch();
  const appStates = useSelector((state) => state.app);

  console.log(appStates.snackbar.active);

  return (
    <div className="App">
      <Routes />
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
