import React from 'react';
import axios from 'axios';

import { Grid, TextField } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import * as AppActions from '../../store/modules/app/actions.js';
import useStyles from './styles';

function Register() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm();

  const sendRequest = (formData) => {
    axios({
      method: 'POST',
      url: 'http://localhost:3333/api/register',
      data: formData,
    })
      .then(() => {
        dispatch(
          AppActions.openSnackbar('Usuário registrado com sucesso.', 'success'),
        );
      })
      .catch(() => {
        dispatch(
          AppActions.openSnackbar('Erro ao registrar usuário.', 'error'),
        );
      });
  };

  return (
    <Grid container className={classes.registerContainer} justify="center">
      <Grid item xs={10}>
        <Grid container justify="center">
          <Grid item xs={12} className={classes.registerTitle}>
            <h1>Registre-se!</h1>
          </Grid>
          <Grid item xs={12} className={classes.inputWrapper}>
            <form onSubmit={handleSubmit(sendRequest)}>
              <Grid container justify="center">
                <Grid item xs={12}>
                  <TextField
                    {...register('name', {
                      required: 'Campo obrigatório',
                    })}
                    className={classes.input}
                    inputProps={{ maxlenght: 25 }}
                    error={!!errors?.name}
                    helperText={errors?.name?.message || false}
                    autoComplete="off"
                    variant="outlined"
                    required
                    fullWidth
                    name="name"
                    label="Nome:"
                    type="text"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    {...register('email', {
                      required: 'Forneça um e-mail válido',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i,
                      },
                    })}
                    className={classes.input}
                    inputProps={{ maxlenght: 25 }}
                    error={!!errors?.email}
                    helperText={errors?.email?.message || false}
                    autoComplete="off"
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
                    {...register('password', {
                      required: 'Campo obrigatório',
                    })}
                    className={classes.input}
                    inputProps={{ maxlenght: 25 }}
                    error={!!errors?.password}
                    helperText={errors?.password?.message || false}
                    autoComplete="off"
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    label="Senha:"
                    type="password"
                  />
                </Grid>
                <Grid container spacing={3} justify="flex-start">
                  <Grid className={classes.registerFormButton} item xs={12}>
                    <button type="submit">Registrar</button>
                  </Grid>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Register;
