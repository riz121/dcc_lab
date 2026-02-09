import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setOpen(false);

  const links = [
    ['/', 'Home'],
    ['/about', 'About'],
    ['/professor', 'Professor'],
    ['/members', 'Members'],
    ['/research', 'Research'],
    ['/publications', 'Publications'],
    ['/projects', 'Projects'],
    ['/news', 'News'],
    ['/contact', 'Contact'],
  ];

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="navbar-inner">
        <Link to="/" className="navbar-logo">
          <span className="logo-icon">DC</span>
          DCC Lab
        </Link>

        <div className={`navbar-links${open ? ' open' : ''}`}>
          {links.map(([to, label]) => (
            <NavLink key={to} to={to} onClick={close} end={to === '/'}>
              {label}
            </NavLink>
          ))}
        </div>

        <button className="navbar-toggle" onClick={() => setOpen(!open)}>
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
}
