import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import api from '../../services/api';
import { Grid, TextField } from '@material-ui/core';

import * as AppActions from '../../store/modules/app/actions.js';
import { updateUserOnStore } from '../../store/modules/user/actions.js';

function EditUser() {
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
        dispatch(updateUserOnStore(data.name, data.email));
      })
      .catch((e) => {
        dispatch(
          AppActions.openSnackbar(
            e.response?.data || 'Erro ao alterar dados.',
            'error',
          ),
        );
      });
  };

  return (
    <Grid container className="loggedContainer" justifyContent="center">
      <Grid item xs={10}>
        <Grid container justifyContent="center">
          <Grid item xs={12} className="userTitle">
            <h1>Altere dados da sua conta!</h1>
          </Grid>
          <Grid item xs={12} className="inputWrapper">
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
                  className="input"
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
                    className="input"
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
                    className="input"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    {...register('newPassword', {
                      required: false,
                    })}
                    inputProps={{ maxlenght: 30 }}
                    variant="outlined"
                    fullwidth="true"
                    name="newPassword"
                    label="Nova senha:"
                    type="password"
                    className="input"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    {...register('repeatPassword', {
                      required: false,
                    })}
                    inputProps={{ maxlenght: 30 }}
                    variant="outlined"
                    fullwidth="true"
                    name="repeatPassword"
                    label="Confirme a nova senha:"
                    type="password"
                    className="input"
                  />
                </Grid>
                <Grid container spacing={3} justifyContent="flex-start">
                  <Grid className="editFormButton" item xs={12}>
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

export default EditUser;
