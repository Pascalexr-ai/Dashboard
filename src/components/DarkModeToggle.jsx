import { useState } from 'react';

const DarkModeToggle = () => {
  const [dark, setDark] = useState(false);

  const toggle = () => {
    setDark(!dark);
    if (!dark) document.body.classList.add('dark-mode');
    else document.body.classList.remove('dark-mode');
  };

  return (
    <button onClick={toggle} style={{padding:'5px 10px', cursor:'pointer'}}>
      {dark ? '🌙 Dark' : '☀️ Light'}
    </button>
  );
};

export default DarkModeToggle;

