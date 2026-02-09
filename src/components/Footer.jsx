import { Link } from 'react-router-dom';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-col">
          <h3>DCC Lab</h3>
          <p>
            Distributed &amp; Cloud Computing Laboratory at Hanyang University.
            Pioneering research in cloud computing, edge intelligence, IoT, and
            next-generation distributed systems.
          </p>
        </div>

        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/research">Research</Link></li>
            <li><Link to="/publications">Publications</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Contact</h3>
          <div className="footer-contact-item">
            <FaMapMarkerAlt />
            <span>Hanyang University, 222 Wangsimni-ro, Seongdong-gu, Seoul 04763, South Korea</span>
          </div>
          <div className="footer-contact-item">
            <FaEnvelope />
            <span>dcclab@hanyang.ac.kr</span>
          </div>
          <div className="footer-contact-item">
            <FaPhone />
            <span>+82-2-2220-XXXX</span>
          </div>
        </div>

        <div className="footer-col">
          <h3>Connect</h3>
          <ul>
            <li><a href="https://scholar.google.com" target="_blank" rel="noopener noreferrer">Google Scholar</a></li>
            <li><a href="https://www.researchgate.net" target="_blank" rel="noopener noreferrer">ResearchGate</a></li>
            <li><a href="https://dblp.org" target="_blank" rel="noopener noreferrer">DBLP</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} DCC Lab &mdash; Hanyang University. All rights reserved.
      </div>
    </footer>
  );
}
