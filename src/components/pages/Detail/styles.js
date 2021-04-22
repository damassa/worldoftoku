import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  detailWrapper: {
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100%',
  },
  DetailCard: {
    paddingTop: 20,
    width: '100%',
  },
  SerieDetail: {
    height: 100,
  },
  CategoryTag: {
    height: 100,
    '& strong': {
      cursor: 'pointer',
      padding: '10px 10px',
      marginTop: 20,
      transition: '.2s',
      borderRadius: 10,
      backgroundColor: '#D62846',
      color: '#FAEAFF',
      fontSize: 12,
    },
  },
  SeriePlot: {
    minHeight: 120,
    padding: '0 0 30px 0',
  },
  DetailInfo: {
    paddingTop: 20,
  },
  OpeningVideo: {
    width: '100%',
  },
}));

export default useStyles;
