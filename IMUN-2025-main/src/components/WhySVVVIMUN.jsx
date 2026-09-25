import React from 'react';
import lg1 from '../assets/lg1.png';
import lg2 from '../assets/lg2.png';
import lg3 from '../assets/lg3.png';
import lg4 from '../assets/lg4.png';
import lg5 from '../assets/lg5.png';
import lg6 from '../assets/lg6.png';

export default function WhySVVVIMUN() {
  return (
    <section className="section-pad why-svvvimun">
      <div className="container-shell">
        <p className="section-kicker">Why SVVVIMUN X?</p>
        <h2 className="section-title small">Built on commitment, credibility, and a Legacy of Xcellence.</h2>
        <div className="highlights-grid">
          <article className="highlight-card">
            <img className="highlight-image" src={lg1} alt="" />
            <h3>Prestigious International MUN Certificates</h3>
            <p>Recognized credentials that strengthen your academic and professional profile.</p>
          </article>
          <article className="highlight-card">
            <img className="highlight-image" src={lg2} alt="" />
            <h3>Cash Prizes Worth ₹1,00,000</h3>
            <p>Compete for substantial rewards across categories and committees.</p>
          </article>
          <article className="highlight-card">
            <img className="highlight-image" src={lg3} alt="" />
            <h3>Experienced Executive Board</h3>
            <p>Learn, deliberate, and grow under seasoned chairs and directors.</p>
          </article>
          <article className="highlight-card">
            <img className="highlight-image" src={lg4} alt="" />
            <h3>Diverse Networking</h3>
            <p>Connect with passionate delegates from across India and beyond.</p>
          </article>
          <article className="highlight-card">
            <img className="highlight-image" src={lg5} alt="" />
            <h3>DJ & Dhol Night</h3>
            <p>Celebrate beyond committee sessions at our signature social night.</p>
          </article>
          <article className="highlight-card">
            <img className="highlight-image" src={lg6} alt="" />
            <h3>Legacy of Xcellence</h3>
            <p>A decade of commitment, credibility, and transformative experiences.</p>
          </article>
        </div>
      </div>
    </section>
  );
}