import React from 'react';
import { Grid, TextField } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import api from '../../services/api';

function ResetPassword() {
  const { token } = useParams();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const handleResetPassword = (formData) => {
    api.post('users/resetPassword', {
      token,
      password: formData.password,
      confirmPassword: formData.confirmPassword,
    });
  };

  return (
    <Grid container justifyContent="center" className="loginWrapper">
      <Grid container justifyContent="center">
        <Grid item className="loginContainer">
          <h1 className="loginTitle">Altere sua senha</h1>
          <form onSubmit={handleSubmit(handleResetPassword)}>
            <Grid item xs={12} className="loginForm">
              <TextField
                {...register('password', {
                  required: 'Digite a senha',
                })}
                inputProps={{ minlenght: 25 }}
                className="input"
                variant="outlined"
                required
                error={!!errors.password}
                helperText={errors.password?.message || false}
                name="password"
                label="Nova senha"
                type="password"
                fullwidth="true"
              />
            </Grid>
            <Grid item xs={12} className="loginForm">
              <TextField
                {...register('confirmPassword', {
                  required: 'Confirme sua senha',
                })}
                inputProps={{ minlenght: 25 }}
                className="input"
                variant="outlined"
                required
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword?.message || false}
                name="confirmPassword"
                label="Confirme sua senha"
                type="password"
                fullwidth="true"
              />
            </Grid>
            <Grid item xs={12}>
              <Grid container justifyContent="center" spacing={2}>
                <Grid item xs={12} className="loginFormButton">
                  <button fullwidth="true" disabled={false}>
                    Alterar
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

export default ResetPassword;
