import React from 'react';
import './HeroImg.css';

const HeroImg = ({imgPath}) =>
  <div className="hero-img" style={{backgroundImage: `url(${imgPath})`}} />

export default HeroImg;
