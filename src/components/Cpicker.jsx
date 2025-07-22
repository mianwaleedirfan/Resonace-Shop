import React, { useState } from 'react';
import '../styles/Cpicker.css';

// Importing images from src/assets/
import yellowImg from '../assets/yellow.png';
import greenImg from '../assets/green.png';
import redImg from '../assets/red.png';

const COLORS = [
  {
    name: "Yellow",
    colorCode: "#FFD500",
    imgSrc: yellowImg,
  },
  {
    name: "Olive Green",
    colorCode: "#808000",
    imgSrc: greenImg,
  },
  {
    name: "Brick Red",
    colorCode: "#B22222",
    imgSrc: redImg,
  },
];

function Cpicker() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = COLORS[selectedIndex];

  const leftIndex = (selectedIndex + COLORS.length - 1) % COLORS.length;
  const rightIndex = (selectedIndex + 1) % COLORS.length;

  return (
    <div className="cpicker-container">
      <h1 className="cpicker-heading">Your Style. Your Sound.</h1>

      <div className="cpicker-gallery">
        <img
          src={COLORS[leftIndex].imgSrc}
          alt={`${COLORS[leftIndex].name} headphones`}
          className="cpicker-img blurred"
        />

        <img
          key={selected.imgSrc}
          src={selected.imgSrc}
          alt={`${selected.name} headphones`}
          className="cpicker-img main"
        />

        <img
          src={COLORS[rightIndex].imgSrc}
          alt={`${COLORS[rightIndex].name} headphones`}
          className="cpicker-img blurred"
        />
      </div>

      <div className="cpicker-swatches">
        {COLORS.map((color, i) => (
          <button
            key={color.name}
            className={`cpicker-swatch ${selectedIndex === i ? 'active' : ''}`}
            style={{ backgroundColor: color.colorCode }}
            onClick={() => setSelectedIndex(i)}
            aria-label={`Choose ${color.name}`}
          ></button>
        ))}
      </div>

      <p className="cpicker-caption">Choose a color that fits your flow.</p>
    </div>
  );
}

export default Cpicker;
