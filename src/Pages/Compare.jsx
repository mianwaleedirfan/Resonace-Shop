import React from 'react';
import Header from '../components/Header';
import '../styles/Compare.css';

import flowII from '../assets/flowII.png';
import auraPro from '../assets/green.png'; // ✅ Rename file if needed
import Footer from '../components/Footer';

function Compare() {
  return (
    <div>
      <Header />
      <section className="comparison-container">
        <div className="product-card">
          <img src={auraPro} alt="Aura Pro II" className="product-image" />
          <h2 className="product-name">Aura Pro II</h2>
          <p className="product-price">Starting at $320</p>
          <button className="buy-button">Buy Now</button>
          <ul className="feature-list">
            <li><span className="icon">🧠</span> R1 Chip</li>
            <li><span className="icon">🔇</span> Active Noise Cancellation</li>
            <li><span className="icon">🎧</span> Personalized Spatial Audio</li>
            <li><span className="icon">🎶</span> Lossless Audio</li>
            <li><span className="icon">🛡️</span> Hearing Protection</li>
            <li><span className="icon">🤏</span> Touch Sensor</li>
            <li><span className="icon">🔋</span> 30hr Battery</li>
            <li><span className="icon">💧</span> IPX4 Water Resistance</li>
            <li><span className="icon">🎙️</span> 6 Microphones</li>
          </ul>
        </div>

        <div className="product-card">
          <img src={flowII} alt="Flow II" className="product-image" />
          <h2 className="product-name">Flow II</h2>
          <p className="product-price">Starting at $320</p>
          <button className="buy-button">Buy Now</button>
          <ul className="feature-list">
            <li><span className="icon">🧠</span> R2 Chip</li>
            <li><span className="icon">🔇</span> Active Noise Cancellation</li>
            <li><span className="icon">🎧</span> Personalized Spatial Audio</li>
            <li><span className="icon">🎶</span> Lossless Audio</li>
            <li><span className="icon">🛡️</span> Hearing Protection</li>
            <li><span className="icon">🤏</span> Touch Sensor</li>
            <li><span className="icon">🔋</span> 36hr Battery</li>
            <li><span className="icon">💧</span> IPX5 Water Resistance</li>
            <li><span className="icon">🎙️</span> 8 Microphones</li>
          </ul>
        </div>
      </section>
      <Footer/>
    </div>
  );
}

export default Compare;
