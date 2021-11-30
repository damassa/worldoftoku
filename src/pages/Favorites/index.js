import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import useStyles from '../Search/styles';

const Favorites = () => {
  const [data, setData] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    api
      .get('/series/favorites')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Grid container justify="center">
      <Grid item xs={10}>
        <Grid container justify="space-between">
          {data.map((serie) => (
            <Grid item key={serie._id}>
              <Link to={`/detail/${serie._id}`}>
                <Grid container className={classes.searchCardContainer}>
                  <Grid item xs={12} className={classes.searchCard}>
                    <img src={serie.image} alt="Serie" title={serie.name} />
                    <Grid container className={classes.bottomSerieName}>
                      <span>{serie.name}</span>
                    </Grid>
                  </Grid>
                </Grid>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Favorites;
