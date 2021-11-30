import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  searchContainer: {
    padding: '20px 0 70px 0',
    backgroundColor: '#e3dfea',
  },
  listSeries: {
    position: 'relative',
    '& h1': {
      margin: '0 0 14px',
      fontSize: 24,
      fontWeight: 'bold',
    },
  },
  searchCardContainer: {
    margin: '20px 0',
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
    bottomSerieName: {
      position: 'absolute',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: 75,
      left: 0,
      bottom: -5,
      opacity: 0,
      background:
        'linear-gradient(360deg, rgb(18, 18, 18) 0%, rgba(18, 18, 18, 0.81) 70%, rgba(18, 18, 18, 0) 100%)',
      transition: 'all 0.25s ease 0s',
      '& span': {
        maxWidth: '80%',
        paddingTop: 10,
        color: 'rgb(232,231,220)',
        textAlign: 'center',
        fontSize: 14,
      },
    },
  },
}));

export default useStyles;
