import React from 'react';
import { MAP_EMBED_URL } from '../event';

const contacts = [
  {
    icon: 'SG',
    name: 'Smriti Mukherjee',
    role: 'Secretary General',
    email: 'smriti.mukherjee03@gmail.com',
    phone: '+91 99931 98924',
  },
  {
    icon: 'DG',
    name: 'Harsh Deshpande',
    role: 'Director General',
    email: 'contact.harsh1807@gmail.com',
    phone: '+91 74000 38224',
  },
  {
    icon: 'IM',
    name: 'International Model United Nations',
    role: 'General Secretariat',
    email: 'svvvimun9.0@gmail.com',
    phone: '+91 99931 98924',
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
