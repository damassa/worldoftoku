import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';

import useStyles from '../styles/components/serieDetail';

export default function DetailCard(props) {
  const classes = useStyles();
  const { name, year, plot, category, imageBG, duration } = props;

  return (
    <Grid
      container
      className={classes.detailWrapper}
      style={{ backgroundImage: `url(${imageBG})` }}
      justify="center"
    >
      <Grid item xs={11}>
        <Grid container>
          <Grid item xs={8} className={classes.SerieTitle}>
            <h1>{name}</h1>
          </Grid>
          <Grid item xs={12} className={classes.SerieYearCategory}>
            <strong>{year}</strong>
            <strong>{category}</strong>
            <strong>{duration}</strong>
          </Grid>
          <Grid item xs={8} className={classes.SeriePlot}>
            <p>{plot}</p>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

DetailCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  plot: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  imageBG: PropTypes.string.isRequired,
};
