import React from 'react';
import { MAP_EMBED_URL } from '../event';

const contacts = [
  {
    icon: 'BK',
    name: 'Bhuvneshwari Kashyap',
    role: 'Secretary General',
    email: 'bhuvneshwarikashyap1234@gmail.com',
    phone: '+91 9522432000',
  },
  {
    icon: 'MB',
    name: 'Manan Bhardwaj',
    role: 'Director General',
    email: 'mananbharadwaj33@gmail.com',
    phone: '+91 9461152238',
  },
  {
    icon: 'IM',
    name: 'International Model United Nations',
    role: 'General Secretariat',
    email: 'SVVVIMUNX@gmail.com',
    phone: '+91 9522432000',
  },
];

export default function Contactcontent() {
  return (
    <section className="section-pad section-soft">
      <div className="container-shell contact-grid">
        <div>
          <p className="section-kicker">Secretariat directory</p>
          <h2 className="section-title small">Reach the right desk.</h2>
          <p className="section-lead">
            For registration support, committee briefs, accessibility requirements, and delegation enquiries, contact the
            2026 Secretariat directly.
          </p>

          <div className="contact-panel" style={{ marginTop: 36 }}>
            {contacts.map((contact) => (
              <article className="contact-person" key={`${contact.name}-${contact.role}`}>
                <span className="contact-icon">{contact.icon}</span>
                <div>
                  <strong>{contact.name}</strong>
                  <span>{contact.role}</span>
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
                  <a href={`tel:${contact.phone.replace(/\s/g, '')}`}>{contact.phone}</a>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="contact-map">
          <iframe
            src={MAP_EMBED_URL}
            title="SVVVIMUN venue location in Indore"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
