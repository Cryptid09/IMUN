import React from 'react';

export default function PageHero({ eyebrow, title, description, image, index, children }) {
  return (
    <section className="page-hero">
      <img className="page-hero-image" src={image} alt="" aria-hidden="true" />
      <div className="page-hero-shade" />
      <div className="page-hero-orbit" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div className="container-shell page-hero-inner">
        <div className="page-hero-copy">
          <p className="page-hero-kicker">
            <span />
            {eyebrow}
          </p>
          <h1 className="page-hero-title">{title}</h1>
          {description && <p className="page-hero-description">{description}</p>}
          {children}
        </div>
        <span className="page-hero-index" aria-hidden="true">
          {index}
        </span>
      </div>
    </section>
  );
}
