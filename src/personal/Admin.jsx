import React, { useState } from "react";
import { Link } from "react-router-dom";
import { db } from "./firebase";
import {
  collection,
  contentRef,
  doc,
  deleteDoc,
  getDocs,
  limit,
  orderBy,
  query,
  saveContent,
  settingsRef,
  setDoc,
  updateDoc,
  serverTimestamp,
  importSeeds,
  where,
} from "./data";
import { useLive, usePaged, usePersonal } from "./hooks";
import {
  TYPES,
  PROJECT_STATUSES,
  entryUrl,
  errorMessage,
  safeUrl,
  seedContent,
  splitList,
} from "./model";
import { Markdown, Notice, SignIn, Pagination } from "./Shared";
import Messages from "./Messages";
const blank = {
  type: "opinions",
  title: "",
  summary: "",
  body: "",
  published: false,
  featured: false,
  tags: [],
  relatedIds: [],
  links: [],
  format: "Note",
  attribution: "",
  reasoning: "",
  date: "",
  period: "",
  category: "",
  projectStatus: "Exploring",
  collaborators: "",
  image: "",
  revision: 0,
};
export default function Admin() {
  const { isAdmin, user, authLoading } = usePersonal();
  const [tab, setTab] = useState("overview");
  if (authLoading)
    return (
      <div className="journal-reading">
        <Notice>Checking owner access…</Notice>
      </div>
    );
  if (!user)
    return (
      <div className="journal-reading">
        <p className="journal-eyebrow">Private dashboard</p>
        <h1>The writing room.</h1>
        <SignIn owner />
      </div>
    );
  if (!isAdmin)
    return (
      <div className="journal-reading">
        <h1>This room is private.</h1>
        <p>This account has no administrator access.</p>
        <Link to="/">Back home ↗</Link>
      </div>
    );
  return (
    <div className="journal-admin">
      <p className="journal-eyebrow">Owner dashboard</p>
      <h1>The writing room.</h1>
      <nav aria-label="Dashboard" className="journal-admin-tabs">
        {["overview", "content", "settings", "inbox", "discussions"].map(
          (name) => (
            <button
              key={name}
              className={tab === name ? "active" : ""}
              onClick={() => setTab(name)}
            >
              {name}
            </button>
          ),
        )}
      </nav>
      {tab === "overview" ? (
        <Overview onNavigate={setTab} />
      ) : tab === "content" ? (
        <ContentAdmin />
      ) : tab === "settings" ? (
        <SettingsAdmin />
      ) : tab === "inbox" ? (
        <Messages inAdmin />
      ) : (
        <SpacesAdmin />
      )}
    </div>
  );
}
function Overview({ onNavigate }) {
  const [error, setError] = useState(""),
    [status, setStatus] = useState("");
  const content = useLive(
    query(contentRef, orderBy("updatedAt", "desc"), limit(10)),
    "admin-overview",
  );
  return (
    <>
      <p className="journal-lede">
        Write something. Connect an idea. Keep a record of the things that
        matter.
      </p>
      <div className="journal-admin-shortcuts">
        <button onClick={() => onNavigate("content")}>
          Write & publish ↗
        </button>
        <button onClick={() => onNavigate("settings")}>
          Update your current activities ↗
        </button>
        <button onClick={() => onNavigate("inbox")}>
          Open private inbox ↗
        </button>
      </div>
      <h2>Recently edited</h2>
      <Notice error>{content.error}</Notice>
      <div className="journal-admin-records">
        {content.items.map((item) => (
          <div key={item.id}>
            <span>
              {item.title}
              <small>
                {item.type} · {item.published ? "Published" : "Draft"}
              </small>
            </span>
            <button onClick={() => onNavigate("content")}>Edit ↗</button>
          </div>
        ))}
      </div>
      <section className="journal-section">
        <h2>Bring in existing projects</h2>
        <p>
          Import four project summaries already present in the professional
          portfolio. Existing entries with these IDs are preserved.
        </p>
        <button
          className="journal-button"
          onClick={async () => {
            setError("");
            try {
              await importSeeds(seedContent);
              setStatus("Existing project summaries are now published.");
            } catch (e) {
              setError(errorMessage(e));
            }
          }}
        >
          Import existing projects
        </button>
        <Notice>{status}</Notice>
        <Notice error>{error}</Notice>
      </section>
    </>
  );
}
function ContentAdmin() {
  const { settings } = usePersonal();
  const [draft, setDraft] = useState(null),
    [error, setError] = useState(""),
    [status, setStatus] = useState(""),
    [busy, setBusy] = useState(false),
    [preview, setPreview] = useState(false),
    [filter, setFilter] = useState("");
  const [relationshipOptions, setRelationshipOptions] = useState([]),
    [relationshipTerm, setRelationshipTerm] = useState("");
  const content = usePaged(
    query(contentRef, orderBy("updatedAt", "desc")),
    "admin-content",
    50,
  );
  async function relationships() {
    setError("");
    try {
      const results = await getDocs(
        query(
          contentRef,
          orderBy("title"),
          where("title", ">=", relationshipTerm),
          where("title", "<=", relationshipTerm + "\uf8ff"),
          limit(30),
        ),
      );
      setRelationshipOptions(
        results.docs.map((d) => ({ id: d.id, ...d.data() })),
      );
    } catch (e) {
      setError(errorMessage(e));
    }
  }
  function change(key, value) {
    setDraft((current) => ({ ...current, [key]: value }));
    setStatus("");
  }
  async function save(e) {
    e.preventDefault();
    setBusy(true);
    setError("");
    try {
      const id = await saveContent(normalizeDraft(draft));
      setDraft(null);
      setStatus(
        `Saved ${draft.published ? "and published" : "as a draft"}. Entry ID: ${id}`,
      );
    } catch (e) {
      setError(errorMessage(e));
    } finally {
      setBusy(false);
    }
  }
  async function remove(item) {
    if (
      !window.confirm(
        `Permanently delete “${item.title}”? Related links will stop showing this entry.`,
      )
    )
      return;
    try {
      await deleteDoc(doc(contentRef, item.id));
      if (draft?.id === item.id) setDraft(null);
      setStatus("Entry deleted.");
    } catch (e) {
      setError(errorMessage(e));
    }
  }
  return (
    <>
      <div className="journal-section-heading">
        <h2>Content</h2>
        <button
          className="journal-button"
          onClick={() => {
            setDraft({ ...blank });
            setError("");
            setStatus("");
          }}
        >
          New entry
        </button>
      </div>
      <Notice error>{error || content.error}</Notice>
      <Notice>{status}</Notice>
      {draft ? (
        <form className="journal-editor" onSubmit={save}>
          <div className="journal-form-grid">
            <label>
              Section
              <select
                aria-label="Section"
                value={draft.type}
                onChange={(e) => change("type", e.target.value)}
              >
                {TYPES.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </label>
            <label>
              Format
              <select
                aria-label="Format"
                value={draft.format}
                onChange={(e) => change("format", e.target.value)}
              >
                {[
                  "Note",
                  "Opinion",
                  "Quote",
                  "Essay",
                  "Question",
                  "Link",
                  "Reflection",
                ].map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </label>
          </div>
          <label>
            Title
            <input
              required
              maxLength={180}
              value={draft.title}
              onChange={(e) => change("title", e.target.value)}
            />
          </label>
          <label>
            Short introduction
            <textarea
              rows={2}
              maxLength={600}
              value={draft.summary}
              onChange={(e) => change("summary", e.target.value)}
            />
          </label>
          <div className="journal-section-heading">
            <label htmlFor="entry-body">Content · Markdown supported</label>
            <button type="button" onClick={() => setPreview(!preview)}>
              {preview ? "Edit" : "Preview"}
            </button>
          </div>
          {preview ? (
            <Markdown>{draft.body}</Markdown>
          ) : (
            <textarea
              id="entry-body"
              required
              rows={15}
              maxLength={60000}
              value={draft.body}
              onChange={(e) => change("body", e.target.value)}
            />
          )}
          <div className="journal-form-grid">
            <label>
              Publication / review date (optional)
              <input
                type="date"
                value={draft.date}
                onChange={(e) => change("date", e.target.value)}
              />
            </label>
            <label>
              Period / approximate year
              <input
                placeholder="e.g. 2025, or During university"
                value={draft.period}
                maxLength={100}
                onChange={(e) => change("period", e.target.value)}
              />
            </label>
            <label>
              Tags · comma separated
              <input
                list="known-tags"
                value={draft.tagsText ?? draft.tags.join(", ")}
                onChange={(e) => {
                  change("tagsText", e.target.value);
                  change("tags", splitList(e.target.value));
                }}
              />
              <datalist id="known-tags">
                {settings.tags.map((t) => (
                  <option key={t} value={t} />
                ))}
              </datalist>
            </label>
            <label>
              Image URL (optional)
              <input
                value={draft.image}
                onChange={(e) => change("image", e.target.value)}
                placeholder="https://…"
              />
            </label>
          </div>
          {draft.type === "projects" && (
            <div className="journal-form-grid">
              <label>
                Category
                <input
                  list="project-categories"
                  value={draft.category}
                  onChange={(e) => change("category", e.target.value)}
                />
                <datalist id="project-categories">
                  {settings.categories.map((c) => (
                    <option key={c} value={c} />
                  ))}
                </datalist>
              </label>
              <label>
                Status
                <select
                  aria-label="Status"
                  value={draft.projectStatus}
                  onChange={(e) => change("projectStatus", e.target.value)}
                >
                  {PROJECT_STATUSES.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </label>
              <label>
                Collaborators
                <input
                  value={draft.collaborators}
                  onChange={(e) => change("collaborators", e.target.value)}
                />
              </label>
            </div>
          )}
          {draft.type === "beliefs" && (
            <label>
              Why you hold this belief · Markdown
              <textarea
                rows={5}
                maxLength={20000}
                value={draft.reasoning}
                onChange={(e) => change("reasoning", e.target.value)}
              />
            </label>
          )}
          {draft.format === "Quote" && (
            <label>
              Attribution
              <input
                maxLength={200}
                value={draft.attribution}
                onChange={(e) => change("attribution", e.target.value)}
              />
            </label>
          )}
          <label>
            References / links · one “label | URL” per line
            <textarea
              rows={3}
              value={
                draft.linksText ??
                draft.links.map((l) => `${l.label} | ${l.url}`).join("\n")
              }
              onChange={(e) => change("linksText", e.target.value)}
            />
          </label>
          <fieldset>
            <legend>Connected opinions, beliefs, projects & stories</legend>
            <p>Links appear on both entries. Drafts stay private.</p>
            <div className="journal-relation-search">
              <input
                aria-label="Find related content by title"
                value={relationshipTerm}
                onChange={(e) => setRelationshipTerm(e.target.value)}
                placeholder="Title begins with…"
              />
              <button type="button" onClick={relationships}>
                Find entries
              </button>
            </div>
            {[
              ...new Map(
                [...content.items, ...relationshipOptions].map((i) => [
                  i.id,
                  i,
                ]),
              ).values(),
            ]
              .filter((i) => i.id !== draft.id)
              .map((item) => (
                <label className="journal-check" key={item.id}>
                  <input
                    type="checkbox"
                    checked={draft.relatedIds.includes(item.id)}
                    onChange={(e) =>
                      change(
                        "relatedIds",
                        e.target.checked
                          ? [...draft.relatedIds, item.id].slice(0, 30)
                          : draft.relatedIds.filter((id) => id !== item.id),
                      )
                    }
                  />
                  {item.title}
                  <small>
                    {item.type}
                    {!item.published ? " · Draft" : ""}
                  </small>
                </label>
              ))}
          </fieldset>
          <div className="journal-inline-links">
            <label className="journal-check">
              <input
                type="checkbox"
                checked={draft.published}
                onChange={(e) => change("published", e.target.checked)}
              />{" "}
              Published
            </label>
            <label className="journal-check">
              <input
                type="checkbox"
                checked={draft.featured}
                onChange={(e) => change("featured", e.target.checked)}
              />{" "}
              Featured on homepage
            </label>
          </div>
          <div className="journal-inline-links">
            <button className="journal-button" disabled={busy}>
              {busy ? "Saving…" : "Save entry"}
            </button>
            <button
              type="button"
              onClick={() => {
                if (window.confirm("Discard this unsaved draft?"))
                  setDraft(null);
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <>
          <label>
            Find in loaded entries
            <input
              type="search"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            />
          </label>
          <div className="journal-admin-records">
            {content.items
              .filter((i) =>
                i.title.toLowerCase().includes(filter.toLowerCase()),
              )
              .map((item) => (
                <div key={item.id}>
                  <span>
                    {item.title}
                    <small>
                      {item.type} · {item.published ? "Published" : "Draft"}
                    </small>
                  </span>
                  <div>
                    <button
                      onClick={() => {
                        setDraft({ ...blank, ...item });
                        setError("");
                        setStatus("");
                      }}
                    >
                      Edit
                    </button>
                    {item.published && <Link to={entryUrl(item)}>View</Link>}
                    <button onClick={() => remove(item)}>Delete</button>
                  </div>
                </div>
              ))}
          </div>
          <Pagination pager={content} />
        </>
      )}
    </>
  );
}
export function normalizeDraft(draft) {
  const {
    tagsText: _tagsText,
    linksText,
    createdAt: _createdAt,
    updatedAt: _updatedAt,
    ...data
  } = draft;
  return {
    ...data,
    sortDate:
      data.date ||
      (data.period.match(/(?:19|20)\d{2}/)?.[0]
        ? `${data.period.match(/(?:19|20)\d{2}/)[0]}-01-01`
        : ""),
    links:
      linksText === undefined
        ? data.links
        : linksText
            .split("\n")
            .filter((line) => line.trim())
            .map((line) => {
              const [label, ...url] = line.split("|");
              return { label: label.trim(), url: url.join("|").trim() };
            }),
  };
}
function SettingsAdmin() {
  const { settings } = usePersonal();
  const [draft, setDraft] = useState(() => ({
    ...settings,
    socialText: settings.socials
      .map((s) => `${s.platform} | ${s.url}`)
      .join("\n"),
    tagText: settings.tags.join(", "),
    categoryText: settings.categories.join(", "),
  }));
  const [status, setStatus] = useState(""),
    [error, setError] = useState(""),
    [busy, setBusy] = useState(false);
  const change = (key, value) => setDraft((d) => ({ ...d, [key]: value }));
  async function save(e) {
    e.preventDefault();
    setError("");
    setStatus("");
    setBusy(true);
    try {
      const { socialText, tagText, categoryText, ...data } = draft;
      const socials = socialText
        .split("\n")
        .filter((l) => l.trim())
        .map((l) => {
          const [platform, ...url] = l.split("|");
          return { platform: platform.trim(), url: url.join("|").trim() };
        });
      if (socials.some((s) => !s.platform || !safeUrl(s.url)))
        throw new Error("Use “platform | valid URL” for each social link.");
      await setDoc(settingsRef, {
        ...data,
        socials,
        tags: splitList(tagText),
        categories: splitList(categoryText),
        updatedAt: serverTimestamp(),
      });
      setStatus("Settings published. Public pages update immediately.");
    } catch (e) {
      setError(errorMessage(e));
    } finally {
      setBusy(false);
    }
  }
  return (
    <form className="journal-editor" onSubmit={save}>
      <h2>About, current life & links</h2>
      <label>
        Homepage introduction
        <textarea
          required
          rows={3}
          maxLength={600}
          value={draft.introduction}
          onChange={(e) => change("introduction", e.target.value)}
        />
      </label>
      <label>
        About page · Markdown
        <textarea
          required
          rows={12}
          maxLength={30000}
          value={draft.about}
          onChange={(e) => change("about", e.target.value)}
        />
      </label>
      {["doing", "learning", "building", "exploring"].map((key) => (
        <label key={key}>
          Currently {key}
          <input
            maxLength={600}
            value={draft[key]}
            onChange={(e) => change(key, e.target.value)}
          />
        </label>
      ))}
      <label>
        Available tags · comma separated
        <input
          value={draft.tagText}
          onChange={(e) => change("tagText", e.target.value)}
        />
      </label>
      <label>
        Project categories · comma separated
        <input
          value={draft.categoryText}
          onChange={(e) => change("categoryText", e.target.value)}
        />
      </label>
      <label>
        Social links · one “platform | URL” per line
        <textarea
          rows={6}
          value={draft.socialText}
          onChange={(e) => change("socialText", e.target.value)}
        />
      </label>
      <small>
        Remove a line to hide that platform. Supported icons include Email,
        GitHub, LinkedIn, Instagram, YouTube, and a website icon for other
        platforms.
      </small>
      <button disabled={busy} className="journal-button">
        {busy ? "Publishing…" : "Publish settings"}
      </button>
      <Notice>{status}</Notice>
      <Notice error>{error}</Notice>
    </form>
  );
}
function SpacesAdmin() {
  const [draft, setDraft] = useState(null),
    [error, setError] = useState(""),
    [status, setStatus] = useState(""),
    [busy, setBusy] = useState(false);
  const spaces = usePaged(
    query(collection(db, "personalSpaces"), orderBy("updatedAt", "desc")),
    "admin-spaces",
    30,
  );
  const { items, error: loadError } = spaces;
  async function save(e) {
    e.preventDefault();
    setBusy(true);
    setError("");
    try {
      if (!draft.title.trim() || !draft.description.trim())
        throw new Error("Add a title and description.");
      if (draft.cover && !safeUrl(draft.cover))
        throw new Error("Use a valid cover URL.");
      const ref = draft.id
        ? doc(db, "personalSpaces", draft.id)
        : doc(collection(db, "personalSpaces"));
      const { id: _id, ...data } = draft;
      await setDoc(ref, {
        ...data,
        updatedAt: serverTimestamp(),
        createdAt: draft.createdAt || serverTimestamp(),
      });
      setDraft(null);
      setStatus("Discussion saved.");
    } catch (e) {
      setError(errorMessage(e));
    } finally {
      setBusy(false);
    }
  }
  return (
    <>
      <div className="journal-section-heading">
        <h2>Discussion spaces</h2>
        <button
          className="journal-button"
          onClick={() =>
            setDraft({
              title: "",
              description: "",
              cover: "",
              status: "Open",
              published: false,
            })
          }
        >
          New discussion
        </button>
      </div>
      <Notice error>{error || loadError}</Notice>
      <Notice>{status}</Notice>
      {draft ? (
        <form className="journal-editor" onSubmit={save}>
          <label>
            Title
            <input
              required
              maxLength={180}
              value={draft.title}
              onChange={(e) => setDraft({ ...draft, title: e.target.value })}
            />
          </label>
          <label>
            Description
            <textarea
              required
              maxLength={4000}
              rows={5}
              value={draft.description}
              onChange={(e) =>
                setDraft({ ...draft, description: e.target.value })
              }
            />
          </label>
          <label>
            Cover image URL
            <input
              value={draft.cover}
              onChange={(e) => setDraft({ ...draft, cover: e.target.value })}
            />
          </label>
          <label>
            Status
            <select
              aria-label="Status"
              value={draft.status}
              onChange={(e) => setDraft({ ...draft, status: e.target.value })}
            >
              {["Open", "Closed", "Archived"].map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </label>
          <label className="journal-check">
            <input
              type="checkbox"
              checked={draft.published}
              onChange={(e) =>
                setDraft({ ...draft, published: e.target.checked })
              }
            />{" "}
            Publicly listed
          </label>
          <div className="journal-inline-links">
            <button className="journal-button" disabled={busy}>
              Save discussion
            </button>
            <button type="button" onClick={() => setDraft(null)}>
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <div className="journal-admin-records">
          {items.map((space) => (
            <div key={space.id}>
              <span>
                {space.title}
                <small>
                  {space.status} ·{" "}
                  {space.published ? "Public" : "Unlisted draft"}
                </small>
              </span>
              <div>
                <button onClick={() => setDraft(space)}>Edit</button>
                <Link to={`/spaces/${space.id}`}>Open & moderate</Link>
                <button
                  onClick={async () => {
                    try {
                      await updateDoc(doc(db, "personalSpaces", space.id), {
                        status: "Archived",
                        published: false,
                        updatedAt: serverTimestamp(),
                      });
                      setStatus("Discussion archived and unpublished.");
                    } catch (e) {
                      setError(errorMessage(e));
                    }
                  }}
                >
                  Archive
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      <Pagination pager={spaces} />
    </>
  );
}
