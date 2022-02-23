import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { Grid } from '@material-ui/core';
import Carousel from '../../components/carousel';
import Image from '../../assets/undraw_horror_movie_3988.svg';

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    api
      .get('orderByYear')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Grid container className="homeContainer">
      <Grid item xs={12}>
        <Grid container justify="center">
          <Grid item xs={10}>
            <Grid container className="homeContent">
              <Grid item md={7} sm={12}>
                <Grid container className="homeContainerLeft">
                  <Grid item xs={12}>
                    <h1>
                      Descubra as séries de ação mais famosas e mais nostálgicas
                      que passam na televisão
                    </h1>
                    <p>
                      World of Tokusatsu tenta trazer os clássicos japoneses de
                      Tokusatsu para você.
                    </p>
                    <Grid container className="homeButton">
                      <button>Todas as séries</button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item md={5} sm={12} className="homeImage">
                <img src={Image} alt="Site" />
              </Grid>
            </Grid>
            <Grid item xs={12} className="homeTitle">
              <h1>Lançamentos</h1>
            </Grid>
            <Carousel data={data} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
