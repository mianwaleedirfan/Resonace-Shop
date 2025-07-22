import React from 'react';
import '../styles/Audiotechinfo.css';


function Audiotechinfo() {
  return (
    <section className="features-section" aria-label="Audio Technology Features">
      <div className="features-left">
        <h2>
          Audio<br />
          Technology
        </h2>
      </div>
      <div className="features-right">
        <p>Custom-tuned 40mm Resonance™ drivers for deep bass.</p>
        <p>Ultra-low distortion signal processing.</p>
        <p>Adaptive Sound Sculpting™ — real-time EQ.</p>
        <p>Spatial Audio Calibration with dynamic head tracking.</p>
        <p>Natural Voice Isolation for calls, focus, and immersive listening.</p>
        <p>Pressure-balancing acoustic vents for long-wear comfort.</p>
      </div>
    </section>
  );
}

export default Audiotechinfo;
