import React from 'react';
import Changeman from '../../assets/changeman.jpg';
import { Grid } from '@material-ui/core';

import useStyles from './styles';

function SerieCard() {
  const classes = useStyles();

  return (
    <Grid container className={classes.card} justify="center">
      <Grid item xs={12}>
        <img src={Changeman} alt="Série" />
      </Grid>
    </Grid>
  );
}

export default SerieCard;
