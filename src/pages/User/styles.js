import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  UserWrapper: {
    padding: '20px 0 50px 0',
  },
  formButton: {
    display: 'flex',
    justifyContent: 'flex-start',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
    },
    '& button': {
      padding: '10px 20px',
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
