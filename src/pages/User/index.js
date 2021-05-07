import React from 'react';

import { Grid } from '@material-ui/core';

import useStyles from './styles';

function User() {
  const classes = useStyles();

  return (
    <Grid container className={classes.UserWrapper}>
      <Grid xs={12}>
        <Grid container justify="center">
          <Grid item xs={10}>
            <Grid container className={classes.UserPanel}>
              <Grid item xs={12}>
                Form
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default User;
