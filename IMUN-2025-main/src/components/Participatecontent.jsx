import React from 'react';
import { EVENT } from '../event';

const steps = [
  ['01', 'Submit credentials', 'Complete the official delegate registration form with accurate academic and contact details.'],
  ['02', 'Select a committee', 'Review the 2026 committee briefs and submit your first-choice allocation.'],
  ['03', 'Receive confirmation', 'The Secretariat verifies eligibility and sends your delegate credential record.'],
  ['04', 'Join the assembly', 'Attend all three days, follow the code of conduct, and represent your assigned institution.'],
];

const participationRules = [
  'A delegate may participate in only one committee during SVVVIMUN X 2026.',
  'Delegates must be available for the full conference from 17–19 November 2026.',
  'Early Bird — Phase 1: ₹1,600 per delegate.',
  'Phase 2: ₹1,800 per delegate.',
  'All participants must carry a valid school, college, or institutional identity card.',
  'English is the official language of committee proceedings and formal plenary sessions.',
];

const conductRules = [
  ['Integrity & authenticity', 'Submit accurate information. Plagiarism, impersonation, or fraud may lead to disqualification.'],
  ['Respect & courtesy', 'Treat every delegate, chair, faculty advisor, and staff member with professional respect.'],
  ['Diversity & inclusion', 'No form of discrimination, harassment, bullying, or retaliation will be tolerated.'],
  ['Formal attire', 'Western business formals or equivalent national dress are required in committee areas.'],
  ['Punctuality', 'Arrive at committee rooms and plenary sessions at least ten minutes before the gavel.'],
  ['Recording policy', 'Photography and recording require explicit permission from the Secretariat.'],
];

export default function Participatecontent() {
  return (
    <>
      <section className="section-pad section-soft">
        <div className="container-shell">
          <p className="section-kicker">Credential procedure</p>
          <h2 className="section-title small">Four steps to the 2026 assembly.</h2>
          <div className="participation-steps">
            {steps.map(([number, title, description]) => (
              <article className="participation-step" key={number}>
                <span>STEP {number}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad section-paper">
        <div className="container-shell rule-layout">
          <aside>
            <p className="section-kicker">Participation protocol</p>
            <h2 className="section-title small">The essential record.</h2>
            <p className="section-lead">Read these requirements before submitting your delegate credentials.</p>
            <a className="btn btn-blue" href={EVENT.registrationUrl} target="_blank" rel="noreferrer" style={{ marginTop: 24 }}>
              Begin registration
            </a>
          </aside>

          <div>
            <article className="rule-block">
              <h2>Rules of participation</h2>
              <ul className="rule-list">
                {participationRules.map((rule) => <li key={rule}>{rule}</li>)}
              </ul>
            </article>

            <article className="rule-block">
              <h2>Code of conduct</h2>
              <p>
                At SVVVIMUN 2026, delegates are expected to uphold the standards of a professional international assembly.
                By registering, participants accept the following commitments.
              </p>
              <ul className="rule-list">
                {conductRules.map(([title, description]) => (
                  <li key={title}><strong>{title}:</strong> {description}</li>
                ))}
              </ul>
              <p style={{ marginTop: 20 }}>
                <strong>Enforcement:</strong> Severe violations—including harassment, racism, threats, or serious disruption—may
                result in removal from the conference without refund.
              </p>
            </article>

            <article className="rule-block">
              <h2>Cancellation policy</h2>
              <ul className="rule-list">
                <li>If SVVVIMUN X 2026 is cancelled by the organisers, registered delegates will receive a full refund.</li>
                <li>Delegate-initiated cancellations are non-refundable after credentials have been confirmed.</li>
                <li>The conference is not responsible for travel or accommodation costs arising from a cancellation.</li>
                <li>If you have previously participated in SVVVIMUN, your participation may be cancelled if any significant misconduct is found in your previous record.
</li>
              </ul>
            </article>

            <article className="rule-block campus-ambassador-block">
              <h2>Campus Ambassadorship</h2>
              <p className="section-lead">
                Become the face of SVVVIMUN X on your campus. Lead registrations, coordinate with the Secretariat,
                and earn exclusive perks, recognition, and networking opportunities.
              </p>
              <a className="btn btn-blue" href={EVENT.campusAmbassadorUrl} target="_blank" rel="noreferrer" style={{ marginTop: 16 }}>
                Apply as Campus Ambassador
              </a>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
