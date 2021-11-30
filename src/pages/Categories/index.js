import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { Grid } from '@material-ui/core';
import Carousel from '../../components/carousel';

import useStyles from './styles';

const Categories = () => {
  const [superSentai, setSuperSentai] = useState([]);
  const [ultraSeries, setUltraSeries] = useState([]);
  const [kamenRider, setKamenRider] = useState([]);
  const [metalHero, setMetalHero] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    api
      .post('series/categories', { name: 'Super Sentai' })
      .then((response) => {
        setSuperSentai(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    api
      .post('series/categories', { name: 'Ultra Series' })
      .then((response) => {
        setUltraSeries(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    api
      .post('series/categories', { name: 'Kamen Rider' })
      .then((response) => {
        setKamenRider(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    api
      .post('series/categories', { name: 'Metal Hero' })
      .then((response) => {
        setMetalHero(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Grid container className={classes.homeContainer}>
      <Grid item xs={12}>
        <Grid container justify="center">
          <Grid item xs={10}>
            <Grid container className={classes.homeContent}>
              <Grid item xs={12}>
                <h1>Super Sentai</h1>
                {superSentai ? <Carousel data={superSentai} /> : null}
              </Grid>

              <Grid item xs={12}>
                <h1>Ultra Series</h1>
                {ultraSeries ? <Carousel data={ultraSeries} /> : null}
              </Grid>

              <Grid item xs={12}>
                <h1>Kamen Rider</h1>
                {kamenRider ? <Carousel data={kamenRider} /> : null}
              </Grid>

              <Grid item xs={12}>
                <h1>Metal Hero</h1>
                {metalHero ? <Carousel data={metalHero} /> : null}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Categories;
