import React from 'react';
import Slider from 'react-slick';
import SerieCard from '../serieCard';

import './styles.css';

const Carousel = () => {
  var settings = {
    className: 'slideStyles',
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
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
    </Slider>
  );
};
export default Carousel;
