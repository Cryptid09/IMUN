import React from 'react';
import Aippm from '../assets/AIPPM.png';
import UnhrcLogo from '../assets/UN-HRC.png';
import Mahabharata from '../assets/MAHABHARATA.png';
import loksabha from '../assets/LOK SABHA.png';
import ip from '../assets/IP.png';
import bg from '../assets/committee page.jpg';
import McuDcLogo from '../assets/MCU-DC.png';
import PageHero from '../components/PageHero.jsx';

const committees = [
  {
    code: 'UN-HRC-01',
    name: 'UN-HRC',
    tagline: 'Examining the human rights situation with emphasis on civilian protection and accountability.',
    desc: 'Examine civilian protection, state responsibility, and the mechanisms available to hold perpetrators of human rights violations accountable.',
    logo: UnhrcLogo,
    driveLink: 'https://docs.google.com/document/d/1xhB6xVLMAv4chUIiIKZGp0yPLrCGhSYrqISm1lUyd7w/edit?usp=sharing',
  },
  {
    code: 'AIPPM-02',
    name: 'AIPPM',
    tagline: 'Caste Census and the Future of Reservation in India.',
    desc: 'Debate the political, legal, and social implications of a caste census and what it means for the future of reservation in India.',
    logo: Aippm,
    driveLink: 'https://drive.google.com/file/d/1mJgldDCrdYPIIn0jl9ZfYq9Vr63qbCsz/view?usp=drive_link',
  },
  {
    code: 'LS-03',
    name: 'Lok Sabha',
    tagline: 'Balancing Education Reform and Freedom of Expression in the Digital Age.',
    desc: 'Weigh education reform against freedom of expression as lawmakers navigate digital platforms, curricula, and the rights of students and citizens.',
    logo: loksabha,
    driveLink: 'https://docs.google.com/document/d/1WFW7oBXg0wDQM4j4zwA5oN1jD-7vwNsqzsYsQQB1IMw/edit?usp=sharing',
  },
  {
    code: 'HST-04',
    name: 'Mahabharata Committee',
    tagline: 'Trial of Dharma: Adjudicating Justice, Legitimacy, and the Path to Kurukshetra.',
    desc: 'Adjudicate competing claims of justice, legitimacy, and dharma as the factions of Hastinapur move inexorably toward Kurukshetra.',
    logo: Mahabharata,
    driveLink: 'https://docs.google.com/document/d/17q29Y_4Yih1DnLWZEhErh8XMKdGhNIzQ/edit?usp=drivesdk&ouid=113925849918196037401&rtpof=true&sd=true',
  },
  {
    code: 'MCU-DC-05',
    name: 'MCU vs DC',
    tagline: 'The Crossworld Convergence Summit.',
    desc: 'Convene heroes and powers from two universes to negotiate convergence, jurisdiction, and the fate of their worlds.',
    logo: McuDcLogo,
    driveLink: 'https://docs.google.com/document/d/1YFTfYrrQc1b8y2YBowkvG4LU1IzgCYKj/edit?usp=sharing&ouid=103007274443437532939&rtpof=true&sd=true',
  },
  {
    code: 'IP-06',
    name: 'International Press',
    tagline: 'Photography and Journalism.',
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
        description="Six committee tracks. One shared standard of preparation, evidence, and constructive negotiation."
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
