import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  homeContainer: {
    backgroundColor: '#E3DFEA',
    padding: '40px 0 50px 0',
  },
  homeContainerLeft: {
    padding: '40px 0 30px 0',
    '& h1': {
      fontSize: 38,
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
  homeImage: {
    display: 'flex',
    justifyContent: 'space-evenly',
    '& img': {
      width: '70%',
    },
  },
}));

export default useStyles;
