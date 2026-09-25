import React from 'react';
import PageHero from './PageHero.jsx';
import contactImage from '../assets/contact.jpg';

export default function Contacthero() {
  return (
    <PageHero
      eyebrow="Secretariat dispatch"
      title="Questions belong in the open."
      description="Contact the 2026 Secretariat for registration support, committee information, accessibility requirements, institutional delegation inquiries, and venue directions."
      image={contactImage}
      index="06"
    />
  );
}
