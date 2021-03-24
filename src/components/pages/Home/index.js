import React from 'react';
import { Grid } from '@material-ui/core';
import Carousel from '../../carousel';
import Image from '../../../assets/undraw_horror_movie_3988.svg';

import useStyles from './styles';

const Home = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.homeContainer}>
      <Grid item xs={12}>
        <Grid container justify="center">
          <Grid item xs={10}>
            <Grid container className={classes.homeContent}>
              <Grid item md={7} sm={12}>
                <Grid container className={classes.homeContainerLeft}>
                  <Grid item xs={12}>
                    <h1>
                      Descubra as séries de ação mais famosas e mais nostáligas
                      que passam na televisão
                    </h1>
                    <p>
                      Tokuflix tenta trazer os clássicos japoneses de Tokusatsu
                      para você.
                    </p>
                    <Grid container className={classes.homeButton}>
                      <button>Todas as séries</button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item md={5} sm={12} className={classes.homeImage}>
                <img src={Image} alt="Site" />
              </Grid>
            </Grid>
            <Grid item xs={12} className={classes.homeTitle}>
              <h1>Clássicos</h1>
            </Grid>
            <Carousel />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
