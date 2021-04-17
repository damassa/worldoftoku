import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  detailWrapper: {
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100%',
  },
  DetailCard: {
    padding: 10,
  },
  SerieYearCategory: {
    display: 'flex',
    padding: '2px 0 40px 0',
    '& strong': {
      marginRight: 10,
    },
  },
  SeriePlot: {
    display: 'flex',
    alignItems: 'flex-start',
    minHeight: 120,
    padding: '0 0 30px 0',
  },
}));

export default useStyles;
