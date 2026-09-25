import React from 'react';
import PageHero from './PageHero.jsx';
import about from '../assets/about.jpg';

export default function AboutUshero() {
  return (
    <PageHero
      eyebrow="Institutional mandate"
      title="Legacy of Xcellence."
      description="SVVVIMUN 2026 is built on the belief that meaningful leadership begins with listening, rigorous preparation, and respect for every perspective in the room."
      image={about}
      index="01"
    />
  );
}
