import React from 'react';

import { Grid } from '@material-ui/core';

import useStyles from './styles';

function FormUser() {
  const classes = useStyles();

  return (
    <Grid container className={classes.form}>
      <Grid item xs={12}>
        Opa
      </Grid>
    </Grid>
  );
}

export default FormUser;
