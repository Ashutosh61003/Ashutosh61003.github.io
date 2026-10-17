import React, { useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import {
  Sun,
  Moon,
  Github,
  Linkedin,
  Mail,
  Instagram,
  Youtube,
  Globe,
  Menu,
  X,
} from "lucide-react";
import ReactMarkdown from "react-markdown";
import { db } from "./firebase";
import { doc } from "./data";
import { useLive, usePersonal } from "./hooks";
import { googleSignIn, ownerSignIn, logout } from "./firebase";
import { errorMessage, entryUrl, safeUrl } from "./model";
export function Markdown({ children }) {
  return (
    <div className="journal-prose">
      <ReactMarkdown
        components={{
          a: ({ href, children }) => (
            <a href={safeUrl(href)} rel="noopener noreferrer">
              {children}
            </a>
          ),
          img: ({ src, alt }) =>
            safeUrl(src) ? (
              <img src={safeUrl(src)} alt={alt || ""} loading="lazy" />
            ) : null,
        }}
      >
        {children || ""}
      </ReactMarkdown>
    </div>
  );
}
export function Notice({ children, error = false }) {
  return children ? (
    <p
      className={`journal-notice ${error ? "is-error" : ""}`}
      role={error ? "alert" : "status"}
    >
      {children}
    </p>
  ) : null;
}
export function Socials() {
  const { settings } = usePersonal();
  const icons = {
    GitHub: Github,
    LinkedIn: Linkedin,
    Email: Mail,
    Instagram,
    Youtube,
    YouTube: Youtube,
  };
  return (
    <div className="journal-socials">
      {settings.socials
        .filter((s) => safeUrl(s.url))
        .map((social, index) => {
          const Icon = icons[social.platform] || Globe;
          return (
            <a
              href={safeUrl(social.url)}
              key={`${social.platform}-${index}`}
              aria-label={social.platform}
              title={social.platform}
              rel="noopener noreferrer"
            >
              <Icon size={17} strokeWidth={1.5} />
            </a>
          );
        })}
    </div>
  );
}
export function SignIn({ owner = false }) {
  const [error, setError] = useState(""),
    [busy, setBusy] = useState(false),
    [password, setPassword] = useState("");
  async function submit(action) {
    setError("");
    setBusy(true);
    try {
      await action();
    } catch (e) {
      setError(errorMessage(e));
    } finally {
      setBusy(false);
    }
  }
  return (
    <div className="journal-auth">
      <p>
        {owner
          ? "Sign in with the existing owner account to manage this space."
          : "Sign in to participate. Reading the site is always open."}
      </p>
      {owner ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            submit(() => ownerSignIn(password));
          }}
        >
          <label>
            Owner password
            <input
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <button disabled={busy} className="journal-button">
            {busy ? "Signing in…" : "Owner sign-in"}
          </button>
        </form>
      ) : (
        <button
          className="journal-button"
          disabled={busy}
          onClick={() => submit(googleSignIn)}
        >
          {busy ? "Opening Google…" : "Continue with Google"}
        </button>
      )}
      <Notice error>{error}</Notice>
    </div>
  );
}
const sections = [
  "About",
  "Portfolio",
  "Opinions",
  "Projects",
  "Beliefs",
  "Story",
  "Connect",
];
export function Shell() {
  const { pathname } = useLocation();
  const { user, isAdmin } = usePersonal();
  const ownConversation = useLive(
    user && !isAdmin ? doc(db, "personalConversations", user.uid) : null,
    `unread-${user?.uid}-${isAdmin}`,
  );
  const conversation = ownConversation.items[0];
  const unread =
    conversation &&
    conversation.lastSenderId !== user?.uid &&
    (conversation.lastMessageAt?.toMillis() || 0) >
      (conversation.userReadAt?.toMillis() || 0);
  const [open, setOpen] = useState(false),
    [dark, setDark] = useState(() => {
      try {
        return localStorage.getItem("personal-theme") === "dark";
      } catch {
        return false;
      }
    });
  React.useLayoutEffect(() => {
    document.documentElement.classList.toggle("personal-dark", dark);
    try {
      localStorage.setItem("personal-theme", dark ? "dark" : "light");
    } catch {
      /* optional storage */
    }
    return () => document.documentElement.classList.remove("personal-dark");
  }, [dark]);
  React.useEffect(() => {
    setOpen(false);
    window.scrollTo(0, 0);
    document.title = `${pathname === "/" ? "Ashutosh Srivastava" : pathname.split("/")[1].replace(/^./, (s) => s.toUpperCase()) + " · Ashutosh Srivastava"}`;
  }, [pathname]);
  return (
    <div className="journal">
      <a className="journal-skip" href="#journal-main">
        Skip to content
      </a>
      <header className="journal-header">
        <Link className="journal-brand" to="/">
          ashutosh<span>.</span>
        </Link>
        <nav aria-label="Main navigation" className={open ? "is-open" : ""}>
          {sections.map((name) => (
            <NavLink to={`/${name.toLowerCase()}`} key={name}>
              {name}
            </NavLink>
          ))}
        </nav>
        <div className="journal-header-actions">
          <button
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            aria-pressed={dark}
            onClick={() => setDark(!dark)}
          >
            {dark ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <button
            className="journal-mobile-menu"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>
      <main id="journal-main">
        <Outlet />
      </main>
      <footer className="journal-footer">
        <div>
          <Link to="/">A life in the making.</Link>
          <Socials />
        </div>
        <div className="journal-footer-links">
          <Link to="/dreams">Dreams</Link>
          <Link to="/spaces">Discussions</Link>
          {user && <Link to="/messages">Messages{unread ? " · New" : ""}</Link>}
          <Link to="/admin">{isAdmin ? "Dashboard" : "Owner"}</Link>
          {user && <button onClick={() => logout()}>Sign out</button>}
        </div>
      </footer>
    </div>
  );
}
export function EntryList({ items, empty = "Nothing published here yet." }) {
  return items.length ? (
    <div className="journal-entries">
      {items.map((item) => (
        <article key={item.id}>
          <div className="journal-entry-meta">
            <span>
              {item.type === "projects"
                ? item.projectStatus
                : item.format || item.type}
            </span>
            {(item.date || item.period) && (
              <span>{item.date || item.period}</span>
            )}
            {item.category && <span>{item.category}</span>}
          </div>
          <h2>
            <Link to={entryUrl(item)}>
              {item.title} <span aria-hidden="true">↗</span>
            </Link>
          </h2>
          {item.summary && <p>{item.summary}</p>}
          <div className="journal-tags">
            {item.tags?.map((tag) => (
              <Link
                to={`/${item.type}?tag=${encodeURIComponent(tag)}`}
                key={tag}
              >
                {tag}
              </Link>
            ))}
          </div>
        </article>
      ))}
    </div>
  ) : (
    <p className="journal-empty">{empty}</p>
  );
}

export function Pagination({
  pager,
  nextLabel = "Next page",
  previousLabel = "Previous page",
}) {
  return pager.hasNext || pager.page > 1 ? (
    <div className="journal-pagination">
      {pager.page > 1 && (
        <button onClick={pager.previous}>{previousLabel} ←</button>
      )}
      <span>Page {pager.page}</span>
      {pager.hasNext && <button onClick={pager.next}>{nextLabel} →</button>}
    </div>
  ) : null;
}
