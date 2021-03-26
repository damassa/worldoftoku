import React from 'react';
import { Grid } from '@material-ui/core';
import DetailCard from '../../detailCard';

// import { Container } from './styles';

const Detail = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <DetailCard />
      </Grid>
    </Grid>
  );
};
export default Detail;
