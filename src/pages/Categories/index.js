import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { Grid } from '@material-ui/core';
import Carousel from '../../components/carousel';

// import useStyles from './styles';

const Categories = () => {
  const [superSentai, setSuperSentai] = useState([]);
  const [ultraSeries, setUltraSeries] = useState([]);
  const [kamenRider, setKamenRider] = useState([]);
  const [metalHero, setMetalHero] = useState([]);
  // const classes = useStyles();

  useEffect(() => {
    api
      .post('series/categories', { name: 'Super Sentai' })
      .then((response) => {
        setSuperSentai(response.superSentai);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    api
      .post('series/categories', { name: 'Ultra Series' })
      .then((response) => {
        setUltraSeries(response.ultraSeries);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    api
      .post('series/categories', { name: 'Kamen Rider' })
      .then((response) => {
        setKamenRider(response.kamenRider);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    api
      .post('series/categories', { name: 'Metal Hero' })
      .then((response) => {
        setMetalHero(response.metalHero);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Grid container>
      <Grid item xs={12}>
        <Grid container jutify="center">
          <Grid item xs={10}>
            <Grid container>
              <Grid item xs={12}>
                <h1>Super Sentai</h1>
              </Grid>
              <Carousel data={superSentai} />
              <Grid item xs={12}>
                <h1>Ultra Series</h1>
              </Grid>
              <Carousel data={ultraSeries} />
              <Grid item xs={12}>
                <h1>Kamen Rider</h1>
              </Grid>
              <Carousel data={kamenRider} />
              <Grid item xs={12}>
                <h1>Metal Hero</h1>
              </Grid>
              <Carousel data={metalHero} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Categories;
