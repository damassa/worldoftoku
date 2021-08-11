import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  loginWrapper: {
    padding: '20px 0 70px 0',
  },
  loginContainer: {
    maxWidth: 320,
  },
  loginTitle: {
    '& h1': {
      textAlign: 'center',
    },
  },
  input: {
    marginTop: 10,
    width: '100%',
  },
  loginFormButton: {
    display: 'flex',
    justifyContent: 'center',
    '& button': {
      padding: '10px 40px',
      borderRadius: 10,
      cursor: 'pointer',
      marginTop: 20,
      border: 'none',
      backgroundColor: '#66569a',
      transition: '.2s',
      color: '#FAEAFF',
      '&:hover': {
        backgroundColor: '#6e5da8',
        transition: '.2s',
      },
    },
  },
}));

export default useStyles;
