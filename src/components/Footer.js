import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          BOOK YOUR APPOINTMENT TODAY
        </p>
        <p className="footer-subscription-text">
          Follow me on social media ↓ ↓ ↓ 
        </p>
      </section>

      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              Cuts By Mase
              <i className="fas fa-fire" />
            </Link>
          </div>
          <small className="website-rights">Cuts By Mase © 2022</small>
          <div className="social-icons">
            
            <Link
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "https://www.instagram.com/mason14mcclain/";
              }}
              className="social-icon-link instagram"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram" />
            </Link>
            
            
            
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
