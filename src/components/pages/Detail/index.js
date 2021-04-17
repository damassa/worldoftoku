import React from 'react';
import { Grid } from '@material-ui/core';

import Changeman from '../../../assets/changeman.jpg';

import useStyles from './styles';

const Detail = (props) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.detailWrapper} justify="center">
      <Grid item xs={12}>
        <Grid container justify="center">
          <Grid item xs={10}>
            <Grid container justify="space-between">
              <Grid item xs={3} className={classes.DetailCard}>
                <img src={Changeman} alt="" />
                <h1>Nome da Série</h1>
                <h2>Ano</h2>
                <h3>Duração</h3>
                <h4>Categoria</h4>
                <p>Sinopse</p>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Detail;
