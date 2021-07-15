import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  footer: {
    marginTop: -120,
    height: 120,
    backgroundColor: '#382D6B',
    color: '#f6f6f4',
    '& h2, h3': {
      textAlign: 'center',
      fontWeight: 'normal',
    },
  },
}));

export default useStyles;
