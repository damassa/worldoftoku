import React from 'react';

import { Grid, TextField } from '@material-ui/core';

import useStyles from './styles';

function Register() {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12}>
        <Grid container justify="center">
          <Grid item xs={10}>
            <Grid container>
              <Grid item xs={12}>
                <h1>Registre-se!</h1>
              </Grid>
              <Grid item xs={12}>
                <Grid container justify="center">
                  <Grid item xs={12}>
                    <TextField
                      className={classes.input}
                      inputProps={{ maxLenght: 25 }}
                      variant="outlined"
                      required
                      fullWidth
                      name="user"
                      label="Nome:"
                      type="text"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      className={classes.input}
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
                      className={classes.input}
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
                      className={classes.input}
                      inputProps={{ maxLenght: 25 }}
                      variant="outlined"
                      fullWidth
                      name="repeatSenha"
                      label="Confirme a nova senha:"
                      type="text"
                    />
                  </Grid>
                  <Grid container spacing={3} justify="flex-start">
                    <Grid className={classes.registerFormButton} item xs={12}>
                      <button type="submit" disabled={false}>
                        Alterar
                      </button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid container justify="center"></Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Register;
