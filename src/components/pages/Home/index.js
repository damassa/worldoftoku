import React from 'react';
import { Grid } from '@material-ui/core';
import Image from '../../../assets/undraw_horror_movie_3988.svg';

import useStyles from './styles';

const Home = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.homeContainer}>
      <Grid item xs={12}>
        <Grid container justify="center">
          <Grid item xs={10}>
            <Grid container justify="space-between">
              <Grid item xs={7}>
                <Grid container>
                  <Grid item xs={12} className={classes.homeContainerLeft}>
                    <h1>
                      Descubra as séries de ação mais famosas e mais nostáligas
                      que passam na televisão
                    </h1>
                    <p>
                      Tokuflix tenta trazer os clássicos japoneses de Tokusatsu
                      para você.
                    </p>
                    <button>Todas as séries</button>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={5} className={classes.homeImage}>
                <img src={Image} alt="Site" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
