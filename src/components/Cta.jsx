import React from 'react';
import '../styles/Cta.css'; // Import your CSS file
import CtaImage from '../assets/Cta.png'; // Import your image

const Cta = () => {
  return (
    <section className="hero" style={{ backgroundImage: `url(${CtaImage})` }}>
      <div className="overlay"></div>
      <div className="hero-content">
        <h1>Dreamlike Sound</h1>
        <p>Starting at $320 — Available Now.</p>
        <button className="cta-button">Buy Now</button>
      </div>
    </section>
  );
};

export default Cta;
