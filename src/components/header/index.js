import React from 'react';
import { Grid } from '@material-ui/core';

import useStyles from './styles';

export default function Header() {
  const classes = useStyles();

  return (
    <Grid container justify="center">
      <Grid item xs={10}>
        <Grid container className={classes.headerContainer}>
          <Grid item xs={2} className={classes.logo}>
            Tokuflix
          </Grid>
          <Grid item xs={6} className={classes.category}>
            Categorias
          </Grid>
          <Grid item xs={2} className={classes.search}>
            <input
              type="search"
              name=""
              placeholder="Busque suas séries..."
              id=""
            />
          </Grid>
          <Grid item xs={2} className={classes.user}>
            User
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
