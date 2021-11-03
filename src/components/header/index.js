import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import { clearUserOnStore } from '../../store/modules/user/actions';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';

import useStyles from './styles';

export default function Header() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(clearUserOnStore());
  };

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
        <Link color="inherit" to="/editProfile">
          Minha conta
        </Link>
      </MenuItem>
      <MenuItem onClick={handleLogout}>Logout</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton color="inherit">
          <Grid container>
            <Grid item className={classes.menuTitle}>
              Minha lista
            </Grid>
          </Grid>
        </IconButton>
      </MenuItem>
      <MenuItem>
        <IconButton color="inherit">
          <Grid container>
            <Grid item className={classes.menuTitle}>
              <Link className={classes.link} to="/byCategory">
                Categorias
              </Link>
            </Grid>
          </Grid>
        </IconButton>
      </MenuItem>
      <MenuItem>
        <IconButton color="inherit">
          <Grid container>
            <Grid item className={classes.menuTitle}>
              <Link color="inherit" to="/editProfile">
                Minha conta
              </Link>
            </Grid>
          </Grid>
        </IconButton>
      </MenuItem>
      <MenuItem>
        <IconButton color="inherit">
          <Grid container>
            <Grid item className={classes.menuTitle}>
              <Grid container onClick={handleLogout}>
                Logout
              </Grid>
            </Grid>
          </Grid>
        </IconButton>
      </MenuItem>
    </Menu>
  );

  return (
    <Grid container justify="center" className={classes.navbar}>
      <Grid item xs={10}>
        <Grid container className={classes.grow}>
          <AppBar elevation={0} position="static" className={classes.navbar}>
            <Toolbar>
              <Typography className={classes.title} noWrap>
                <Link to="/" className={classes.link}>
                  Logo
                </Link>
              </Typography>
              <Grid item className={classes.search}>
                <Grid container>
                  <Grid item className={classes.searchIcon}>
                    <SearchIcon />
                  </Grid>
                </Grid>
                <InputBase
                  placeholder="Buscar…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ 'aria-label': 'search' }}
                />
              </Grid>
              <Grid item className={classes.grow} />
              <Grid item className={classes.sectionDesktop}>
                <IconButton color="inherit">
                  <Grid container>
                    <Grid item className={classes.menuTitle}>
                      <Link className={classes.link} to="/favorites">
                        Minha lista
                      </Link>
                    </Grid>
                  </Grid>
                </IconButton>
                <IconButton color="inherit">
                  <Grid container>
                    <Grid item className={classes.menuTitle}>
                      <Link className={classes.link} to="/byCategory">
                        Categorias
                      </Link>
                    </Grid>
                  </Grid>
                </IconButton>
                <IconButton
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleOpen}
                  color="inherit"
                >
                  <AccountCircle className={classes.accountCircle} />
                </IconButton>
              </Grid>
              <div className={classes.sectionMobile}>
                <IconButton
                  aria-label="show more"
                  aria-controls={mobileMenuId}
                  aria-haspopup="true"
                  onClick={handleMobileMenuOpen}
                  color="inherit"
                >
                  <MoreIcon />
                </IconButton>
              </div>
            </Toolbar>
          </AppBar>
          {renderMobileMenu}
          {renderMenu}
        </Grid>
      </Grid>
    </Grid>
  );
}
