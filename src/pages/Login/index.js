import React from 'react';
import { Grid } from '@material-ui/core';

import useStyles from './styles';

function Login() {
  const classes = useStyles();

  return (
    <Grid container className={classes.loginWrapper}>
      <Grid item xs={12}>
        <Grid container justify="center">
          <Grid item xs={10}>
            asdasdasd
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Login;
