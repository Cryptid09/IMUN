import React from 'react';
import chamberImage from '../assets/black bg.jpg';

const programme = [
  {
    number: '01',
    title: 'Day one · Open doors',
    description: 'Registration, opening ceremony, and the first rotations where every delegate finds their voice.',
    items: ['Delegate check-in', 'Opening address', 'Committee orientation'],
  },
  {
    number: '02',
    title: 'Day two · Shape the debate',
    description: 'Deep policy work, negotiation, and the conversations that transform positions into progress.',
    items: ['Committee sessions', 'Crisis simulations', 'Chairline networking'],
  },
  {
    number: '03',
    title: 'Day three · Decide together',
    description: 'Debriefs, resolutions, and a closing assembly built around the ideas we carry forward.',
    items: ['Resolution forum', 'Awards & recognition', 'Closing assembly'],
  },
];

const experiences = [
  ['01', 'Speak with clarity', 'Build confidence in high-stakes debate and public address.'],
  ['02', 'Negotiate with purpose', 'Move from competing interests to durable, workable consensus.'],
  ['03', 'Lead beyond the podium', 'Organise people, manage time, and make decisions under pressure.'],
];

export default function Homecontent() {
  return (
    <main>
      <div className="signal-bar" aria-hidden="true">
        <div className="signal-track">
          <span>Diplomacy</span>
          <span>Debate</span>
          <span>Leadership</span>
          <span>Global outlook</span>
          <span>Collaborative action</span>
        </div>
      </div>

      <section className="section-pad section-soft">
        <div className="container-shell">
          <div className="intro-grid">
            <div className="intro-copy">
              <p className="section-kicker">The world is changing</p>
              <h2 className="section-title">Your voice belongs in the room.</h2>
              <p className="section-lead">
                SVVVIMUN 2026 is a three-day international gathering for ambitious students who want to understand the
                world, question the default, and practice the kind of leadership that creates room for better decisions.
              </p>
            </div>
            <div className="intro-note">
              <p>“Where legacy meets leadership: cultivating dialogue, diplomacy, and the leaders of tomorrow.”</p>
            </div>
          </div>

          <div className="stats-row" aria-label="Conference highlights">
            <div className="stat">
              <span className="stat-value">03</span>
              <span className="stat-label">Days of assembly</span>
            </div>
            <div className="stat">
              <span className="stat-value">06</span>
              <span className="stat-label">Committees to join</span>
            </div>
            <div className="stat">
              <span className="stat-value">360°</span>
              <span className="stat-label">Perspectives in one room</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad section-dark">
        <div className="container-shell story-grid">
          <div className="story-media">
            <img src={chamberImage} alt="Delegates seated in a global assembly chamber" />
            <div className="story-caption">A room designed for ideas to collide—and consensus to emerge.</div>
          </div>

          <div>
            <p className="section-kicker light">More than a conference</p>
            <h2 className="section-title">Enter the world of diplomacy.</h2>
            <div className="story-body">
              <p>
                Step into a space where borders do not decide who gets heard. Delegates represent nations, build
                coalitions, negotiate difficult choices, and experience how policy is shaped when every perspective has a
                seat.
              </p>
              <p>
                Over three immersive days, you will sharpen your worldview, strengthen your voice, and grow into a more
                thoughtful, confident, and compassionate leader.
              </p>
            </div>

            <div className="experience-list">
              {experiences.map(([number, title, description]) => (
                <div className="experience-item" key={number}>
                  <span>{number}</span>
                  <div>
                    <strong>{title}</strong>
                    <p>{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad section-paper">
        <div className="container-shell">
          <div className="program-header">
            <div>
              <p className="section-kicker">The 2026 programme</p>
              <h2 className="section-title small">Three days. One shared mission.</h2>
            </div>
            <p className="section-lead" style={{ margin: 0 }}>
              A carefully paced experience with space to think deeply, speak boldly, and connect genuinely.
            </p>
          </div>

          <div className="program-grid">
            {programme.map((day) => (
              <article className="day-card" key={day.number}>
                <span className="day-number">DAY / {day.number}</span>
                <h3>{day.title}</h3>
                <p>{day.description}</p>
                <ul>
                  {day.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="quote-band section-pad">
        <div className="container-shell quote-inner">
          <span className="quote-mark" aria-hidden="true">
            “
          </span>
          <div>
            <blockquote>Diplomacy is not the absence of disagreement. It is the discipline of finding a way forward.</blockquote>
            <cite>SVVVIMUN · Where legacy meets leadership</cite>
          </div>
        </div>
      </section>
    </main>
  );
}
