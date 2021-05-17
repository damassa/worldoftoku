import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  headerBg: {
    backgroundColor: '#382D6B',
  },
  headerContainer: {
    height: 100,
    color: '#f6f6f4',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
  },
  category: {
    display: 'flex',
    alignItems: 'center',
  },
  search: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  inputSearch: {
    backgroundColor: '#f6f6f4',
  },
  user: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    cursor: 'pointer',
  },
}));

export default useStyles;
