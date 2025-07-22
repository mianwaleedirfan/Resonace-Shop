import React from 'react';
import '../styles/Banner.css';
import bannerImg from '../assets/Banner.png';

function Banner() {
  return (
    <section className="banner">
      <h2 className="sub-text">Aura Pro II</h2>
      <img className="headphones-image" src={bannerImg} alt="Headphones" />
      <h1 className="main-text">Resonance</h1>
    </section>
  );
}

export default Banner;
