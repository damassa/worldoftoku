import React from 'react';

import { useHistory, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Grid, TextField } from '@material-ui/core';

import api from '../../services/api';
import * as AppActions from '../../store/modules/app/actions';
import { setUserOnStore } from '../../store/modules/user/actions';
import useStyles from './styles';

function Login() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const handleLogin = (formData) => {
    api
      .post('login', formData)
      .then((response) => {
        const token = response.data.token;
        const user = response.data.data;
        dispatch(AppActions.openSnackbar(`Bem vindo, ${user.name}`, 'success'));
        dispatch(setUserOnStore(token, user.name, user.email, user.id));
        localStorage.setItem('token', token);
        history.push('/');
      })
      .catch(() => {
        dispatch(
          AppActions.openSnackbar(
            'Erro ao efetuar login! Tente novamente.',
            'error',
          ),
        );
      });
  };

  return (
    <Grid container className={classes.loginWrapper} justify="center">
      <Grid container justify="center">
        <Grid item className={classes.loginContainer}>
          <h1 className={classes.loginTitle}>Login</h1>
          <form onSubmit={handleSubmit(handleLogin)}>
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
              <TextField
                {...register('password', {
                  required: 'Este campo é obrigatório',
                })}
                className={classes.input}
                variant="outlined"
                required
                error={!!errors.password}
                helperText={errors.password?.message || false}
                name="password"
                label="Senha"
                type="password"
                fullwidth="true"
                inputProps={{ minlenght: 25 }}
              />
            </Grid>
            <Grid item xs={12}>
              <Grid container justify="center" spacing={2}>
                <Grid item xs={12} className={classes.loginFormButton}>
                  <button fullwidth="true" disabled={false}>
                    Entrar
                  </button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} className={classes.forgotPassword}>
              <Grid container justify="center">
                <Link to="/forgotPassword">
                  <span>Esqueceu sua senha?</span>
                </Link>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Login;
