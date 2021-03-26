import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Grid } from '@material-ui/core';

import useStyles from './styles';

function SerieCard() {
  const classes = useStyles();
  const history = useHistory();
  const [data, setData] = useState([]);

  const getData = () => {
    fetch('data/series.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((myJson) => {
        setData(myJson);
      })
      .catch((err) => {
        return err;
      });
  };

  useEffect(() => {
    getData();
  }, []);

  function handleSerieDetail() {
    history.push('/Detail');
  }

  return (
    <Grid container justify="center" onClick={handleSerieDetail}>
      <Grid item xs={12} className={classes.card}>
        {data.map((serie) => (
          <div key={serie.id}>
            <img src={serie.imageCard} alt="Serie" title={serie.name} />
          </div>
        ))}
      </Grid>
    </Grid>
  );
}

export default SerieCard;
