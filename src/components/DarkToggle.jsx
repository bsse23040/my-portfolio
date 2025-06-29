import React from 'react';
export default function DarkToggle({ dark, setDark }) {
  return (
    <button className="dark-toggle" onClick={() => setDark(!dark)}>
      {dark ? '🌞 Light Mode' : '🌙 Dark Mode'}
    </button>
  );
}
