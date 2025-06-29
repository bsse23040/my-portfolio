import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [form, setForm] = useState({ name:'', email:'', msg:'' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.name) errs.name = 'Name is required';
    if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Valid email required';
    if (!form.msg) errs.msg = 'Message can’t be empty';
    return errs;
  };

  const handleSubmit = e => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) return setErrors(errs);
    setSubmitted(true);
  };

  return (
    <section className="section" id="contact">
      <h2>Contact Me</h2>
      {submitted ? (
        <motion.p initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration:0.5 }}>
          Thank you, I’ll get back soon! 😊
        </motion.p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Name" value={form.name}
            onChange={e=>setForm({...form,name:e.target.value})}
          />
          {errors.name && <small style={{color:'red'}}>{errors.name}</small>}
          <input
            placeholder="Email" value={form.email}
            onChange={e=>setForm({...form,email:e.target.value})}
          />
          {errors.email && <small style={{color:'red'}}>{errors.email}</small>}
          <textarea
            rows="5" placeholder="Message"
            value={form.msg}
            onChange={e=>setForm({...form,msg:e.target.value})}
          />
          {errors.msg && <small style={{color:'red'}}>{errors.msg}</small>}
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      )}
    </section>
  );
}
