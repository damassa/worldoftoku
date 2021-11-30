import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { Link, useParams } from 'react-router-dom';
import api from '../../services/api';

import useStyles from './styles';

const Search = () => {
  const [data, setData] = useState([]);
  const { name } = useParams();
  const classes = useStyles();

  useEffect(() => {
    api
      .post('series', { name })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [name]);

  return (
    <Grid container className={classes.searchContainer} justify="center">
      <Grid item xs={10}>
        <Grid item xs={12}>
          <h2>Resultados para: {name}</h2>
        </Grid>
        <Grid container justify="space-between">
          {data.map((serie) => (
            <Grid key={serie._id} item className={classes.listSeries}>
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

export default Search;
