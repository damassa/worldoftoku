import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  card: {
    width: 200,
    height: 'fit-content',
    '& img': {
      width: '100%',
    },
  },
}));

export default useStyles;
