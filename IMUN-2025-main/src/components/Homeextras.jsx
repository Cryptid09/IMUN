import React from 'react';
import { EVENT, MAP_EMBED_URL } from '../event';

export default function Homeextras() {
  return (
    <section className="section-pad section-soft">
      <div className="container-shell venue-grid">
        <div className="venue-card">
          <p className="section-kicker light">The venue</p>
          <h2>Meet us in Indore.</h2>
          <address>
            Shri Vaishnav Vidyapeeth Vishwavidyalaya
            <br />
            Indore–Ujjain Road, Gram Baroli
            <br />
            Madhya Pradesh, India
          </address>
          <div className="button-row">
            <a
              className="btn btn-primary"
              href="https://www.google.com/maps/search/?api=1&query=Shri+Vaishnav+Vidyapeeth+Vishwavidyalaya+Indore"
              target="_blank"
              rel="noreferrer"
            >
              Get directions
            </a>
            <a className="btn btn-outline-light" href={`mailto:${EVENT.email}`}>
              Contact the Secretariat
            </a>
          </div>
        </div>

        <div className="map-card">
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
