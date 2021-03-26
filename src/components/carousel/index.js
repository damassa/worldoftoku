import React from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import SerieCard from '../serieCard';
import { Hidden } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import './styles.css';

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
  var settings = {
    className: 'slideStyles',
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 3840,
        settings: {
          slidesToShow: 8,
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
      <SerieCard />
      <SerieCard />
      <SerieCard />
      <SerieCard />
      <SerieCard />
      <SerieCard />
      <SerieCard />
      <SerieCard />
      <SerieCard />
      <SerieCard />
    </Slider>
  );
};
export default Carousel;

SamplePrevArrow.propTypes = {
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

SampleNextArrow.propTypes = {
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
