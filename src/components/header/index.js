import React from 'react';
import clsx from 'clsx';

import { useHistory } from 'react-router-dom';
import { Grid } from '@material-ui/core';

import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';

import useStyles from './styles';

export default function Header() {
  const classes = useStyles();
  const history = useHistory();

  function handleUser() {
    history.push('/User');
  }

  return (
    <Grid container justify="center" className={classes.headerBg}>
      <Grid item xs={10}>
        <Grid container className={classes.headerContainer}>
          <Grid item xs={2} className={classes.logo}>
            LOGO HERE
          </Grid>
          <Grid item xs={6} className={classes.category}>
            Categorias
          </Grid>
          <Grid item xs={3} className={classes.search}>
            <FormControl
              className={clsx(classes.margin, classes.textField)}
              variant="outlined"
              fullWidth
            >
              <OutlinedInput
                fullWidth
                className={classes.inputSearch}
                placeholder="Busque por séries..."
                endAdornment={
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                }
              />
            </FormControl>
          </Grid>
          <Grid
            item
            xs={1}
            className={classes.user}
            onClick={handleUser}
            title="Minha conta"
          >
            <PersonIcon />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
