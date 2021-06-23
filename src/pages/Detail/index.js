import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import api from '../../services/api';
import ReactPlayer from 'react-player';

import useStyles from './styles';

const Detail = () => {
  const classes = useStyles();
  const [series, setSeries] = useState([]);

  useEffect(() => {
    api
      .get('series')
      .then((response) => {
        setSeries(response.series);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Grid container className={classes.DetailWrapper}>
      <Grid item xs={12}>
        <Grid container justify="center">
          <Grid item xs={10}>
            {series.map((serie) => (
              <Grid key={serie._id} container className={classes.DetailContent}>
                <Grid item md={4}>
                  <Grid container className={classes.DetailImage}>
                    <Grid item sm={12} md={8}>
                      <img src={serie.image} alt="Detalhe" title={serie.name} />
                    </Grid>
                  </Grid>
                  <Grid container className={classes.SerieDetail}>
                    <Grid item sm={12} md={8}>
                      <h1>{serie.name}</h1>
                      <h2>{serie.year}</h2>
                      <h3>{serie.duration}</h3>
                      <Grid item xs={12} className={classes.CategoryTag}>
                        <div>{serie.category}</div>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item sm={12} md={8}>
                  <Grid item xs={12} className={classes.OpeningVideo}>
                    <ReactPlayer width="100%" url={serie.opening_video} />
                  </Grid>
                  <Grid item xs={12} className={classes.SeriePlot}>
                    <h2>Sinopse</h2>
                    <p>{serie.plot}</p>
                  </Grid>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Detail;
