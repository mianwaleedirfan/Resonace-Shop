import React from 'react';
import '../styles/Pdetail.css';

// Import local images
import pd1 from '../assets/pd1.png';
import pd2 from '../assets/pd2.png';
import pd3 from '../assets/pd3.png';

function Pdetail() {
  return (
    <section className="detail-section">
      <h2>Every Detail Matters</h2>
      <p className="subtitle">From the stitch to the signal, precision lives here.</p>

      <div className="image-grid">
        <img src={pd1} alt="Product Detail 1" />
        <img src={pd2} alt="Product Detail 2" />
        <img src={pd3} alt="Product Detail 3" />
      </div>
    </section>
  );
}

export default Pdetail;
