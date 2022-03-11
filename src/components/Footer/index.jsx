import React from 'react';
import { Grid } from '@material-ui/core';

function Footer() {
  return (
    <Grid container className="footer">
      <Grid item xs={12}>
        <Grid container justifyContent="center">
          <Grid item xs={10}>
            <h2>
              World of Tokusatsu - A plataforma de Tokusatsu online grátis
            </h2>
            <h3>© Todos os direitos reservados.</h3>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Footer;
