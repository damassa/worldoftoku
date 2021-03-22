import React from 'react';
import { Grid } from '@material-ui/core';

import useStyles from './styles';

function Footer() {
  const classes = useStyles();
  return (
    <Grid container className={classes.footer}>
      <Grid item xs={12}>
        <Grid container justify="center">
          <Grid item xs={10}>
            <h2>Tokuflix - A plataforma de Tokusatsu online grátis</h2>
            <h3>© Todos os direitos reservados.</h3>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Footer;
