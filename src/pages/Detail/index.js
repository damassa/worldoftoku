import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import api from '../../services/api';
import ReactPlayer from 'react-player/youtube';

import useStyles from './styles';

const Detail = () => {
  const classes = useStyles();
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    api
      .get(`series/${id}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
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
                  <img src={data.image} alt="Detalhe" title={data.name} />
                </Grid>
                <Grid container className={classes.SerieDetail}>
                  <Grid item sm={12} md={8}>
                    <h1>{data.name}</h1>
                    <h2>{data.year}</h2>
                    <h4>{data.duration} minutes</h4>
                    {data.category?.map((cat) => (
                      <Grid
                        key={cat._id}
                        item
                        xs={12}
                        className={classes.CategoryTag}
                      >
                        <div>{cat.name}</div>
                      </Grid>
                    ))}
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
