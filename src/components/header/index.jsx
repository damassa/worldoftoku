import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
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
import PersonIcon from '@material-ui/icons/Person';
import MoreIcon from '@material-ui/icons/MoreVert';

export default function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const history = useHistory();

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(clearUserOnStore());
    localStorage.removeItem('token');
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
            <Grid item className="menuTitle">
              Minha lista
            </Grid>
          </Grid>
        </IconButton>
      </MenuItem>
      <MenuItem>
        <IconButton color="inherit">
          <Grid container>
            <Grid item className="menuTitle">
              <Link className="link" to="/categories">
                Categorias
              </Link>
            </Grid>
          </Grid>
        </IconButton>
      </MenuItem>
      <MenuItem>
        <IconButton color="inherit">
          <Grid container>
            <Grid item className="menuTitle">
              <Link color="inherit" to="/categories">
                Minha conta
              </Link>
            </Grid>
          </Grid>
        </IconButton>
      </MenuItem>
      <MenuItem>
        <IconButton color="inherit">
          <Grid container>
            <Grid item className="menuTitle">
              <Grid container onClick={handleLogout}>
                Logout
              </Grid>
            </Grid>
          </Grid>
        </IconButton>
      </MenuItem>
    </Menu>
  );

  history.listen((location) => {
    if (
      !location.pathname.startsWith('/search/') &&
      document.querySelector('input[type=name]')
    ) {
      document.querySelector('input[type=name]').value = '';
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = document.querySelector('input[type=name]').value;

    if (name === null) {
      history.push('/');
    } else {
      history.push(`/search/${name}`);
    }
  };

  return (
    <Grid container justify="center" className="navbar">
      <Grid item xs={10}>
        <Grid container className="grow">
          <AppBar elevation={0} position="static" className="navbar">
            <Toolbar>
              <Typography className="title" noWrap>
                <Link to="/" className="link">
                  Logo
                </Link>
              </Typography>
              <Grid item className="search">
                <form onSubmit={handleSubmit}>
                  <Grid container>
                    <Grid item className="searchIcon">
                      <SearchIcon />
                    </Grid>
                  </Grid>
                  <InputBase
                    type="name"
                    name="name"
                    placeholder="Buscar…"
                    classes={{
                      root: 'inputRoot',
                      input: 'inputInput',
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                  />
                </form>
              </Grid>
              <Grid item className="grow" />
              <Grid item className="sectionDesktop">
                <IconButton color="inherit">
                  <Grid container>
                    <Grid item className="menuTitle">
                      <Link className="link" to="/favorites">
                        Minha lista
                      </Link>
                    </Grid>
                  </Grid>
                </IconButton>
                <IconButton color="inherit">
                  <Grid container>
                    <Grid item className="menuTitle">
                      <Link className="link" to="/categories">
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
                  <PersonIcon className="personIcon" />
                </IconButton>
              </Grid>
              <div className="sectionMobile">
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
