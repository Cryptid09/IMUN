import React from 'react';
import PageHero from '../components/PageHero.jsx';
import chamber from '../assets/black bg.jpg';
import bhuneshwariImg from '../assets/bhuneshwari.jpg';
import prayagiImg from '../assets/Prayagi.jpeg';
import mananImg from '../assets/Manan.jpeg';
import divyanshImg from '../assets/divyansh.jpeg';
import supriyaImg from '../assets/supriya.jpeg';
import mayankImg from '../assets/Mayank.jpeg';
import iqrashImg from '../assets/Iqrash.jpeg';
import vedikaImg from '../assets/Vedika.jpeg';

const committee = [
  {
    name: 'Bhuvneshwari Kashyap',
    role: 'Secretary General',
    img: bhuneshwariImg,
  },
  {
    name: 'Manan Bharadwaj',
    role: 'Director General',
    img: mananImg,
  },
  {
    name: 'Amit Lathoriya',
    role: 'Deputy Secretary General',
    img: 'https://res.cloudinary.com/ce52ytao/image/upload/c_fill,g_auto,w_600,h_690,q_auto,f_auto/svvvimun/secretariat/amit.jpg',
  },
  {
    name: 'Kshitij Pratap Singh Tomar',
    role: 'Deputy Director General',
    img: 'https://res.cloudinary.com/ce52ytao/image/upload/c_fill,g_auto,w_600,h_690,q_auto,f_auto/svvvimun/secretariat/kshitij.jpg',
  },
  {
    name: 'Divyansh Bhand',
    role: 'Director of Operations',
    img: divyanshImg,
  },
  {
    name: 'Supriya Ray',
    role: 'Director of Content Development',
    img: supriyaImg,
  },
  {
    name: 'Prayagi Sahajwani',
    role: 'Director of EB Affairs',
    img: prayagiImg,
  },
  {
    name: 'Mayank Singh Shaktawat',
    role: 'Director of Logistics',
    img: mayankImg,
  },
  {
    name: 'Mohd Iqrash Mansuri',
    role: 'Director of Sponsorship',
    img: iqrashImg,
  },
  {
    name: 'Vedika Dave',
    role: 'Director of Delegate Affairs',
    img: vedikaImg,
  },
  ];

const faculty = [
  {
    name: 'Dr. Yogesh C. Goswami',
    role: 'Vice Chancellor',
    img: 'https://res.cloudinary.com/dp9irxc0x/image/upload/v1760550214/VC_u7sdqb.jpg',
  },
  {
    name: 'Dr. Anurag Joshi',
    role: 'Faculty Co-Coordinator',
    img: 'https://res.cloudinary.com/dp9irxc0x/image/upload/v1760550262/Ss_arxryz.jpg',
  },
  {
    name: 'Dr. Saurabh Jain',
    role: 'Faculty Coordinator',
    img: 'https://res.cloudinary.com/dp9irxc0x/image/upload/v1760550257/AJ_rfxruv.jpg',
  },
];

function PersonCard({ member, chief = false, size = 'normal' }) {
  const initials = member.name.split(' ').map((word) => word[0]).slice(0, 2).join('');
  const sizeClass = size === 'large' ? 'large' : size === 'small' ? 'small' : '';
  return (
    <article className={`person-card ${chief ? 'chief' : ''} ${sizeClass}`}>
      <div className="person-photo">
        {member.img ? (
          <img src={member.img} alt={member.name} loading="lazy" />
        ) : (
          <span className="person-initials" aria-hidden="true">{initials}</span>
        )}
      </div>
      <div className="person-copy">
        <h2>{member.name}</h2>
        <p>{member.role}</p>
      </div>
    </article>
  );
}

export default function Secretariat() {
  return (
    <div>
      <PageHero
        eyebrow="Official directory"
        title="The people behind the assembly."
        description="Meet the faculty coordinators and student leaders entrusted with making SVVVIMUN 2026 rigorous, welcoming, and well-run."
        image={chamber}
        index="05"
      />

      <section className="section-pad people-section section-soft">
        <div className="container-shell">
          <div className="people-heading">
            <div>
              <p className="section-kicker">Faculty office</p>
              <h2 className="section-title small">Faculty coordination.</h2>
            </div>
            <p>Academic oversight, delegate support, and institutional direction for the 2026 conference.</p>
          </div>
          <div className="people-grid faculty">
            {faculty.map((member) => <PersonCard key={member.name} member={member} />)}
          </div>
        </div>
      </section>

      <section className="section-pad people-section section-paper">
        <div className="container-shell">
          <div className="people-heading">
            <div>
              <p className="section-kicker">organising committee</p>
              <h2 className="section-title small">The Chiefs.</h2>
            </div>
            <p>Conference leadership, institutional coordination, operations, finance, and delegate experience.</p>
          </div>
          <div className="people-grid committee-top">
            {committee.slice(0, 4).map((member) => (
              <PersonCard key={member.name} member={member} size="large" />
            ))}
          </div>
          <div className="people-grid committee-rest">
            {committee.slice(4).map((member) => (
              <PersonCard key={member.name} member={member} size="small" />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}