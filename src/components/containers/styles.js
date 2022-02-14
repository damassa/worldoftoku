import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  notLoggedWrapper: {
    backgroundColor: '#382D6B',
    height: '100vh',
    alignItems: 'center',
  },
  notLoggedContainer: {
    maxWidth: '95%',
    width: 400,
    background: '#FAEAFF',
    padding: '30px 30px 70px',
    borderRadius: 5,
    boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
  },
  notLoggedTitle: {
    textAlign: 'center',
  },
}));

export default useStyles;
