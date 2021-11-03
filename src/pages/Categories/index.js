import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { Grid } from '@material-ui/core';
import Carousel from '../../components/carousel';

// import useStyles from './styles';

const Categories = () => {
  const [data, setData] = useState([]);
  // const classes = useStyles();

  useEffect(() => {
    api
      .get('byCategory')
      .then((response) => {
        setData(response.data);
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
                <h1>Categoria</h1>
              </Grid>
              <Carousel data={data} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Categories;
