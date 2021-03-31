import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import image from '../../assets/changeman.jpg';

import useStyles from './styles';

const SerieCard = () => {
  const classes = useStyles();
  const history = useHistory();

  function handleSerieDetail() {
    history.push('/Detail');
  }

  return (
    <Grid container justify="center" onClick={handleSerieDetail}>
      <Grid item xs={12} className={classes.card}>
        <img src={image} alt="Serie" />
      </Grid>
    </Grid>
  );
};

export default SerieCard;
