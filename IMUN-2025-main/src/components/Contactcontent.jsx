import React from 'react';
import { MAP_EMBED_URL } from '../event';
import bhuneshwariImage from '../assets/bhuneshwari.jpg';
import clgLogo from '../assets/image.png';

const mananImage =
  'https://res.cloudinary.com/dp9irxc0x/image/upload/v1760550333/Manan_wlof6e.jpg';

const contacts = [
  {
    icon: 'BK',
    name: 'Bhuvneshwari Kashyap',
    role: 'Secretary General',
    email: 'bhuvneshwarikashyap1234@gmail.com',
    phone: '+91 9522432000',
    image: bhuneshwariImage,
  },
  {
    icon: 'MB',
    name: 'Manan Bhardwaj',
    role: 'Director General',
    email: 'mananbharadwaj33@gmail.com',
    phone: '+91 9461152238',
    image: mananImage,
  },
  {
    icon: 'IM',
    name: 'International Model United Nations',
    role: 'General Secretariat',
    email: 'SVVVIMUNX@gmail.com',
    phone: '+91 9522432000',
    image: clgLogo,
    isLogo: true,
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
                {contact.image ? (
                  <img
                    className={`contact-avatar ${contact.isLogo ? 'contact-avatar-logo' : ''}`}
                    src={contact.image}
                    alt={contact.isLogo ? 'SVVVIMUN General Secretariat logo' : contact.name}
                    loading="lazy"
                  />
                ) : (
                  <span className="contact-icon">{contact.icon}</span>
                )}
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
