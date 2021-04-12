import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Grid } from '@material-ui/core';
// import image from '../../assets/changeman.jpg';

import useStyles from './styles';

const SerieCard = () => {
  const [data, setData] = useState([]);
  const classes = useStyles();
  const history = useHistory();

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
        setData(myJson);
        console.log(myJson);
      });
  }, []);

  function handleSerieDetail() {
    history.push('/Detail');
  }

  return (
    <>
      {data.map((serie) => (
        <Grid
          key={serie.id}
          container
          justify="center"
          onClick={handleSerieDetail}
        >
          <Grid item xs={12} className={classes.card}>
            <img src={serie.imageCard} alt="Serie" title={serie.name} />
          </Grid>
        </Grid>
      ))}
    </>
  );
};

export default SerieCard;
