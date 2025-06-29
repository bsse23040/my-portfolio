import React from 'react';
import { motion } from 'framer-motion';

const data = [
  {
    title: 'BeatDrop Music App',
    desc: 'Spotify-style with PHP, PostgreSQL & JS.'
  },
  {
    title: 'TheOrchidHomes.com',
    desc: 'Real-estate site with branding & backend.'
  },
  {
    title: 'CV Generator',
    desc: 'Resume builder with PDF export in PHP.'
  },
  {
    title: 'Expense Tracker',
    desc: 'Monthly tracking with charts in PHP/MySQL.'
  }
];

export default function Projects() {
  return (
    <section className="section" id="projects">
      <h2>Projects</h2>
      {data.map((p,i) => (
        <motion.div key={i} className="project-card"
          whileHover={{ scale:1.03 }}
          transition={{ type:'spring', stiffness:300 }}
        >
          <h3>{p.title}</h3>
          <p>{p.desc}</p>
        </motion.div>
      ))}
    </section>
  );
}
