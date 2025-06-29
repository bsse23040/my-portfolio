import React from 'react';
import { motion } from 'framer-motion';

export default function Experience() {
  const items = [
    {
      title: 'Web Developer — BeatDrop (Personal)',
      points: [
        'Built Spotify-like music app (PHP, JS, PostgreSQL).',
        'Playlists, playback, social features, responsive UI.'
      ]
    },
    {
      title: 'Intern — The Orchid Homes, Lahore',
      points: [
        'Developed company site with PHP & PostgreSQL.',
        'Created UI/UX mockups, branding, and assets.'
      ]
    }
  ];
  return (
    <section className="section" id="experience">
      <h2>Experience</h2>
      {items.map(({ title, points }, i) => (
        <motion.div key={i}
          initial={{ opacity:0, x:-50 }} whileInView={{ opacity:1, x:0 }}
          transition={{ duration:0.6, delay:i*0.2 }}
        >
          <h3>{title}</h3>
          <ul>{points.map((p,j)=><li key={j}>{p}</li>)}</ul>
        </motion.div>
      ))}
    </section>
  );
}
