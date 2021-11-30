import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  loginWrapper: {
    backgroundColor: '#382D6B',
    height: '100vh',
    alignItems: 'center',
  },
  loginContainer: {
    maxWidth: '95%',
    width: 400,
    background: '#FAEAFF',
    padding: '30px 30px 70px',
    borderRadius: 5,
    boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
  },
  loginTitle: {
    textAlign: 'center',
  },
  loginForm: {
    width: '100%',
  },
  input: {
    marginTop: 10,
    width: '100%',
    justifyContent: 'center',
  },
  loginFormButton: {
    display: 'flex',
    justifyContent: 'center',
    '& button': {
      width: '100%',
      padding: '15px 40px',
      borderRadius: 5,
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
  forgotPassword: {
    top: 45,
    position: 'relative',
  },
}));

export default useStyles;
