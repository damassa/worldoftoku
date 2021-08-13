import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  registerContainer: {
    padding: '20px 0 70px 0',
  },
  registerTitle: {
    '& h1': {
      textAlign: 'center',
    },
  },
  inputWrapper: {
    maxWidth: 320,
  },
  input: {
    marginTop: 10,
    width: '100%',
  },
  registerFormButton: {
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
