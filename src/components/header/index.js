import React, { useState } from 'react';
import clsx from 'clsx';

import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import PowerSettingsNewOutlinedIcon from '@material-ui/icons/PowerSettingsNewOutlined';

import useStyles from './styles';

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function Header() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid container justify="center" className={classes.headerBg}>
      <Grid item xs={10}>
        <Grid container className={classes.headerContainer}>
          <Grid item xs={2} className={classes.logo}>
            <Link to="/" style={{ color: '#fff' }}>
              LOGO
            </Link>
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
          <Grid item xs={1} className={classes.user}>
            <AccountCircleOutlinedIcon
              className={classes.headerIcon}
              onClick={handleClick}
            />
            <StyledMenu
              id="customized-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <StyledMenuItem>
                <ListItemIcon>
                  <AccountCircleOutlinedIcon fontSize="small" />
                </ListItemIcon>
                <Link to="/editProfile">
                  <ListItemText primary="Minha conta" />
                </Link>
              </StyledMenuItem>
              <StyledMenuItem>
                <ListItemIcon>
                  <PowerSettingsNewOutlinedIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </StyledMenuItem>
            </StyledMenu>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
