import React from 'react';
import PageHero from '../components/PageHero.jsx';
import chamber from '../assets/black bg.jpg';

const generals = [
  {
    name: 'Bhuvneshwari Kashyap',
    role: 'Secretary General',
    img: '',
  },
  {
    name: 'Manan Bhardwaj',
    role: 'Director General',
    img: 'https://res.cloudinary.com/dp9irxc0x/image/upload/v1760550333/Manan_wlof6e.jpg',
  },
  {
    name: 'Avant Mishra',
    role: 'Convener',
    img: 'https://res.cloudinary.com/dp9irxc0x/image/upload/v1760550547/Avant_Sir_o4uuo6.jpg',
  },
  {
    name: 'Jayveer Singh Rathore',
    role: 'Treasurer',
    img: 'https://res.cloudinary.com/dp9irxc0x/image/upload/v1760550598/WhatsApp_Image_2025-10-15_at_23.17.11_xk12ms.jpg',
  },
];

const chiefs = [
  {
    name: 'Aditya Gupta',
    role: 'Deputy Director General',
    img: 'https://res.cloudinary.com/dp9irxc0x/image/upload/v1760550551/Airbrush-Image-Enhancer-1760031134727_dvxvgi.jpg',
  },
  {
    name: 'Anvisha Trivedi',
    role: 'Deputy Secretary General',
    img: 'https://res.cloudinary.com/dp9irxc0x/image/upload/v1760550550/Anvisha_iwescg.jpg',
  },
  {
    name: 'Mansi Sharma',
    role: 'Director of Creative Strategy',
    img: 'https://res.cloudinary.com/dp9irxc0x/image/upload/v1760550342/Mansi_vwedl7.jpg',
  },
  {
    name: 'Kashish Gera',
    role: 'Director of Content Development',
    img: 'https://res.cloudinary.com/dp9irxc0x/image/upload/v1760550353/Kash_mt9foo.jpg',
  },
  {
    name: 'Harsh Pratap Singh Thakur',
    role: 'Director of Logistics',
    img: 'https://res.cloudinary.com/dp9irxc0x/image/upload/v1760550359/Harsh_Partab_zw596a.jpg',
  },
  {
    name: 'Ayush Singh',
    role: 'Director of Delegate Affairs',
    img: 'https://res.cloudinary.com/dp9irxc0x/image/upload/v1760550365/Aayush_cmjhjt.jpg',
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

function PersonCard({ member, chief = false }) {
  const initials = member.name.split(' ').map((word) => word[0]).slice(0, 2).join('');
  return (
    <article className={`person-card ${chief ? 'chief' : ''}`}>
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
              <p className="section-kicker">General secretariat</p>
              <h2 className="section-title small">The Generals.</h2>
            </div>
            <p>Conference leadership, institutional coordination, operations, finance, and delegate experience.</p>
          </div>
          <div className="people-grid">
            {generals.map((member) => <PersonCard key={member.name} member={member} />)}
          </div>
        </div>
      </section>

      <section className="section-pad people-section section-soft">
        <div className="container-shell">
          <div className="people-heading">
            <div>
              <p className="section-kicker">Directorate record</p>
              <h2 className="section-title small">The Chiefs.</h2>
            </div>
            <p>Portfolio leaders responsible for the working details behind every successful assembly.</p>
          </div>
          <div className="people-grid chiefs-grid">
            {chiefs.map((member) => <PersonCard key={member.name} member={member} chief />)}
          </div>
        </div>
      </section>
    </div>
  );
}
