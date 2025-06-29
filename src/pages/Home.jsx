import React from 'react';
import { motion } from 'framer-motion';
import profile from '../assets/profile_pic.jpg';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Home() {
  return (
    <section className="header-section" id="home">
      <motion.img
        src={profile} alt="Aujla" className="profile-pic"
        initial={{ scale:0 }} animate={{ scale:1 }} transition={{ type:'spring', stiffness:200 }}
      />
      <motion.h1 initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.3 }}>
        Mohsin Raza Aujla
      </motion.h1>
      <motion.p initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.5 }}>
        Full-Stack Developer • Graphic Designer • Software Engineer — Lahore, Pakistan
      </motion.p>
      <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.7 }} style={{ fontSize:'1.5rem', marginTop:'15px' }}>
        <a href="https://github.com/bsse23040" target="_blank" rel="noreferrer"><FaGithub style={{ margin:'0 10px' }} /></a>
        <a href="https://linkedin.com/in/mohsin-raza-aujla-6971082b1" target="_blank" rel="noreferrer"><FaLinkedin style={{ margin:'0 10px' }} /></a>
      </motion.div>
    </section>
  );
}
