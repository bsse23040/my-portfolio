import React from 'react';
import { motion } from 'framer-motion';

const list = [
  'HTML', 'CSS', 'JavaScript', 'React',
  'PHP', 'Node.js', 'Flutter', 'Dart',
  'PostgreSQL', 'MongoDB', 'MySQL',
  'Git', 'REST APIs',
  'Figma', 'Illustrator', 'Photoshop', 'Blender'
];

export default function Skills() {
  return (
    <section className="section" id="skills">
      <h2>Skills</h2>
      <motion.div initial={{ opacity:0 }} whileInView={{ opacity:1 }} transition={{ duration:0.5 }}>
        <div className="skills-grid">
          <ul>{list.map((skill,i)=><li key={i}>{skill}</li>)}</ul>
        </div>
      </motion.div>
    </section>
  );
}
