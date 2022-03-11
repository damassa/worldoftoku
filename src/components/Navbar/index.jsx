import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { Search as SearchIcon } from '@material-ui/icons';
import { clearUserOnStore } from '../../store/modules/user/actions';
import { OutlinedInput, InputAdornment } from '@material-ui/core';

export default function Header() {
  const [open, setOpen] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(clearUserOnStore());
    localStorage.removeItem('token');
  };

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
    <nav className="navbar">
      <div className="navbarContent">
        <Link to="/" className="logo">
          Logo
        </Link>
        <div className="search">
          <form onSubmit={handleSubmit}>
            <OutlinedInput
              placeholder="Buscar por séries.."
              inputProps={{ 'aria-label': 'search' }}
              type="name"
              name="name"
              variant="outlined"
              endAdornment={
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              }
            />
          </form>
        </div>
        <button
          className="hamburger"
          onClick={() => setOpen(!open)}
          type="button"
        >
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </button>
        <div className={`menu ${open ? 'menu-open' : ''}`}>
          <div className="menuItem">
            <Link className="menuLink" to="/categories">
              Categorias
            </Link>
          </div>
          <div className="menuItem">
            <Link className="menuLink" to="/favorites">
              Minha lista
            </Link>
          </div>
          <div className="menuItem">
            <Link className="menuLink" to="/editProfile">
              Minha conta
            </Link>
          </div>
          <button className="btn" onClick={handleLogout}>
            Sair
          </button>
        </div>
      </div>
    </nav>
  );
}
