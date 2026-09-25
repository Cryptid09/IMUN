import React from 'react';
import Homehero from '../components/Homehero.jsx';
import Homecontent from '../components/Homecontent.jsx';
import Homeextras from '../components/Homeextras.jsx';

export default function Home() {
  return (
    <div>
      <Homehero />
      <Homecontent />
      <Homeextras />
    </div>
  );
}
