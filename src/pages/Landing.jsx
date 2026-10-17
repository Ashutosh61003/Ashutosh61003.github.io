import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Moon, Sun, Home, Briefcase, Layers, Mail, Plus, User, BookOpen, Camera, Lightbulb, FileText } from "lucide-react";
import "./Landing.css";

const pages = [
  { label: "Home", to: "/", icon: Home },
  { label: "Portfolio", to: "/portfolio", icon: User },
  { label: "Work", to: "/portfolio/work", icon: Briefcase },
  { label: "Projects", to: "/portfolio/projects", icon: Layers },
  { label: "Identity", to: "/portfolio/identity", icon: User },
  { label: "Thoughts", to: "/portfolio/thoughts", icon: Lightbulb },
  { label: "Blogs", to: "/portfolio/blogs", icon: BookOpen },
  { label: "Photos", to: "/portfolio/photography", icon: Camera },
  { label: "Contact", to: "/portfolio/contact", icon: Mail },
];
const primaryPages = [pages[0], pages[2], pages[3], pages[8]];

export default function Landing() {
  const [expanded, setExpanded] = useState(false);
  const toggleRef = useRef(null);
  const menuRef = useRef(null);
  useEffect(() => {
    if (!expanded) return;
    const close = (event) => {
      if (event.key === "Escape") {
        setExpanded(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", close);
    menuRef.current?.querySelector("a")?.focus({ preventScroll: true });
    return () => document.removeEventListener("keydown", close);
  }, [expanded]);
  const [dark, setDark] = useState(() => {
    try {
      return localStorage.getItem("personal-theme") === "dark";
    } catch {
      return false;
    }
  });
  useLayoutEffect(() => {
    document.documentElement.classList.toggle("personal-dark", dark);
    try {
      localStorage.setItem("personal-theme", dark ? "dark" : "light");
    } catch {
      /* Optional preference storage. */
    }
    return () => document.documentElement.classList.remove("personal-dark");
  }, [dark]);
  return (
    <main className="landing-page" aria-label="Ashutosh Srivastava">
      <button
        className="landing-theme"
        type="button"
        onClick={() => setDark((value) => !value)}
        aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
        aria-pressed={dark}
      >
        {dark ? (
          <Sun size={17} strokeWidth={1.5} />
        ) : (
          <Moon size={17} strokeWidth={1.5} />
        )}
      </button>
      <div className="landing-content">
        <div
          className="landing-portrait"
          role="img"
          aria-label="Portrait of Ashutosh Srivastava"
        >
          <img
            className="landing-portrait-light"
            src="/images/ashutosh-light.webp"
            width="180"
            height="180"
            alt=""
            fetchPriority="high"
          />
          <img
            className="landing-portrait-dark"
            src="/images/ashutosh-dark-studio.webp"
            width="180"
            height="180"
            alt=""
            fetchPriority="high"
          />
        </div>
        <h1>
          <Link
            to="/portfolio"
            aria-label="Ashutosh Srivastava — open portfolio"
            title="Open portfolio"
          >
            Ashutosh Srivastava
          </Link>
        </h1>
        <p className="landing-intro">
          I’m Ashutosh, a curious builder exploring the space between people,
          products, and technology. I enjoy turning messy ideas into useful
          experiences, asking better questions, and learning by making things.
          My work spans product thinking, design, AI, and software, with projects
          shaped by real problems and everyday curiosity. 🌱 This little corner
          of the internet is where I share what I’m building, what I’m learning along the way,
          and the ideas I want to explore next. Outside the finished work,
          there’s always another question, experiment, or possibility waiting.
          Take a look around, explore my portfolio, and say hello. I’m glad
          you’re here. 👋
        </p>
      </div>
      <div className={`mobile-navigation ${expanded ? "is-expanded" : ""}`}>
        <button className="mobile-menu-backdrop" aria-label="Close page menu" tabIndex={-1} onClick={() => setExpanded(false)} />
        <div className="mobile-menu" id="mobile-page-menu" ref={menuRef} inert={expanded ? undefined : ""} aria-hidden={!expanded}>
          <nav aria-label="All pages" className="mobile-menu-grid">
            {pages.map(({ label, to, icon: Icon }) => (
              <Link key={label} to={to} onClick={() => { setExpanded(false); toggleRef.current?.focus(); }}>
                <span><Icon size={24} strokeWidth={1.5} /></span>{label}
              </Link>
            ))}
            <a href="/files/AshutoshSrivastavaResume.pdf"><span><FileText size={24} strokeWidth={1.5} /></span>Resume</a>
          </nav>
        </div>
        <nav className="mobile-dock" aria-label="Main navigation" aria-hidden={expanded} inert={expanded ? "" : undefined}>
          {primaryPages.map(({ label, to, icon: Icon }) => (
            <Link key={label} to={to} aria-label={label} aria-current={to === "/" ? "page" : undefined}>
              <Icon size={23} strokeWidth={1.6} />
            </Link>
          ))}
        </nav>
        <button ref={toggleRef} className="mobile-menu-toggle" aria-label={expanded ? "Close page menu" : "Open page menu"} aria-expanded={expanded} aria-controls="mobile-page-menu" onClick={() => setExpanded((value) => !value)}>
          <Plus size={26} strokeWidth={1.6} />
        </button>
      </div>
    </main>
  );
}
