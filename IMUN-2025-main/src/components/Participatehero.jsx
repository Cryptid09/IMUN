import React from 'react';
import PageHero from './PageHero.jsx';
import registrationImage from '../assets/registrtaion.jpg';

export default function Participatehero() {
  return (
    <PageHero
      eyebrow="Delegate credentials"
      title="Take your seat at the table."
      description="Review the 2026 participation protocol, registration requirements, code of conduct, and conference schedule before submitting your credentials."
      image={registrationImage}
      index="02"
    />
  );
}
