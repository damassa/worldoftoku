import React from 'react';

import { Grid, TextField } from '@material-ui/core';

import useStyles from './styles';

function FormUser() {
  const classes = useStyles();

  return (
    <Grid container justify="center">
      <Grid item xs={12}>
        <TextField
          inputProps={{ maxLenght: 25 }}
          variant="outlined"
          required
          fullWidth
          name="user"
          label="Usuário:"
          type="text"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          inputProps={{ maxLenght: 25 }}
          variant="outlined"
          required
          fullWidth
          name="email"
          label="E-mail:"
          type="text"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          inputProps={{ maxLenght: 25 }}
          variant="outlined"
          required
          fullWidth
          name="senha"
          label="Senha:"
          type="text"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          inputProps={{ maxLenght: 25 }}
          variant="outlined"
          required
          fullWidth
          name="repeatSenha"
          label="Confirme a senha:"
          type="text"
        />
      </Grid>
      <Grid container spacing={3} justify="flex-start">
        <Grid className={classes.formButton} item xs={12}>
          <button type="submit" disabled={false}>
            Alterar
          </button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default FormUser;
