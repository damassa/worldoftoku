import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  slideStyles: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  card: {
    width: 200,
    height: '100%',
    cursor: 'pointer',
    padding: '0 5px',
    '& img': {
      width: '100%',
      height: 240,
      objectFit: 'cover',
      objectPosition: 'center',
    },
  },
}));

export default useStyles;
