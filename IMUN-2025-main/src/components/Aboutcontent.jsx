import React from 'react';

const principles = [
  {
    number: '01',
    title: 'Prepare with purpose',
    text: 'Read the committee brief, understand the issue, and enter every discussion ready to contribute evidence—not just opinion.',
  },
  {
    number: '02',
    title: 'Disagree with respect',
    text: 'Challenge ideas firmly while protecting the dignity of the person presenting them. Professional debate begins with trust.',
  },
  {
    number: '03',
    title: 'Lead beyond speeches',
    text: 'The strongest delegate is not always the loudest. Listen, build bridges, clarify priorities, and help a coalition move.',
  },
];

export default function Aboutcontent() {
  return (
    <>
      <section className="section-pad section-paper">
        <div className="container-shell editorial-grid">
          <div>
            <p className="section-kicker">The SVVVIMUN difference</p>
            <h2 className="section-title small">A global assembly with the rigour of real leadership.</h2>
          </div>
          <div className="prose">
            <p>
              <strong>SVVVIMUN 2026</strong> is a transformative three-day journey of intellect, debate, collaboration, and
              leadership. Delegates step into the roles of diplomats and decision-makers representing diverse nations,
              institutions, and perspectives.
            </p>
            <p>
              The conference is open to students from schools, colleges, and universities across India. Every committee is
              designed to move beyond memorised speeches and develop the practical skills required to research an issue,
              negotiate competing interests, and lead a group toward consensus.
            </p>
            <p>
              A living legacy: a tradition of serious participation guiding a new generation of thoughtful,
              confident, and compassionate global citizens.
            </p>
          </div>
        </div>

        <div className="container-shell principles-grid">
          {principles.map((principle) => (
            <article className="principle-card" key={principle.number}>
              <span className="principle-index">PRINCIPLE / {principle.number}</span>
              <h3>{principle.title}</h3>
              <p>{principle.text}</p>
            </article>
          ))}
        </div>

        <div className="container-shell motto-panel">
          <p>“Legacy of Xcellence: cultivating dialogue, diplomacy, and the leaders of tomorrow.”</p>
        </div>
      </section>

      <section className="section-pad section-soft">
        <div className="container-shell split-layout">
          <div>
            <p className="section-kicker">Host institution</p>
            <h2 className="section-title small">About Shri Vaishnav Vidyapeeth Vishwavidyalaya.</h2>
          </div>
          <div className="prose">
            <p>
              Established in 2015 under the Madhya Pradesh Niji Vishwavidyalaya (Sthapana Avam Sanchalan) Adhiniyam,
              Shri Vaishnav Vidyapeeth Vishwavidyalaya (SVVV), Indore is a private university with a vision to shape a
              better future through quality education, research, and innovation.
            </p>
            <p>
              Guided by a mission to develop socially responsible citizens, SVVV emphasises value-based education rooted in
              endurance, excellence, fairness, honesty, and transparency. As a multi-faculty university, it serves the diverse
              academic needs of society while preparing students to thrive in an interconnected world.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
