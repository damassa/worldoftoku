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
    <Grid container className={classes.searchContainer}>
      <Grid item xs={12}>
        <Grid container justify="center">
          <Grid item xs={10}>
            <Grid container className={classes.searchContent}>
              <Grid item xs={12}>
                <h2>Resultados para: {name}</h2>
              </Grid>
              {data.map((serie) => (
                <Grid key={serie._id} container justify="space-between">
                  <Link to={`/detail/${serie._id}`}>
                    <Grid
                      container
                      justify="center"
                      className={classes.searchCardContainer}
                    >
                      <Grid item xs={12} className={classes.searchCard}>
                        <img src={serie.image} alt="Serie" title={serie.name} />
                      </Grid>
                    </Grid>
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Search;
