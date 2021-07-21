import React from 'react';
// import { useParams } from 'react-router-dom';
// import api from '../../services/api';
import { Grid, TextField } from '@material-ui/core';

import useStyles from './styles';

function User() {
  const classes = useStyles();
  // const [data, setData] = useState({});
  // const { id } = useParams();

  // useEffect(() => {
  //   api
  //     .get(`users/${id}`)
  //     .then((response) => {
  //       setData(response.data);
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, [id]);

  return (
    <Grid container className={classes.UserWrapper}>
      <Grid xs={12}>
        <Grid container justify="center">
          <Grid item xs={10}>
            <Grid container>
              <Grid item xs={12}>
                <h1>Altere dados da sua conta!</h1>
              </Grid>
              <Grid item xs={12}>
                <Grid container justify="center">
                  <Grid item xs={12}>
                    <TextField
                      inputProps={{ maxLenght: 25 }}
                      variant="outlined"
                      required
                      fullWidth
                      name="user"
                      label="Usuário:"
                      type="text"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
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
                      inputProps={{ maxLenght: 25 }}
                      variant="outlined"
                      required
                      fullWidth
                      name="senha"
                      label="Senha atual:"
                      type="text"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      inputProps={{ maxLenght: 25 }}
                      variant="outlined"
                      fullWidth
                      name="senha"
                      label="Nova senha:"
                      type="text"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      inputProps={{ maxLenght: 25 }}
                      variant="outlined"
                      fullWidth
                      name="repeatSenha"
                      label="Confirme a nova senha:"
                      type="text"
                    />
                  </Grid>
                  <Grid container spacing={3} justify="flex-start">
                    <Grid className={classes.formButton} item xs={12}>
                      <button type="submit" disabled={false}>
                        Alterar
                      </button>
                    </Grid>
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

export default User;
