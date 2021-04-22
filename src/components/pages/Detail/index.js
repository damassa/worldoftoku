import React from 'react';
import { Grid } from '@material-ui/core';
import ReactPlayer from 'react-player';

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
                <img src={Changeman} alt="Detalhe" />
                <Grid item xs={12} className={classes.SerieDetail}>
                  <h1>Nome da Série</h1>
                  <h2>Ano</h2>
                  <Grid item xs={12} className={classes.CategoryTag}>
                    <strong>Super Sentai</strong>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={8} className={classes.DetailInfo}>
                <Grid item xs={12} className={classes.OpeningVideo}>
                  <ReactPlayer
                    width="100%"
                    url="https://www.youtube.com/watch?v=d-7MzNRs4CY&t=12s"
                  />
                </Grid>
                <Grid item xs={12} className={classes.SeriePlot}>
                  <h2>Sinopse</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Detail;
