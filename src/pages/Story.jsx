import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';

export default function Story() {
  return (
    <main className="personal-story">
      <Link className="story-back" to="/">← Home</Link>
      <article>
        <p className="story-eyebrow">My story</p>
        <h1>Still becoming.</h1>
        <p>I’m Ashutosh Srivastava, a computer science graduate exploring product management, AI, and the process of turning ideas into things people can use.</p>
        <p>This space will hold the journey beyond the work: the experiences, people, and moments that shape who I am.</p>
        <span className="story-note">More of the story, soon.</span>
        <div className="story-links"><Link to="/portfolio">Explore my work ↗</Link><Link to="/dreams">See my dreams ↗</Link></div>
      </article>
    </main>
  );
}
