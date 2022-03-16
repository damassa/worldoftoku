import React from 'react';
import { Grid, TextField } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as AppActions from '../../store/modules/app/actions';
import api from '../../services/api';

function ForgotPassword() {
  const dispatch = useDispatch();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const handleForgotPassword = (formData) => {
    api
      .post('users/forgotPassword', formData)
      .then(dispatch(AppActions.openSnackbar('Pedido enviado ao e-mail!')))
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
    <Grid container justifyContent="center" className="notLoggedWrapper">
      <Grid container justifyContent="center">
        <Grid item className="notLoggedContainer">
          <h1 className="loginTitle">Esqueceu sua senha?</h1>
          <form onSubmit={handleSubmit(handleForgotPassword)}>
            <Grid item xs={12} className="loginForm">
              <TextField
                {...register('email', {
                  required: 'Forneça um e-mail válido',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i,
                  },
                })}
                inputProps={{ minlenght: 25 }}
                className="input"
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
              <Grid container justifyContent="center" spacing={2}>
                <Grid item xs={12} className="loginFormButton">
                  <button fullwidth="true" disabled={false}>
                    Enviar
                  </button>
                </Grid>
                <Grid item xs={12} className="forgotPassword">
                  <Grid container justifyContent="center">
                    <Link to="/">
                      <span>Voltar ao início</span>
                    </Link>
                  </Grid>
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
