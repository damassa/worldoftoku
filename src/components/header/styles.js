import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  headerContainer: {
    backgroundColor: 'blue',
    height: 80,
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
  },
  user: {
    display: 'flex',
    alignItems: 'center',
  },
}));

export default useStyles;
