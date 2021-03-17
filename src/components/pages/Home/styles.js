import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  homeContainer: {
    backgroundColor: '#FAEAFF',
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
      border: '1px solid',
      backgroundColor: '#D85956',
      color: '#FAEAFF',
    },
  },
  homeImage: {
    display: 'flex',
    justifyContent: 'flex-end',
    '& img': {
      width: '70%',
    },
  },
}));

export default useStyles;
