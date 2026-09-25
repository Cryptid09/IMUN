import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/black bg.jpg';
import ContinuousTimer from './ContinuousTImer.jsx';
import { EVENT } from '../event';

export default function Homehero() {
  return (
    <section className="home-hero">
      <img className="home-hero-image" src={heroImage} alt="" aria-hidden="true" />
      <div className="home-hero-shade" />
      <div className="home-hero-grid" />
      <div className="hero-orbit" aria-hidden="true" />

      <div className="container-shell home-hero-inner">
        <div className="hero-copy">
          <p className="hero-kicker">The 2026 International Model United Nations · Tenth Edition</p>
          <h1 className="hero-title">
            <span>SVVV</span>
            <span className="outline">IMUN</span>
          </h1>
          <p className="hero-tagline">
            Three days. One global table. A new generation of leaders ready to negotiate the world’s most consequential
            challenges.
          </p>
          <div className="hero-meta">
            <span>{EVENT.dateLabel}</span>
            <span>Indore, India</span>
            <span>In person + online</span>
          </div>
          <div className="button-row hero-buttons">
            <a className="btn btn-primary" href={EVENT.registrationUrl} target="_blank" rel="noreferrer">
              Register as a delegate
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <Link className="btn btn-outline-light" to="/committee">
              Explore committees
            </Link>
            <a className="btn btn-outline-light" href={EVENT.campusAmbassadorUrl} target="_blank" rel="noreferrer">
              Campus Ambassador
            </a>
          </div>
        </div>

        <div className="hero-side">
          <ContinuousTimer />
        </div>
      </div>

      <span className="hero-scroll" aria-hidden="true">
        Scroll to explore
      </span>
    </section>
  );
}
