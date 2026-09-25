import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import { EVENT } from '../event';

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Participate', to: '/participate' },
  { label: 'Committees', to: '/committee' },
  { label: 'Photo Wall', to: '/photowall' },
  { label: 'Secretariat', to: '/secretariat' },
  { label: 'Contact', to: '/contactus' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollRef = useRef(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setScrolled(currentScroll > 28);
      setHidden(currentScroll > 180 && currentScroll > lastScrollRef.current + 5);
      if (currentScroll < 90 || currentScroll < lastScrollRef.current - 5) {
        setHidden(false);
      }
      lastScrollRef.current = currentScroll;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [menuOpen]);

  const isActive = (path) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  return (
    <>
      <nav
        className={`site-nav ${scrolled ? 'scrolled' : ''} ${hidden ? 'is-hidden' : ''} ${menuOpen ? 'menu-open' : ''}`}
        aria-label="Primary navigation"
      >
        <div className="nav-inner">
          <Link className="brand" to="/" aria-label="SVVVIMUN 2026 home">
            <span className="brand-mark">
              <img src={logo} alt="" />
            </span>
            <span className="brand-copy">
              <span className="brand-title">SVVVIMUN</span>
              <span className="brand-year">Indore · 2026</span>
            </span>
          </Link>

          <div className="desktop-nav">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={isActive(link.to) ? 'active' : ''}
                aria-current={isActive(link.to) ? 'page' : undefined}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="nav-actions">
            <a className="btn nav-register" href={EVENT.registrationUrl} target="_blank" rel="noreferrer">
              Register
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <button
              className={`menu-button ${menuOpen ? 'active' : ''}`}
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              <span />
            </button>
          </div>
        </div>
      </nav>

      <div
        id="mobile-navigation"
        className={`mobile-panel ${menuOpen ? 'open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <div className="mobile-panel-inner">
          <p className="mobile-panel-label">Navigate · SVVVIMUN 2026</p>
          <nav className="mobile-nav" aria-label="Mobile navigation">
            {links.map((link) => (
              <Link key={link.to} to={link.to} tabIndex={menuOpen ? 0 : -1}>
                {link.label}
              </Link>
            ))}
          </nav>
          <a
            className="btn btn-primary mobile-register"
            href={EVENT.registrationUrl}
            target="_blank"
            rel="noreferrer"
            tabIndex={menuOpen ? 0 : -1}
          >
            Register as a delegate
          </a>
        </div>
      </div>
    </>
  );
}
