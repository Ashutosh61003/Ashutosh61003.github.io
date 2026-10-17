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

function LocalDateTime() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(timer);
  }, []);
  const day = now.getDate();
  const suffix = day % 100 >= 11 && day % 100 <= 13 ? "th" : ({ 1: "st", 2: "nd", 3: "rd" }[day % 10] || "th");
  return (
    <div className="landing-datetime" aria-live="off">
      <time className="landing-clock" dateTime={now.toISOString()} aria-label="Your local time">{now.toLocaleTimeString("en-GB", { hour12: false })}</time>
      <time className="landing-date" dateTime={`${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`}>
        {day}{suffix} {now.toLocaleDateString("en-GB", { month: "long" })} {now.getFullYear()}
      </time>
    </div>
  );
}

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
      <LocalDateTime />
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
          <span>Hey, I’m Ashutosh. 👋 I like making things that solve real problems, and I usually learn best by trying, getting stuck, and figuring things out.</span>{" "}
          <span>I spend a lot of my time thinking about products, playing with AI, and building little ideas into something people can actually use. I’m still learning, and that’s honestly the part I enjoy most. 🌱</span>{" "}
          <span>This is my small space on the internet to share my work and whatever I’m curious about next. Have a look around, check out what I’ve built, or just say hello. I’d love to hear from you.</span>
        </p>
      </div>
      <div className={`mobile-navigation ${expanded ? "is-expanded" : ""}`}>
        <button className="mobile-menu-backdrop" aria-label="Close page menu" tabIndex={-1} onClick={() => setExpanded(false)} />
        <div className="mobile-menu" id="mobile-page-menu" ref={menuRef} inert={expanded ? undefined : ""} aria-hidden={!expanded}>
          <svg className="mobile-menu-surface" viewBox="0 0 350 300" preserveAspectRatio="none" aria-hidden="true">
            <path d="M 29 1 H 321 Q 349 1 349 29 V 202 Q 349 220 331 220 H 321 C 297 220 280 237 280 261 V 272 Q 280 299 252 299 H 29 Q 1 299 1 271 V 29 Q 1 1 29 1 Z" />
          </svg>
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
