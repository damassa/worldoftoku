import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import api from '../../services/api';
import { Grid, Hidden } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import useStyles from './styles';

function SampleNextArrow(props) {
  const { className, onClick } = props;

  return (
    <Hidden smDown>
      <ArrowForwardIosIcon
        className={className}
        onClick={onClick}
        style={{ color: '#505050', width: '20px', height: '20px' }}
      />
    </Hidden>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <Hidden smDown>
      <ArrowBackIosIcon
        className={className}
        onClick={onClick}
        style={{ color: '#505050', width: '20px', height: '20px' }}
      />
    </Hidden>
  );
}

const Carousel = () => {
  const [data, setData] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    api
      .get('series')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  var settings = {
    dots: false,
    autoplay: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 2,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 3840,
        settings: {
          slidesToShow: 10,
        },
      },
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 7,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 535,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {data.map((serie) => (
        <Grid key={serie._id} container justify="center">
          <Link to={`/detail/${serie._id}`}>
            <Grid item xs={12} className={classes.card}>
              <img src={serie.image} alt="Serie" title={serie.name} />
            </Grid>
          </Link>
        </Grid>
      ))}
    </Slider>
  );
};
export default Carousel;

SamplePrevArrow.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
};

SampleNextArrow.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
};
