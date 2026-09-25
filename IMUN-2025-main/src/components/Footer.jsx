import React from 'react';
import { Link } from 'react-router-dom';
import { EVENT } from '../event';

const footerLinks = [
  ['Home', '/'],
  ['About', '/about'],
  ['Participate', '/participate'],
  ['Committees', '/committee'],
  ['Photo Wall', '/photowall'],
  ['Secretariat', '/secretariat'],
  ['Contact', '/contactus'],
  ['Registration', EVENT.registrationUrl],
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container-shell">
        <div className="footer-top">
          <div>
            <p className="eyebrow light">The next assembly begins here</p>
            <h2 className="footer-title">Bring your perspective to the table.</h2>
            <p className="footer-copy">
              Join student leaders from across India for three days of diplomacy, debate, and decision-making at
              SVVVIMUN 2026 in Indore.
            </p>
            <div className="button-row" style={{ marginTop: 30 }}>
              <a className="btn btn-primary" href={EVENT.registrationUrl} target="_blank" rel="noreferrer">
                Register now
              </a>
              <Link className="btn btn-outline-light" to="/participate">
                How to participate
              </Link>
            </div>
          </div>

          <nav className="footer-links" aria-label="Footer navigation">
            {footerLinks.map(([label, to]) =>
              to.startsWith('http') ? (
                <a key={label} href={to} target="_blank" rel="noreferrer">
                  {label}
                </a>
              ) : (
                <Link key={label} to={to}>
                  {label}
                </Link>
              ),
            )}
          </nav>
        </div>

        <div className="footer-bottom">
          <span>© 2026 SVVVIMUN. All rights reserved.</span>
          <span>
            {EVENT.dateLabel} · Indore, Madhya Pradesh
          </span>
          <a href={`mailto:${EVENT.email}`}>{EVENT.email}</a>
        </div>
      </div>
    </footer>
  );
}
