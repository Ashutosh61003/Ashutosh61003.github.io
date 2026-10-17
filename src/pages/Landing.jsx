import React, { useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Moon, Sun } from "lucide-react";
import "./Landing.css";

export default function Landing() {
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
      </div>
    </main>
  );
}
