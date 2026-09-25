import React from 'react';
import Aippm from '../assets/AIPPM.png';
import Un from '../assets/UN WOMEN.png';
import Disec from '../assets/UN DISEC.png';
import Mahabharata from '../assets/MAHABHARATA.png';
import loksabha from '../assets/LOK SABHA.png';
import ip from '../assets/IP.png';
import bg from '../assets/committee page.jpg';
import harrypotter from '../assets/HARRY POTTER.png';
import PageHero from '../components/PageHero.jsx';

const committees = [
  {
    code: 'UNW-01',
    name: 'UN Women',
    tagline: 'Protecting and advancing women’s rights in the 21st century',
    desc: 'Deliberate on global challenges to gender equality and develop frameworks to strengthen women’s rights and empowerment in the modern era.',
    logo: Un,
    driveLink: 'https://drive.google.com/file/d/1jqgPXECmkOVMp7q5zlZGVscbMxnLkIaI/view?usp=sharing',
  },
  {
    code: 'DISEC-02',
    name: 'UN DISEC',
    tagline: 'Regulating emerging nuclear and conventional weapons',
    desc: 'Address evolving weapons technology and discuss practical measures for disarmament, arms control, and international security cooperation.',
    logo: Disec,
    driveLink: 'https://drive.google.com/file/d/122w9RzgqLP8kh7Gcay871T-6jXElcG43/view?usp=drive_link',
  },
  {
    code: 'AIPPM-03',
    name: 'AIPPM',
    tagline: 'Safeguarding electoral rights in contemporary India',
    desc: 'Engage in political discourse on electoral reform, transparency, and the preservation of democratic values in India’s governance system.',
    logo: Aippm,
    driveLink: 'https://drive.google.com/file/d/1mJgldDCrdYPIIn0jl9ZfYq9Vr63qbCsz/view?usp=drive_link',
  },
  {
    code: 'HST-04',
    name: 'Mahabharata Committee',
    tagline: 'The collapse of Hastinapur',
    desc: 'Relive a defining turning point in Indian mythology, where diplomacy, power, and fate collide over the destiny of an empire.',
    logo: Mahabharata,
    driveLink: 'https://drive.google.com/file/d/1abKjkBs_WbGAVhqXmB4-OhWeLmggdp6F/view?usp=drive_link',
  },
  {
    code: 'HP-05',
    name: 'Harry Potter Committee',
    tagline: 'After the battle: rebuilding the wizarding world',
    desc: 'Navigate the challenges of reconstruction, governance, justice, and reconciliation in a society shaped by magical conflict.',
    logo: harrypotter,
    driveLink: 'https://drive.google.com/file/d/1vXXqmAGrxglutMl21ijxq9CUyLjjrOEj/view?usp=drive_link',
  },
  {
    code: 'LS-06',
    name: 'Lok Sabha',
    tagline: 'Governance of religious and charitable institutions',
    desc: 'Debate legal and administrative reforms required for effective management and accountability within India’s religious and charitable institutions.',
    logo: loksabha,
    driveLink: 'https://drive.google.com/file/d/1nVtrow-tuPYtfWkExC6UMKGi6ex15LCP/view?usp=drive_link',
  },
  {
    code: 'IP-07',
    name: 'International Press',
    tagline: 'Photography and journalism',
    desc: 'Document and narrate the ideas, decisions, and people shaping SVVVIMUN 2026 through responsible journalism and visual reporting.',
    logo: ip,
    driveLink: 'https://drive.google.com/file/d/1HEX9zJuFRG0R56kNmjmn0v36BH2Xe8X6/view?usp=drive_link',
  },
];

export default function Committee() {
  return (
    <>
      <PageHero
        eyebrow="Committee docket"
        title="Choose the room where your perspective matters."
        description="Seven committee tracks. One shared standard of preparation, evidence, and constructive negotiation."
        image={bg}
        index="03"
      />

      <section className="section-pad section-paper">
        <div className="container-shell">
          <div className="committee-intro">
            <div>
              <p className="section-kicker">Diplomatic archive codex · session 2026</p>
              <h2 className="section-title small">Multilateral committee dossiers.</h2>
              <p className="section-lead">Certified agendas, study material, and delegate capacity records for the 2026 assembly.</p>
            </div>
            <div className="archive-key">
              <span className="active">All committees</span>
              <span>Study guides</span>
            </div>
          </div>

          <div className="committee-grid">
            {committees.map((committee, index) => (
              <article className="committee-card" key={committee.code}>
                <div className="committee-logo-wrap">
                  <img className="committee-logo" src={committee.logo} alt="" />
                </div>
                <div>
                  <span className="committee-index">DOSSIER {String(index + 1).padStart(2, '0')} · {committee.code}</span>
                  <h2>{committee.name}</h2>
                  <p className="committee-tagline">{committee.tagline}</p>
                  <p className="prose">{committee.desc}</p>
                  <a className="study-link" href={committee.driveLink} target="_blank" rel="noreferrer">
                    Open study guide
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
