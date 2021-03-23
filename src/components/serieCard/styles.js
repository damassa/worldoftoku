import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  card: {
    width: 200,
    height: 'fit-content',
    marginLeft: 5,
    '& img': {
      width: '100%',
    },
  },
}));

export default useStyles;
