import React from 'react';
import '../styles/Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="custom-navbar">
  <div className="navbar-inner">
    {/* Left side: brand */}
    <a className="navbar-brand custom-brand" href="#">
      <span className="logo-icon">🔊</span> <span className="brand-text">Resonance</span>
    </a>

    {/* Right side: links + button */}
    <div className="nav-right">
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li> <Link to="/specs">Tech Specs</Link></li>
      </ul>
      <Link to="/compare">
  <button className="compare-button">Compare</button>
</Link>

    </div>
  </div>
</nav>

  );
}

export default Header;
