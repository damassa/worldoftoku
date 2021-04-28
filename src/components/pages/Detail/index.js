import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';

import useStyles from './styles';

const Detail = (props) => {
  const classes = useStyles();
  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch('http://localhost:3000/data/series.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        let filterData = myJson.filter((serie) => serie.id === parseInt(id))[0];
        setData(filterData);
      });
  }, [id]);

  return (
    <Grid container className={classes.DetailWrapper}>
      <Grid item xs={12}>
        <Grid container justify="center">
          <Grid item xs={10}>
            <Grid container className={classes.DetailContent}>
              <Grid item md={4}>
                <Grid container className={classes.DetailImage}>
                  <Grid item sm={12} md={8}>
                    <img src={data.imageCard} alt="Detalhe" />
                  </Grid>
                </Grid>
                <Grid container className={classes.SerieDetail}>
                  <Grid item sm={12} md={8}>
                    <h1>{data.name}</h1>
                    <h2>{data.year}</h2>
                    <Grid item xs={12} className={classes.CategoryTag}>
                      <div>{data.category}</div>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item sm={12} md={8}>
                <Grid item xs={12} className={classes.OpeningVideo}>
                  <ReactPlayer width="100%" url={data.opening_video} />
                </Grid>
                <Grid item xs={12} className={classes.SeriePlot}>
                  <h2>Sinopse</h2>
                  <p>{data.plot}</p>
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
