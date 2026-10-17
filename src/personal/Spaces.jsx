import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { db } from "./firebase";
import {
  collection,
  doc,
  query,
  where,
  orderBy,
  sendSpaceMessage,
  joinSpace,
  deleteDoc,
  setDoc,
  serverTimestamp,
} from "./data";
import { useLive, usePaged, usePersonal } from "./hooks";
import { errorMessage, safeUrl } from "./model";
import { Notice, SignIn, Pagination } from "./Shared";
export function SpacesPage() {
  const pager = usePaged(
    query(
      collection(db, "personalSpaces"),
      where("published", "==", true),
      orderBy("updatedAt", "desc"),
    ),
    "spaces",
  );
  const { items, loading, error } = pager;
  return (
    <div className="journal-reading">
      <p className="journal-eyebrow">Discussion spaces</p>
      <h1>A place to think together.</h1>
      <p className="journal-lede">
        Open questions, shared interests, and different perspectives. These are
        group discussions, separate from private messages.
      </p>
      <Notice>{loading ? "Loading discussions…" : ""}</Notice>
      <Notice error>{error}</Notice>
      <div className="journal-entries">
        {items.map((space) => (
          <article key={space.id}>
            <div className="journal-entry-meta">{space.status}</div>
            <h2>
              <Link to={`/spaces/${space.id}`}>{space.title} ↗</Link>
            </h2>
            <p>{space.description}</p>
          </article>
        ))}
      </div>
      {!loading && !items.length && (
        <p className="journal-empty">
          No discussions are open yet. Check back as new questions take shape.
        </p>
      )}
      <Pagination pager={pager} />
    </div>
  );
}
export function SpacePage() {
  const { id } = useParams(),
    { user, isAdmin, authLoading } = usePersonal();
  const [text, setText] = useState(""),
    [error, setError] = useState(""),
    [busy, setBusy] = useState(false);
  const space = useLive(doc(db, "personalSpaces", id), `space-${id}`);
  const membership = useLive(
    user ? doc(db, "personalSpaces", id, "members", user.uid) : null,
    `member-${id}-${user?.uid}`,
  );
  const joined = !!membership.items.length;
  const allowed = !!user && (joined || isAdmin);
  const messages = usePaged(
    allowed
      ? query(
          collection(db, "personalSpaces", id, "messages"),
          orderBy("createdAt", "desc"),
        )
      : null,
    `space-messages-${id}-${user?.uid}-${allowed}`,
    40,
  );
  const members = usePaged(
    allowed
      ? query(
          collection(db, "personalSpaces", id, "members"),
          orderBy("joinedAt", "asc"),
        )
      : null,
    `members-${id}-${user?.uid}-${allowed}`,
    30,
  );
  const bans = usePaged(
    isAdmin
      ? query(
          collection(db, "personalSpaces", id, "bans"),
          orderBy("createdAt", "desc"),
        )
      : null,
    `bans-${id}-${isAdmin}`,
    30,
  );
  const historyRef = useRef(null);
  const newestId = messages.items[0]?.id;
  useEffect(() => {
    if (messages.page === 1 && historyRef.current)
      historyRef.current.scrollTop = historyRef.current.scrollHeight;
  }, [newestId, messages.page]);
  async function act(action) {
    setBusy(true);
    setError("");
    try {
      await action();
    } catch (e) {
      setError(errorMessage(e));
    } finally {
      setBusy(false);
    }
  }
  const current = space.items[0];
  if (space.loading)
    return (
      <div className="journal-reading">
        <Notice>Loading discussion…</Notice>
      </div>
    );
  if (!current)
    return (
      <div className="journal-reading">
        <h1>Discussion unavailable.</h1>
        <Notice error>{space.error}</Notice>
        <Link to="/spaces">All discussions ↗</Link>
      </div>
    );
  return (
    <div className="journal-reading">
      <Link to="/spaces" className="journal-eyebrow">
        ← Discussions
      </Link>
      <h1>{current.title}</h1>
      <p className="journal-detail-meta">
        {current.status} · A shared discussion hosted by Ashutosh
      </p>
      {current.cover && safeUrl(current.cover) && (
        <img className="journal-cover" src={safeUrl(current.cover)} alt="" />
      )}
      <p className="journal-lede">{current.description}</p>
      <Notice error>
        {error || messages.error || membership.error || members.error}
      </Notice>
      {!authLoading && !user && <SignIn />}
      {user && !joined && current.status === "Open" && (
        <button
          className="journal-button"
          disabled={busy}
          onClick={() => act(() => joinSpace(user, id))}
        >
          Join discussion
        </button>
      )}
      {allowed && (
        <>
          <details className="journal-members">
            <summary>
              Participants ({members.items.length}
              {members.hasNext ? "+" : ""})
            </summary>
            {members.items.map((member) => (
              <div key={member.id}>
                <span>{member.displayName}</span>
                {isAdmin && member.uid !== user.uid && (
                  <button
                    onClick={() => {
                      if (
                        window.confirm(
                          `Remove and block ${member.displayName} from this space?`,
                        )
                      )
                        act(async () => {
                          await setDoc(
                            doc(db, "personalSpaces", id, "bans", member.id),
                            {
                              createdAt: serverTimestamp(),
                              displayName: member.displayName,
                            },
                          );
                          await deleteDoc(
                            doc(db, "personalSpaces", id, "members", member.id),
                          );
                        });
                    }}
                  >
                    Remove & block
                  </button>
                )}
              </div>
            ))}
            <Pagination pager={members} />
          </details>
          {isAdmin && bans.items.length > 0 && (
            <details className="journal-members">
              <summary>Removed participants</summary>
              {bans.items.map((ban) => (
                <div key={ban.id}>
                  <span>{ban.displayName || ban.id}</span>
                  <button
                    onClick={() =>
                      act(() =>
                        deleteDoc(
                          doc(db, "personalSpaces", id, "bans", ban.id),
                        ),
                      )
                    }
                  >
                    Allow to rejoin
                  </button>
                </div>
              ))}
              <Pagination pager={bans} />
            </details>
          )}
          <div className="journal-message-history" ref={historyRef}>
            <Notice>{messages.loading ? "Loading discussion…" : ""}</Notice>
            <Pagination
              pager={messages}
              nextLabel="Earlier messages"
              previousLabel="Newer messages"
            />
            {!messages.loading && !messages.items.length && (
              <p className="journal-empty">The conversation starts here.</p>
            )}
            {messages.items
              .slice()
              .reverse()
              .map((message) => (
                <article key={message.id}>
                  <span>{message.displayName}</span>
                  <p>{message.text}</p>
                  <time>{message.createdAt?.toDate?.().toLocaleString()}</time>
                  {isAdmin && (
                    <button
                      className="journal-moderate"
                      onClick={() => {
                        if (window.confirm("Delete this discussion message?"))
                          act(() =>
                            deleteDoc(
                              doc(
                                db,
                                "personalSpaces",
                                id,
                                "messages",
                                message.id,
                              ),
                            ),
                          );
                      }}
                    >
                      Delete message
                    </button>
                  )}
                </article>
              ))}
          </div>
          {joined && current.status === "Open" ? (
            <form
              className="journal-composer"
              onSubmit={(e) => {
                e.preventDefault();
                act(async () => {
                  await sendSpaceMessage(user, id, text);
                  messages.reset();
                  setText("");
                });
              }}
            >
              <label>
                Contribute to the discussion
                <textarea
                  required
                  maxLength={2000}
                  rows={3}
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
              </label>
              <button
                className="journal-button"
                disabled={busy || !text.trim()}
              >
                {busy ? "Posting…" : "Post to discussion ↗"}
              </button>
            </form>
          ) : (
            <Notice>
              {current.status === "Open"
                ? "Join to contribute."
                : "This discussion is closed to new messages."}
            </Notice>
          )}
          {joined && (
            <button
              className="journal-text-link"
              onClick={() =>
                act(() =>
                  deleteDoc(doc(db, "personalSpaces", id, "members", user.uid)),
                )
              }
            >
              Leave discussion
            </button>
          )}
        </>
      )}
    </div>
  );
}
