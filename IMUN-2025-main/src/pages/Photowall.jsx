import React from 'react';
import DomeGallery from '../components/DomeGallary.jsx';

export default function Photowall() {
  return (
    <main className="photo-wall">
      <DomeGallery overlayBlurColor="#230101" />
      <div className="photo-wall-overlay">
        <h1 className="photo-wall-title">The <span>SVVVIMUN</span> archive.</h1>
        <span className="photo-wall-instruction">Drag to rotate · Select an image to enlarge</span>
      </div>
    </main>
  );
}
