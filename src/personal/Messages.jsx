import React, { useEffect, useRef, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { db } from "./firebase";
import {
  collection,
  doc,
  orderBy,
  query,
  sendMessage,
  updateDoc,
  serverTimestamp,
  where,
} from "./data";
import { useLive, usePaged, usePersonal } from "./hooks";
import { errorMessage, safeUrl } from "./model";
import { Notice, SignIn, Pagination } from "./Shared";
function stamp(value) {
  return value?.toMillis?.() || 0;
}
export default function Messages({ inAdmin = false }) {
  const { user, isAdmin, authLoading } = usePersonal();
  const [params] = useSearchParams();
  const [selected, setSelected] = useState(""),
    [archived, setArchived] = useState(false);
  const [text, setText] = useState(""),
    [title, setTitle] = useState(""),
    [error, setError] = useState(""),
    [busy, setBusy] = useState(false);
  const ownId = user?.uid;
  const conversations = usePaged(
    user
      ? query(
          collection(db, "personalConversations"),
          ...(isAdmin ? [] : [where("ownerId", "==", ownId)]),
          orderBy("lastMessageAt", "desc"),
        )
      : null,
    `inbox-${ownId}-${isAdmin}`,
    30,
  );
  const id = isAdmin ? selected : ownId;
  const selectedConversation = useLive(
    user && id ? doc(db, "personalConversations", id) : null,
    `selected-${ownId}-${id}`,
  );
  const current = selectedConversation.items[0];
  const messages = usePaged(
    user && id
      ? query(
          collection(db, "personalConversations", id, "messages"),
          orderBy("createdAt", "desc"),
        )
      : null,
    `messages-${ownId}-${id}`,
    30,
  );
  useEffect(() => {
    setText("");
    setError("");
  }, [id]);
  useEffect(() => {
    if (!current || !user) return;
    const field = isAdmin ? "adminReadAt" : "userReadAt";
    if (stamp(current.lastMessageAt) > stamp(current[field]))
      updateDoc(doc(db, "personalConversations", current.id), {
        [field]: serverTimestamp(),
      }).catch((e) => setError(errorMessage(e)));
  }, [current, isAdmin, user]);
  const historyRef = useRef(null);
  const newestId = messages.items[0]?.id;
  useEffect(() => {
    if (messages.page === 1 && historyRef.current)
      historyRef.current.scrollTop = historyRef.current.scrollHeight;
  }, [newestId, messages.page]);
  async function send(e) {
    e.preventDefault();
    setError("");
    setBusy(true);
    try {
      const proposal = params.has("idea");
      await sendMessage(
        user,
        proposal ? `Idea / collaboration: ${title.trim()}\n\n${text}` : text,
        id,
        proposal ? "idea" : "message",
      );
      messages.reset();
      setText("");
      setTitle("");
    } catch (e) {
      setError(errorMessage(e));
    } finally {
      setBusy(false);
    }
  }
  async function change(values) {
    try {
      await updateDoc(doc(db, "personalConversations", id), values);
    } catch (e) {
      setError(errorMessage(e));
    }
  }
  if (authLoading) return <Notice>Checking your session…</Notice>;
  if (!user)
    return (
      <div className="journal-reading">
        <p className="journal-eyebrow">Private messages</p>
        <h1>A conversation, just us.</h1>
        <SignIn />
      </div>
    );
  return (
    <div className={inAdmin ? "" : "journal-reading journal-wide"}>
      <div className="journal-section-heading">
        <div>
          <p className="journal-eyebrow">Private messages</p>
          <h1>{isAdmin ? "Your inbox." : "A conversation, just us."}</h1>
        </div>
        {!inAdmin && <Link to="/connect">Connect ↗</Link>}
      </div>
      <Notice error>{conversations.error}</Notice>
      <div className={`journal-inbox ${isAdmin ? "has-list" : ""}`}>
        {isAdmin && (
          <aside className="journal-conversations" aria-label="Conversations">
            <label className="journal-check">
              <input
                type="checkbox"
                checked={archived}
                onChange={(e) => setArchived(e.target.checked)}
              />{" "}
              Show archived
            </label>
            {conversations.loading && <Notice>Loading conversations…</Notice>}
            {conversations.items
              .filter((c) => archived || !c.archived)
              .map((c) => (
                <button
                  key={c.id}
                  className={id === c.id ? "is-selected" : ""}
                  onClick={() => setSelected(c.id)}
                >
                  <strong>
                    {safeUrl(c.ownerPhoto) && (
                      <img
                        className="journal-reader-photo"
                        src={safeUrl(c.ownerPhoto)}
                        alt=""
                        width="24"
                        height="24"
                        referrerPolicy="no-referrer"
                      />
                    )}
                    {c.ownerName}
                    {c.lastSenderId !== user.uid &&
                      stamp(c.lastMessageAt) > stamp(c.adminReadAt) && (
                        <span className="journal-unread" aria-label="Unread" />
                      )}
                  </strong>
                  <small>{c.lastMessage.slice(0, 85)}</small>
                  {c.archived && <small>Archived</small>}
                </button>
              ))}
            {!conversations.loading && !conversations.items.length && (
              <Notice>No conversations yet.</Notice>
            )}
            <Pagination pager={conversations} />
          </aside>
        )}
        <section className="journal-thread" aria-label="Conversation history">
          {isAdmin && !id ? (
            <p className="journal-empty">Choose a conversation.</p>
          ) : (
            <>
              <header>
                <h2>
                  {isAdmin ? current?.ownerName || "Conversation" : "Ashutosh"}
                </h2>
                <small>
                  Only you and {isAdmin ? "this reader" : "Ashutosh"} can read
                  this conversation.
                </small>
                {isAdmin && current && (
                  <div className="journal-inline-links">
                    <button
                      onClick={() => change({ archived: !current.archived })}
                    >
                      {current.archived ? "Unarchive" : "Archive"}
                    </button>
                    <button
                      onClick={() => change({ blocked: !current.blocked })}
                    >
                      {current.blocked ? "Unblock" : "Block sender"}
                    </button>
                  </div>
                )}
              </header>
              <Notice error>{messages.error}</Notice>
              {messages.loading && <Notice>Loading history…</Notice>}
              <div className="journal-message-history" ref={historyRef}>
                <Pagination
                  pager={messages}
                  nextLabel="Earlier messages"
                  previousLabel="Newer messages"
                />
                {!messages.loading && !messages.items.length && (
                  <p className="journal-empty">
                    Start with a hello, a question, or an idea.
                  </p>
                )}
                {messages.items
                  .slice()
                  .reverse()
                  .map((message) => (
                    <article
                      key={message.id}
                      className={message.senderId === user.uid ? "is-own" : ""}
                    >
                      <span>
                        {message.senderId === user.uid
                          ? "You"
                          : isAdmin
                            ? current?.ownerName
                            : "Ashutosh"}
                        {message.kind === "idea" ? " · Idea" : ""}
                      </span>
                      <p>{message.text}</p>
                      <time>
                        {message.createdAt?.toDate?.().toLocaleString() ||
                          "Sending…"}
                      </time>
                    </article>
                  ))}
              </div>
              {current?.blocked && !isAdmin ? (
                <Notice>This conversation is closed.</Notice>
              ) : (
                <form className="journal-composer" onSubmit={send}>
                  {params.has("idea") && (
                    <label>
                      Idea or collaboration title
                      <input
                        required
                        value={title}
                        maxLength={160}
                        onChange={(e) => setTitle(e.target.value)}
                      />
                    </label>
                  )}
                  <label>
                    {params.has("idea") ? "Tell me about it" : "Your message"}
                    <textarea
                      required
                      maxLength={params.has("idea") ? 3700 : 4000}
                      rows={3}
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                    />
                  </label>
                  <button
                    className="journal-button"
                    disabled={busy || !text.trim()}
                  >
                    {busy ? "Sending…" : "Send privately ↗"}
                  </button>
                </form>
              )}
            </>
          )}
          <Notice error>{error}</Notice>
        </section>
      </div>
    </div>
  );
}
