import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import api from '../../services/api';
import { Grid, TextField } from '@material-ui/core';

import * as AppActions from '../../store/modules/app/actions.js';
import useStyles from './styles';

function User() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm();

  const editUser = async (data) => {
    await api
      .put(`users/${user.id}`, { user: data })
      .then(() => {
        dispatch(
          AppActions.openSnackbar('Dados alterados com sucesso.', 'success'),
        );
      })
      .catch((e) => {
        dispatch(AppActions.openSnackbar('Erro ao alterar dados.', 'error'));
        console.log(e);
      });
  };

  return (
    <Grid container className={classes.UserWrapper} justify="center">
      <Grid item xs={10}>
        <Grid container justify="center">
          <Grid item xs={12} className={classes.userTitle}>
            <h1>Altere dados da sua conta!</h1>
          </Grid>
          <Grid item xs={12} className={classes.inputWrapper}>
            <form onSubmit={handleSubmit(editUser)} autoComplete="off">
              <Grid item xs={12}>
                <TextField
                  {...register('name', {
                    required: true,
                    maxLength: 30,
                  })}
                  error={!!errors?.name}
                  helperText={
                    errors?.name?.type === 'required' && 'Campo obrigatório'
                  }
                  autoComplete="off"
                  variant="outlined"
                  fullwidth="true"
                  name="name"
                  label="Nome:"
                  type="text"
                  defaultValue={user.name}
                  className={classes.input}
                />
                <Grid item xs={12}>
                  <TextField
                    {...register('email', {
                      required: true,
                      pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i,
                      maxLenght: 30,
                    })}
                    error={!!errors?.email}
                    helperText={
                      errors.email?.type === 'required' && 'Campo obrigatório'
                    }
                    autoComplete="off"
                    variant="outlined"
                    fullwidth="true"
                    name="email"
                    label="E-mail:"
                    type="email"
                    defaultValue={user.email}
                    className={classes.input}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    {...register('password', {
                      required: true,
                    })}
                    inputProps={{ maxlenght: 30 }}
                    error={!!errors?.password}
                    helperText={
                      errors?.password?.type === 'required' &&
                      'Campo obrigatório'
                    }
                    autoComplete="off"
                    variant="outlined"
                    fullwidth="true"
                    name="password"
                    label="Senha atual:"
                    type="password"
                    defaultValue={user.password}
                    className={classes.input}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    inputProps={{ maxlenght: 30 }}
                    variant="outlined"
                    fullwidth="true"
                    name="newPassword"
                    label="Nova senha:"
                    type="password"
                    className={classes.input}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    inputProps={{ maxlenght: 30 }}
                    variant="outlined"
                    fullwidth="true"
                    name="repeatSenha"
                    label="Confirme a nova senha:"
                    type="password"
                    className={classes.input}
                  />
                </Grid>
                <Grid container spacing={3} justify="flex-start">
                  <Grid className={classes.formButton} item xs={12}>
                    <button fullwidth="true" type="submit">
                      Alterar
                    </button>
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

export default User;
