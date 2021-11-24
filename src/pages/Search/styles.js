import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  searchContainer: {
    padding: '20px 0 70px 0',
    backgroundColor: '#e3dfea',
  },
  searchContent: {
    position: 'relative',
    '& h1': {
      margin: '0 0 14px',
      fontSize: 24,
      fontWeight: 'bold',
    },
  },
  searchCardContainer: {
    margin: '8px 0',
  },
  searchCard: {
    width: 200,
    height: 300,
    position: 'relative',
    border: 'none',
    outline: 'none',
    background: 'none',
    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'center',
    },
  },
}));

export default useStyles;
