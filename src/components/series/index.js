import React from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import ForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import BackIosIcon from '@material-ui/icons/ArrowBackIos';
import SerieCard from '../serieCard';

import { Grid, Hidden } from '@material-ui/core';

import useStyles from './styles';

function SampleNextArrow(props) {
  const { className, onClick } = props;

  return (
    <Hidden smDown>
      <ForwardIosIcon
        className={className}
        onClick={onClick}
        style={{ color: '#505050' }}
      />
    </Hidden>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;

  return (
    <Hidden smDown>
      <BackIosIcon
        className={className}
        onClick={onClick}
        style={{ color: '#505050' }}
      />
    </Hidden>
  );
}

const Series = () => {
  const classes = useStyles();
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <Grid container className={classes.seriesContainer} justify="center">
      <Grid item xs={12}>
        <Grid container justify="center">
          <Grid item xs={10}>
            <h1>Clássicos</h1>
            <Grid container>
              <Grid item xs={12} className={classes.sliderContainer}>
                <Slider {...settings}>
                  <SerieCard />
                  <SerieCard />
                  <SerieCard />
                  <SerieCard />
                  <SerieCard />
                  <SerieCard />
                  <SerieCard />
                  <SerieCard />
                </Slider>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Series;

SamplePrevArrow.propTypes = {
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

SampleNextArrow.propTypes = {
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
