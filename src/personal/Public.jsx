import React, { useEffect, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { useLive, usePaged, usePersonal } from "./hooks";
import { contentRef, doc, getDoc, limit, orderBy, query, where } from "./data";
import { PROJECT_STATUSES, safeUrl } from "./model";
import { EntryList, Markdown, Notice, Socials, Pagination } from "./Shared";
const descriptions = {
  opinions: [
    "Notes from my mind.",
    "Thoughts, observations, questions, and ideas worth spending time with.",
  ],
  beliefs: [
    "What I believe.",
    "Principles and positions, with room for my thinking to evolve.",
  ],
  projects: [
    "Things I’m working on.",
    "Built, imagined, and still being explored.",
  ],
  story: [
    "The story so far.",
    "Experiences, turning points, and the things that stay with me.",
  ],
};
export function FrontPage() {
  const { settings } = usePersonal();
  const { items, loading, error } = useLive(
    query(
      contentRef,
      where("published", "==", true),
      orderBy("updatedAt", "desc"),
      limit(8),
    ),
    "home",
  );
  const featured = useLive(
    query(
      contentRef,
      where("published", "==", true),
      where("featured", "==", true),
      orderBy("updatedAt", "desc"),
      limit(3),
    ),
    "home-featured",
  );
  const story = useLive(
    query(
      contentRef,
      where("published", "==", true),
      where("type", "==", "story"),
      orderBy("sortDate", "desc"),
      limit(1),
    ),
    "home-story",
  );
  return (
    <>
      <section className="journal-home-intro">
        <div
          className="journal-portrait"
          role="img"
          aria-label="Ashutosh Srivastava"
        >
          <img
            className="portrait-light"
            src="/images/ashutosh-light.webp"
            alt=""
            width="144"
            height="144"
            fetchPriority="high"
          />
          <img
            className="portrait-dark"
            src="/images/ashutosh-dark-studio.webp"
            alt=""
            width="144"
            height="144"
            fetchPriority="high"
          />
        </div>
        <p className="journal-eyebrow">Ashutosh Srivastava</p>
        <h1>A life in the making.</h1>
        <p className="journal-home-copy">{settings.introduction}</p>
        <Link className="journal-text-link" to="/about">
          A little more about me ↗
        </Link>
      </section>
      <div className="journal-home-body">
        <section className="journal-section">
          <div className="journal-section-heading">
            <h2>These days</h2>
            <Link to="/dreams">Dreams & ambitions ↗</Link>
          </div>
          <dl className="journal-now">
            {["doing", "learning", "building", "exploring"]
              .filter((key) => settings[key])
              .map((key) => (
                <div key={key}>
                  <dt>{key}</dt>
                  <dd>{settings[key]}</dd>
                </div>
              ))}
          </dl>
        </section>
        <section className="journal-section">
          <div className="journal-section-heading">
            <h2>From this space</h2>
            <Link to="/opinions">All opinions ↗</Link>
          </div>
          <Notice>{loading ? "Loading recent entries…" : ""}</Notice>
          {error && (
            <Notice error>
              Recent updates are temporarily unavailable. Please try again
              shortly.
            </Notice>
          )}
          <EntryList
            items={items}
            empty="The first notes, beliefs, and stories will appear here as they’re published."
          />
        </section>
        {featured.items.length > 0 && (
          <section className="journal-section">
            <div className="journal-section-heading">
              <h2>Worth a closer look</h2>
            </div>
            <EntryList items={featured.items} />
          </section>
        )}
        {story.items.length > 0 && (
          <section className="journal-section">
            <div className="journal-section-heading">
              <h2>A moment from my story</h2>
              <Link to="/story">The story so far ↗</Link>
            </div>
            <EntryList items={story.items} />
          </section>
        )}
        <section className="journal-invitation">
          <span className="journal-eyebrow">An open invitation</span>
          <h2>Good things start with a conversation.</h2>
          <p>An idea, a question, a project, or simply a hello.</p>
          <Link to="/connect">Let’s connect ↗</Link>
        </section>
      </div>
    </>
  );
}
export function AboutPage() {
  const { settings } = usePersonal();
  return (
    <div className="journal-reading">
      <p className="journal-eyebrow">About me</p>
      <h1>A person behind the work.</h1>
      <Markdown>{settings.about}</Markdown>
      <div className="journal-inline-links">
        <Link to="/portfolio">Professional portfolio ↗</Link>
        <Link to="/story">My story ↗</Link>
        <Link to="/connect">Say hello ↗</Link>
      </div>
    </div>
  );
}
export function CollectionPage({ type }) {
  const [params, setParams] = useSearchParams(),
    [search, setSearch] = useState("");
  const { settings } = usePersonal();
  const pager = usePaged(
    query(
      contentRef,
      where("type", "==", type),
      where("published", "==", true),
      orderBy(type === "story" ? "sortDate" : "updatedAt", "desc"),
    ),
    type,
  );
  const { items, loading, error } = pager;
  useEffect(() => {
    setSearch("");
  }, [type]);
  const entries = items;
  const tag = params.get("tag") || "",
    category = params.get("category") || "",
    status = params.get("status") || "";
  const tags = [
    ...new Set([
      ...settings.tags,
      ...entries.flatMap((i) => i.tags || []),
      ...(tag ? [tag] : []),
    ]),
  ];
  const filtered = entries.filter(
    (i) =>
      (!tag || i.tags?.includes(tag)) &&
      (!category || i.category === category) &&
      (!status || i.projectStatus === status) &&
      (!search ||
        `${i.title} ${i.summary} ${i.body}`
          .toLowerCase()
          .includes(search.toLowerCase())),
  );
  function filter(key, value) {
    setParams((current) => {
      if (value) current.set(key, value);
      else current.delete(key);
      return current;
    });
  }
  return (
    <div className="journal-reading journal-wide">
      <p className="journal-eyebrow">{type === "story" ? "My story" : type}</p>
      <h1>{descriptions[type][0]}</h1>
      <p className="journal-lede">{descriptions[type][1]}</p>
      <div className="journal-filters">
        <label className="journal-search">
          Search
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search entries"
            type="search"
          />
        </label>
        <label>
          Topic
          <select
            aria-label="Topic"
            value={tag}
            onChange={(e) => filter("tag", e.target.value)}
          >
            <option value="">All topics</option>
            {tags.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </label>
        {type === "projects" && (
          <>
            <label>
              Category
              <select
                aria-label="Category"
                value={category}
                onChange={(e) => filter("category", e.target.value)}
              >
                <option value="">All categories</option>
                {[
                  ...new Set([
                    ...settings.categories,
                    ...entries.map((i) => i.category),
                  ]),
                ]
                  .filter(Boolean)
                  .map((c) => (
                    <option key={c}>{c}</option>
                  ))}
              </select>
            </label>
            <label>
              Status
              <select
                aria-label="Status"
                value={status}
                onChange={(e) => filter("status", e.target.value)}
              >
                <option value="">All statuses</option>
                {PROJECT_STATUSES.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </label>
          </>
        )}
      </div>
      <Notice>{loading ? "Loading entries…" : ""}</Notice>
      <Notice error>{error}</Notice>
      {!loading && (
        <EntryList
          items={filtered}
          empty={
            entries.length
              ? "No entries match these filters."
              : "Nothing published yet. This space will grow over time."
          }
        />
      )}
      <Pagination pager={pager} />
      {(pager.hasNext || pager.page > 1) && (
        <p className="journal-notice">
          Search and filters apply to this page of entries.
        </p>
      )}
      {type === "projects" && (
        <Link to="/portfolio/projects" className="journal-text-link">
          Explore the complete professional project archive ↗
        </Link>
      )}
    </div>
  );
}
export function DetailPage({ type }) {
  const { id } = useParams();
  const { items, loading, error } = useLive(
    doc(contentRef, id),
    `${type}-${id}`,
  );
  const item = items.find((i) => i.type === type);
  const [directRelated, setDirectRelated] = useState([]);
  const backlinks = usePaged(
    item
      ? query(
          contentRef,
          where("published", "==", true),
          where("relatedIds", "array-contains", id),
        )
      : null,
    `backlinks-${id}-${!!item}`,
    20,
  );
  const related = [
    ...new Map(
      [...directRelated, ...backlinks.items]
        .filter((entry) => entry.id !== id)
        .map((entry) => [entry.id, entry]),
    ).values(),
  ];
  useEffect(() => {
    let active = true;
    setDirectRelated([]);
    if (!item) return;
    Promise.all(
      (item.relatedIds || []).map(async (relatedId) => {
        try {
          const d = await getDoc(doc(contentRef, relatedId));
          return d.exists() && d.data().published
            ? { id: d.id, ...d.data() }
            : null;
        } catch {
          return null;
        }
      }),
    ).then((entries) => {
      if (active) setDirectRelated(entries.filter(Boolean));
    });
    return () => {
      active = false;
    };
  }, [id, item]);
  useEffect(() => {
    if (item) document.title = `${item.title} · Ashutosh Srivastava`;
  }, [item]);
  if (loading)
    return (
      <div className="journal-reading">
        <Notice>Loading entry…</Notice>
      </div>
    );
  if (!item)
    return (
      <div className="journal-reading">
        <h1>Entry unavailable.</h1>
        <p>It may be a draft, have been removed, or not exist.</p>
        <Notice error>{error}</Notice>
        <Link to={`/${type}`}>Back to {type} ↗</Link>
      </div>
    );
  return (
    <article className="journal-reading">
      <Link className="journal-eyebrow" to={`/${type}`}>
        ← {type}
      </Link>
      <h1>{item.title}</h1>
      <p className="journal-detail-meta">
        {[
          item.date || item.period,
          item.type === "projects" ? item.projectStatus : item.format,
          item.category,
        ]
          .filter(Boolean)
          .join(" · ")}
      </p>
      {item.summary && <p className="journal-lede">{item.summary}</p>}
      {item.image && safeUrl(item.image) && (
        <img
          className="journal-cover"
          src={safeUrl(item.image)}
          alt={item.title}
        />
      )}
      <Markdown>{item.body}</Markdown>
      {item.attribution && (
        <p className="journal-attribution">— {item.attribution}</p>
      )}
      {item.reasoning && (
        <section className="journal-section">
          <h2>Why I hold this view</h2>
          <Markdown>{item.reasoning}</Markdown>
        </section>
      )}
      {item.collaborators && <p>With {item.collaborators}</p>}
      <div className="journal-inline-links">
        {item.links?.map((link, index) => (
          <a key={index} href={safeUrl(link.url)} rel="noopener noreferrer">
            {link.label} ↗
          </a>
        ))}
      </div>
      <div className="journal-tags">
        {item.tags?.map((tag) => (
          <Link key={tag} to={`/${type}?tag=${encodeURIComponent(tag)}`}>
            {tag}
          </Link>
        ))}
      </div>
      {(!!related.length || backlinks.page > 1) && (
        <section className="journal-section">
          <h2>Connected ideas</h2>
          <EntryList items={related} />
          <Pagination pager={backlinks} nextLabel="More connected entries" />
        </section>
      )}
      <Notice error>{backlinks.error}</Notice>
    </article>
  );
}
export function ConnectPage() {
  return (
    <div className="journal-reading">
      <p className="journal-eyebrow">Connect</p>
      <h1>Let’s find common ground.</h1>
      <p className="journal-lede">
        A good question. An idea worth exploring. Something we could build
        together.
      </p>
      <div className="journal-connect-list">
        <Link to="/messages">
          <span>
            Say hello privately<small>A conversation between you and me.</small>
          </span>
          <span>↗</span>
        </Link>
        <Link to="/messages?idea=1">
          <span>
            Share an idea or collaboration
            <small>
              A little context, what you have in mind, and where I fit in.
            </small>
          </span>
          <span>↗</span>
        </Link>
        <Link to="/spaces">
          <span>
            Join a discussion
            <small>Shared questions, different perspectives.</small>
          </span>
          <span>↗</span>
        </Link>
        <Link to="/projects">
          <span>
            Explore what I’m building
            <small>Find a project you’d like to contribute to.</small>
          </span>
          <span>↗</span>
        </Link>
      </div>
      <Socials />
    </div>
  );
}
export function NotFound() {
  return (
    <div className="journal-reading">
      <h1>A page yet to be written.</h1>
      <Link to="/">Back home ↗</Link>
    </div>
  );
}
