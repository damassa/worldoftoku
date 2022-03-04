import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { Search as SearchIcon } from '@material-ui/icons';
import { clearUserOnStore } from '../../store/modules/user/actions';
import { OutlinedInput, InputAdornment } from '@material-ui/core';
import ArrowDropdown from '@material-ui/icons/ArrowDropDown';

export default function Header() {
  const [menu, setMenu] = useState(false);
  const [hold, setHold] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  let y = window.positionY;

  const closeOnClick = () => {
    setMenu(false);
  };

  useEffect(() => {
    y > 0 ? setHold(true) : setHold(false);
  }, [y, hold]);

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
        <div className="mobile" onClick={() => setMenu(!menu)} />
        <div className="menu" onClick={closeOnClick} open={menu}>
          <Link to="/categories">Categorias</Link>
          <Link to="/favorites">Minha lista</Link>
          <Link to="/editProfile">Minha conta</Link>
          <button className="logoutBtn" onClick={handleLogout}>
            Sair
          </button>
        </div>
      </div>
    </nav>
  );
}
