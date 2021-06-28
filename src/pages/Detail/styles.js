import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  DetailWrapper: {
    padding: '20px 0 70px 0',
  },
  DetailContent: {
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
    },
  },
  DetailImage: {
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center',
    },
    '& img': {
      maxWidth: '100%',
      maxHeight: 300,
    },
  },
  SerieDetail: {
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
    },
    '& h1': {
      fontSize: 24,
    },
    '& h2': {
      fontSize: 18,
      fontWeight: 'normal',
    },
    '& h4': {
      fontSize: 14,
      fontWeight: 'normal',
    },
  },
  CategoryTag: {
    height: 100,
    display: 'flex',
    flexFlow: 'row wrap',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'space-evenly',
    },
    '& div': {
      marginRight: 5,
      cursor: 'pointer',
      padding: '10px 10px',
      transition: '.2s',
      borderRadius: 10,
      backgroundColor: '#66569a',
      color: '#FAEAFF',
      fontSize: 12,
      height: 'min-content',
    },
  },
  SeriePlot: {
    minHeight: 120,
    padding: '0 0 30px 0',
    '& h2': {
      [theme.breakpoints.down('sm')]: {
        textAlign: 'center',
      },
    },
    '& p': {
      [theme.breakpoints.down('sm')]: {
        textAlign: 'justify',
      },
    },
  },
  OpeningVideo: {
    width: '100%',
  },
}));

export default useStyles;
