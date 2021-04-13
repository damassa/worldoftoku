import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  homeContainer: {
    backgroundColor: '#E3DFEA',
    padding: '20px 0 70px 0',
  },
  homeContent: {
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
    },
  },
  homeContainerLeft: {
    padding: '40px 0 30px 0',
    '& h1': {
      fontSize: 40,
      [theme.breakpoints.down('md')]: {
        fontSize: 30,
      },
      [theme.breakpoints.down('sm')]: {
        textAlign: 'center',
      },
    },
    '& p': {
      fontSize: 20,
      [theme.breakpoints.down('sm')]: {
        textAlign: 'center',
      },
    },
    '& button': {
      padding: '10px 20px',
      borderRadius: 10,
      cursor: 'pointer',
      marginTop: 20,
      border: 'none',
      backgroundColor: '#D62846',
      transition: '.2s',
      color: '#FAEAFF',
      '&:hover': {
        backgroundColor: '#C6223F',
        transition: '.2s',
      },
    },
  },
  homeButton: {
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
  },
  homeImage: {
    display: 'flex',
    justifyContent: 'space-evenly',
    '& img': {
      width: '70%',
      [theme.breakpoints.down('sm')]: {
        width: '50%',
      },
    },
  },
  homeTitle: {
    padding: '60px 0 20px 0',
  },
}));

export default useStyles;
