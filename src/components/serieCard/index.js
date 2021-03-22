import React from 'react';
import Changeman from '../../assets/changeman.jpg';
import { Grid, Paper } from '@material-ui/core';

import useStyles from './styles';

function SerieCard() {
  const classes = useStyles();

  return (
    <Grid container justify="center">
      <Paper elevation={3} className={classes.card}>
        <img src={Changeman} alt="Série" />
      </Paper>
    </Grid>
  );
}

export default SerieCard;
