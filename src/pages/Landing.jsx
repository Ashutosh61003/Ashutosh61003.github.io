import React, { useLayoutEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Landing.css';

export default function Landing() {
  const [dark, setDark] = useState(() => {
    try { return localStorage.getItem('personal-theme') === 'dark'; } catch { return false; }
  });
  useLayoutEffect(() => {
    document.documentElement.classList.toggle('personal-dark', dark);
    try { localStorage.setItem('personal-theme', dark ? 'dark' : 'light'); } catch { /* Storage may be unavailable. */ }
    return () => document.documentElement.classList.remove('personal-dark');
  }, [dark]);
  return (
    <main className="personal-home" aria-labelledby="personal-title">
      <nav className="personal-nav" aria-label="Explore my world">
        <button className="personal-theme-toggle" type="button" onClick={() => setDark(!dark)} aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'} aria-pressed={dark}>
          {dark ? <Sun size={16} strokeWidth={1.5} /> : <Moon size={16} strokeWidth={1.5} />}
        </button>
        <span aria-hidden="true" />
        <Link to="/portfolio">Portfolio</Link>
        <span aria-hidden="true" />
        <Link to="/dreams">Dreams</Link>
        <span aria-hidden="true" />
        <Link to="/story">Story</Link>
      </nav>
      <section className="personal-intro">
        <div className="personal-portrait" role="img" aria-label="Ashutosh Srivastava">
          <img className="portrait-light" src="/images/ashutosh-light.webp" alt="" width="192" height="192" fetchPriority="high" loading="eager" />
          <img className="portrait-dark" src="/images/ashutosh-dark.webp" alt="" width="192" height="192" fetchPriority="high" loading="eager" />
        </div>
        <p className="personal-name">Ashutosh Srivastava</p>
        <h1 id="personal-title"><span>A life in the making.</span><span>Ideas, dreams <i>&</i> everything between.</span></h1>
        <p className="personal-caption">A little of who I am. A glimpse of who I’m becoming.</p>
      </section>
      <footer className="personal-footer"><span>Always curious.</span><Link to="/contact">Say hello <span aria-hidden="true">↗</span></Link></footer>
    </main>
  );
}
