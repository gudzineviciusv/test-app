import React from 'react';
import Search from '../components/Search';
import '../CSS/Hero.css';
import heroImage from '../images/hero-image.png';

function Hero() {
  return (
    <div className="hero">
      <div className="hero__left">
        <Search />
      </div>
      <div className="hero__right">
        <img
          className="hero__image"
          src={heroImage}
          alt="Hero Image"
        />
      </div>
    </div>
  );
}

export default Hero;

