import React from 'react';
import { Grid, TextField, Button } from '@material-ui/core';

import useStyles from './styles';

function Login() {
  const classes = useStyles();
  // const [loading, setLoading] = useState(false);

  return (
    <Grid container className={classes.loginWrapper}>
      <Grid item xs={12}>
        <Grid container justify="center">
          <Grid item xs={10}>
            <Grid
              container
              justify="center"
              className={classes.paper}
              spacing={2}
            >
              <Grid item xs={12} className={classes.titleModal}>
                Login
              </Grid>
              <Grid item xs={12}>
                <TextField
                  // inputRef={register({
                  //   required: "Este campo é obrigatório",
                  //   pattern: {
                  //     value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i,
                  //     message: "Forneça um e-mail válido",
                  //   },
                  // })}
                  variant="outlined"
                  required
                  // error={!!errors.email}
                  // helperText={errors.email?.message || false}
                  name="email"
                  label="E-mail"
                  type="text"
                  fullWidth
                  // disabled={loading}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  // inputRef={register({
                  //   required: "Este campo é obrigatório",
                  // })}
                  variant="outlined"
                  required
                  // error={!!errors.password}
                  // helperText={errors.password?.message || false}
                  name="senha"
                  label="Senha"
                  type="password"
                  fullWidth
                  inputProps={{ minLenght: 12 }}
                  // disabled={loading}
                />
              </Grid>
              <Grid item xs={12}>
                <Grid container justify="center" spacing={2}>
                  <Grid item xs={5}>
                    <Button
                      fullWidth
                      disabled={false}
                      // onClick={handleSubmit(LogIn, onFormError)}
                    >
                      Entrar
                    </Button>
                  </Grid>
                  <Grid item xs={5}>
                    <Button
                      fullWidth
                      // onClick={() => dispatch(AppActions.closeLogin())}
                    >
                      Cancelar
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Login;
