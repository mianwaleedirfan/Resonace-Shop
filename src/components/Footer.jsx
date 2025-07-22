import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-tagline">
        <h2 className="footer-heading">Sound. Presence. Purpose.</h2>
        <p className="footer-subtext">
          Focused on crafting immersive audio experiences. We believe sound should not just be heard—it should move you.
        </p>
        <div className="footer-buttons">
          <button className="pill-button">Aura Pro II</button>
          <button className="pill-button">Flow II</button>
        </div>
      </div>

      <div className="footer-bar">
        <div className="footer-brand">
          <svg
            className="brand-logo"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M8 12l2 2 4-4" />
          </svg>
          <span className="brand-text">Resonance</span>
        </div>

        <div className="footer-copyright">
          © 2025 Resonance. All rights reserved.
        </div>

        <div className="footer-icons">
          <a href="#" aria-label="Twitter" className="icon-link">
            <svg
              className="icon"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14.86 4.48 4.48 0 001.98-2.48 9.12 9.12 0 01-2.88 1.1 4.52 4.52 0 00-7.7 4.12A12.85 12.85 0 013 4.79a4.52 4.52 0 001.4 6.04 4.48 4.48 0 01-2.05-.56v.06a4.52 4.52 0 003.6 4.43 4.48 4.48 0 01-2.04.08 4.53 4.53 0 004.22 3.14A9 9 0 013 19.54 12.77 12.77 0 009.29 21c7.55 0 11.68-6.26 11.68-11.68 0-.18 0-.35-.01-.53A8.18 8.18 0 0023 3z" />
            </svg>
          </a>
          <a href="#" aria-label="Facebook" className="icon-link">
            <svg
              className="icon"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M22 12a10 10 0 10-11.6 9.87v-6.98h-3v-2.9h3v-2.2c0-3 1.79-4.67 4.54-4.67 1.31 0 2.68.24 2.68.24v3h-1.53c-1.5 0-1.97.93-1.97 1.89v2.75h3.35l-.54 2.9h-2.81v6.98A10 10 0 0022 12z" />
            </svg>
          </a>
          <a href="#" aria-label="Legal" className="icon-link">
            <svg
              className="icon"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M12 1v22M5 12h14" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
