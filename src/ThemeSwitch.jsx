import React, { useEffect } from 'react';
import './ThemeSwitch.css';

const ThemeSwitch = () => {
  useEffect(() => {
    const toggleSwitch = document.querySelector(
      '.theme-switch input[type="checkbox"]'
    );

    const currentTheme = localStorage.getItem('theme')
      ? localStorage.getItem('theme')
      : null;

    if (currentTheme) {
      document.documentElement.setAttribute('data-theme', currentTheme);

      if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
      }
    }

    function switchTheme(e) {
      if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
      }
    }

    toggleSwitch.addEventListener('change', switchTheme, false);
  }, []);

  return (
    <div className='theme-switch-wrapper'>
      <label className='theme-switch' htmlFor='checkbox'>
        <input type='checkbox' id='checkbox' />
        <div className='slider round'></div>
      </label>
      <em>Enable Dark Mode.</em>
    </div>
  );
};

export { ThemeSwitch };
