import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import debt from './debt_catoon.avif';
import expense from './expense.avif';
import invest from './cartoon_invest.avif';
import saving from './sav.jpg';

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

  const slideStyle = {
    display: 'flex',
    alignItems: 'center',
    background: 'none',
    border: 'none',
    width: '100%', // Set the width to 100% to span the entire screen
  };

  return (
    <div style={{ width: '100%' }}> {/* Set the width of the slider container to 100% */}
      <Slider {...settings}>
        <div>
          <a href='/debt_management' style={{ textDecoration: "none" }}>
            <div style={slideStyle}>
              <img src={debt} alt="Debt" style={{ height: "400px", width: "100%", objectFit: "cover" }} />
              <h1 style={{ marginLeft: '20px' }}>Debt Management</h1>
            </div>
          </a>
        </div>
        <div>
          <a href='/budgeting' style={{ textDecoration: "none" }}>
            <div style={slideStyle}>
              <img src={expense} alt="Expense" style={{ height: "400px", width: "100%", objectFit: "cover" }} />
              <h1 style={{ marginLeft: '20px' }}>Expense Tracker</h1>
            </div>
          </a>
        </div>
        <div>
          <a href='/investing' style={{ textDecoration: "none" }}>
            <div style={slideStyle}>
              <img src={invest} alt="Invest" style={{ height: "400px", width: "100%", objectFit: "cover" }} />
              <h1 style={{ marginLeft: '20px' }}>Investment Calculator</h1>
            </div>
          </a>
        </div>
        <div>
          <a href='/budgeting' style={{ textDecoration: "none" }}>
            <div style={slideStyle}>
              <img src={saving} alt="Saving" style={{ height: "400px", width: "100%", objectFit: "cover" }} />
              <h1 style={{ marginLeft: '20px' }}>Saving Goals</h1>
            </div>
          </a>
        </div>
      </Slider>
    </div>
  );
}

export default Slideshow;
