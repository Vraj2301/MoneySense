import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Slideshow() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings}>
      <div>
        <img src="funn1.jpg" alt="Functionality 1" />
      </div>
      <div>
        <img src="./fun2.jpg" alt="Functionality 2" />
      </div>
      {/* Add more slides/images as needed */}
    </Slider>
  );
}

export default Slideshow;