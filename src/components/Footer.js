import React from 'react';
import '../styles/Footer.css';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import logos from '../assets/logos.jpg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <div className="footer-logo">
            {/* <img src="logos.jpg" alt="logos" /> */}
            <img src={logos} alt=" " className="navbar-logo" />
          </div>
          <div className="footer-description">
            <h3>Interstellar Adventures Space Excursions</h3>
            <p>
              IASE explores the unknown in air and space, innovates for the
              benefit of humanity, and inspires the world through discovery.
            </p>
            <p><a href="#">About IASE's Mission</a></p>
            <p><a href="#">Join Us <span>&#x2192;</span></a></p>
          </div>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h4>Home</h4>
            <a href="#">News & Events</a>
            <a href="#">Multimedia</a>
            <a href="#">IASE+ <span className="live-badge">LIVE</span></a>
            <a href="#">Missions</a>
          </div>
          <div className="footer-column">
            <h4>Humans in Space</h4>
            <a href="#">Earth & Climate</a>
            <a href="#">The Solar System</a>
            <a href="#">The Universe</a>
            <a href="#">Science</a>
          </div>
          <div className="footer-column">
            <h4>Aeronautics</h4>
            <a href="#">Technology</a>
            <a href="#">Learning Resources</a>
            <a href="#">About IASE</a>
            <a href="#">IASE en Español</a>
          </div>
        </div>

        <div className="footer-social">
          <h4>Follow IASE</h4>
          <div className="social-icons">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaYoutube /></a>
          </div>
          <p><a href="#">More IASE Social Accounts</a></p>
          <p><a href="#">IASE Newsletters</a></p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          Sitemap | For Media | Privacy Policy | FOIA | No FEAR Act | Office of the IG | Budget & Annual Reports | Agency Financial Reports | Contact IASE | Accessibility
        </p>
        <p>Page Last Updated: <span>Recently</span></p>
        <p>Page Designing and Frontend Functionalities: <span>Sagarika Singh</span></p>
        <p>Backend Functanlities: <span>Kunal Srivastava</span></p>
        <p>Responsible IASE Official for Science: <span>Sagarika Singh and Kunal Srivastava</span></p>
      </div>
    </footer>
  );
};

export default Footer;
