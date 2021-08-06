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

  const editUser = (formData) => {
    api
      .put('users', { user: formData })
      .then(() => {
        dispatch(
          AppActions.openSnackbar('Dados alterados com sucesso.', 'success'),
        );
      })
      .catch(() => {
        dispatch(AppActions.openSnackbar('Erro ao alterar dados.', 'error'));
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
            <form onSubmit={handleSubmit(editUser)}>
              <Grid item xs={12}>
                <Grid container justify="center">
                  <Grid item xs={12}>
                    <TextField
                      {...register('name', {
                        required: 'Campo obrigatório',
                      })}
                      inputProps={{ maxlenght: 25 }}
                      error={!!errors?.name}
                      helperText={errors?.name?.message || false}
                      variant="outlined"
                      required
                      autoComplete="off"
                      fullwidth="true"
                      name="name"
                      label="Usuário:"
                      type="text"
                      defaultValue={user.name}
                      className={classes.input}
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
                      inputProps={{ maxlenght: 25 }}
                      error={!!errors?.email}
                      helperText={errors?.email?.message || false}
                      variant="outlined"
                      autoComplete="off"
                      required
                      fullwidth="true"
                      name="email"
                      label="E-mail:"
                      type="text"
                      defaultValue={user.email}
                      className={classes.input}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      {...register('password', {
                        required: 'Campo obrigatório',
                      })}
                      inputProps={{ maxlenght: 25 }}
                      error={!!errors?.password}
                      helperText={errors?.password?.message || false}
                      variant="outlined"
                      autoComplete="off"
                      required
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
                      inputProps={{ maxlenght: 25 }}
                      autoComplete="off"
                      variant="outlined"
                      fullwidth="true"
                      name="senha"
                      label="Nova senha:"
                      type="password"
                      className={classes.input}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      inputProps={{ maxlenght: 25 }}
                      variant="outlined"
                      autoComplete="off"
                      fullwidth="true"
                      name="repeatSenha"
                      label="Confirme a nova senha:"
                      type="password"
                      className={classes.input}
                    />
                  </Grid>
                  <Grid container spacing={3} justify="flex-start">
                    <Grid className={classes.formButton} item xs={12}>
                      <button type="submit">Alterar</button>
                    </Grid>
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
