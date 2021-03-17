import React from 'react';
import Header from '../../header';
import { Grid } from '@material-ui/core';

// import { Container } from './styles';

function Home() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Header />
        <h1>Home Page</h1>
      </Grid>
    </Grid>
  );
}

export default Home;
