import React from 'react';
import { Grid } from '@material-ui/core';

import useStyles from './styles';

const Series = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.seriesContainer}>
      <Grid item xs={12}>
        <Grid container justify="center">
          <Grid item xs={10}>
            <h1>Clássicos</h1>
            <Grid container style={{ backgroundColor: 'red' }}>
              <Grid item xs={12}>
                a
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Series;
