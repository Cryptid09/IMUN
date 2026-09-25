import React from 'react';

const institutions = [
  [
    'Maharaja Ranjit Singh College, Indore',
    'Mahakal Institute of Technology, Ujjain',
    'Shri Vaishnav Vidyapeeth Vishwavidyalaya, Indore',
    'SICA Senior Secondary School, Indore',
    'Christu Jyoti School, Ujjain',
    'Delhi Public School, Bhopal',
    'GVN The Global School, Bhopal',
    'A.B.N. College, Indore',
  ],
  [
    'International Institute of Professional Studies, Indore',
    'Medicaps University, Indore',
    'Columbia Convent School, Indore',
    'St. Paul’s Convent School, Ujjain',
    'Virgin Mary School, Ujjain',
    'JEMTEC School of Law, Greater Noida',
    'Siddhartha Law College, Dehradun',
    'Amity University, Noida',
  ],
  [
    'New Oxford School, Ujjain',
    'Indore Institute of Law, Indore',
    'Government Engineering College, Ujjain',
    'The Shishukunj International School, Indore',
    'Acropolis Institute, Indore',
    'NMIMS, Dhule, Maharashtra',
  ],
];

export default function Aboutinstitue() {
  return (
    <section className="section-pad section-paper">
      <div className="container-shell">
        <p className="section-kicker">Delegate registry · previous editions</p>
        <h2 className="section-title small">Institutions that have participated in SVVVIMUN.</h2>
        <p className="section-lead">
          Across previous editions, SVVVIMUN has welcomed students from schools, colleges, and universities throughout India,
          creating a community grounded in intellectual curiosity and respectful debate.
        </p>

        <div className="institution-grid">
          {institutions.map((list, index) => (
            <ul className="institution-list" key={index}>
              {list.map((institution) => <li key={institution}>{institution}</li>)}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
