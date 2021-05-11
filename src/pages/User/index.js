import React from 'react';
import FormUser from '../../components/formUser';

import { Grid } from '@material-ui/core';

import useStyles from './styles';

function User() {
  const classes = useStyles();

  return (
    <Grid container className={classes.UserWrapper}>
      <Grid xs={12}>
        <Grid container justify="center">
          <Grid item xs={10}>
            <Grid container>
              <Grid item xs={12}>
                <h1>Altere dados da sua conta!</h1>
              </Grid>
              <Grid item xs={12}>
                <FormUser />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default User;
