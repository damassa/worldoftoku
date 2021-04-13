import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: '#13003D',
    color: '#f6f6f4',
    '& h2, h3': {
      textAlign: 'center',
      fontWeight: 'normal',
    },
  },
}));

export default useStyles;
