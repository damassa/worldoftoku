import React from 'react';
import { Grid, TextField } from '@material-ui/core';
import { useForm } from 'react-hook-form';

import useStyles from '../../components/Login';

function ForgotPassword() {
  const classes = useStyles();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  return (
    <Grid container justify="center" className={classes.loginWrapper}>
      <Grid container justify="center">
        <Grid item className={classes.loginContainer}>
          <h1 className={classes.loginTitle}>Login</h1>
          <form>
            <Grid item xs={12} className={classes.loginForm}>
              <TextField
                {...register('email', {
                  required: 'Forneça um e-mail válido',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i,
                  },
                })}
                inputProps={{ minlenght: 25 }}
                className={classes.input}
                variant="outlined"
                required
                error={!!errors.email}
                helperText={errors.email?.message || false}
                name="email"
                label="E-mail"
                type="text"
                fullwidth="true"
              />
            </Grid>
            <Grid item xs={12}>
              <Grid container justify="center" spacing={2}>
                <Grid item xs={12} className={classes.loginFormButton}>
                  <button fullwidth="true" disabled={false}>
                    Enviar
                  </button>
                </Grid>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ForgotPassword;
