import React, { useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ArrowDown,
  Plus,
  Check,
  X,
  BookOpen,
  Play,
  ListVideo,
  Link as LinkIcon,
  Flag,
  MoreHorizontal,
  LockKeyhole,
  Sparkles,
  ExternalLink,
  RefreshCw,
  Archive,
  Trash2,
} from "lucide-react";
import {
  accents,
  emptyWorkspace,
  ordered,
  nextStep,
  summary,
  duration,
  remainingSeconds,
  move,
  todayKey,
  youtubeResource,
} from "./model";
import { endpoint, request } from "./api";
import "./dreams.css";

const icons = {
  task: Flag,
  video: Play,
  playlist: ListVideo,
  article: BookOpen,
  link: LinkIcon,
};
const blankStep = (goalId, order) => ({
  id: crypto.randomUUID(),
  goalId,
  order,
  title: "",
  kind: "task",
  url: "",
  notes: "",
  durationMinutes: null,
  plannedDate: "",
  completed: false,
  completedThrough: 0,
  metadata: null,
});
function storedSession() {
  try {
    const value = JSON.parse(sessionStorage.getItem("dreams-edit"));
    return value?.expiresAt > Date.now() ? value : null;
  } catch {
    return null;
  }
}
function Modal({ title, children, onClose }) {
  const ref = useRef(null);
  useEffect(() => {
    const previous = document.activeElement;
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    ref.current?.focus();
    const handler = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "Tab") {
        const controls = [
          ...ref.current.querySelectorAll(
            "button:not(:disabled),input:not(:disabled),textarea,select,a[href]",
          ),
        ];
        const first = controls[0],
          last = controls.at(-1);
        if (
          event.shiftKey &&
          (document.activeElement === first ||
            document.activeElement === ref.current)
        ) {
          event.preventDefault();
          last?.focus();
        }
        if (
          !event.shiftKey &&
          (document.activeElement === last ||
            document.activeElement === ref.current)
        ) {
          event.preventDefault();
          first?.focus();
        }
      }
    };
    document.addEventListener("keydown", handler);
    return () => {
      document.body.style.overflow = oldOverflow;
      document.removeEventListener("keydown", handler);
      previous?.focus();
    };
  }, [onClose]);
  return (
    <div
      className="dr-overlay"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <section
        ref={ref}
        tabIndex={-1}
        className="dr-sheet"
        role="dialog"
        aria-modal="true"
        aria-label={title}
      >
        <header>
          <h2>{title}</h2>
          <button className="dr-icon" aria-label="Close" onClick={onClose}>
            <X size={20} />
          </button>
        </header>
        {children}
      </section>
    </div>
  );
}

export default function Dreams() {
  const [data, setData] = useState(emptyWorkspace);
  const [revision, setRevision] = useState(0);
  const [session, setSession] = useState(storedSession);
  const [status, setStatus] = useState(endpoint ? "Loading…" : "Not connected");
  const [error, setError] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const [mobilePath, setMobilePath] = useState(false);
  const [filter, setFilter] = useState("All");
  const [showArchived, setShowArchived] = useState(false);
  const [dialog, setDialog] = useState(null);
  const [password, setPassword] = useState("");
  const [unlocking, setUnlocking] = useState(false);
  const [draft, setDraft] = useState(null);
  const [lookupBusy, setLookupBusy] = useState(false);
  const [lookupError, setLookupError] = useState("");
  const [conflict, setConflict] = useState(null);
  const [pending, setPending] = useState(null);
  const busy = useRef(false);
  const dirty = useRef(false);
  const pendingRef = useRef(null);
  const revisionRef = useRef(0);
  const editing = !!session && session.expiresAt > Date.now();
  const goals = ordered(
    data.goals.filter((g) => !!g.archived === showArchived),
  );
  const selected = goals.find((g) => g.id === selectedId) || goals[0];
  const steps = ordered(data.steps.filter((s) => s.goalId === selected?.id));
  const next = nextStep(data);
  const nextGoal = data.goals.find((g) => g.id === next?.goalId);
  const total = summary(
    data.steps.filter((s) =>
      data.goals.some((g) => g.id === s.goalId && !g.archived),
    ),
  );
  const stats = summary(steps);
  const close = React.useCallback(() => {
    setDialog(null);
    setDraft(null);
    setPassword("");
    setLookupError("");
    dirty.current = !!pendingRef.current;
  }, []);
  const endEdit = React.useCallback(() => {
    setSession(null);
    sessionStorage.removeItem("dreams-edit");
  }, []);

  useEffect(() => {
    const title = document.title;
    document.title = "Dreams · Ashutosh";
    let robots = document.querySelector('meta[name="robots"]');
    const oldContent = robots?.content;
    if (!robots) {
      robots = document.createElement("meta");
      robots.name = "robots";
      document.head.appendChild(robots);
    }
    robots.content = "noindex, nofollow";
    return () => {
      document.title = title;
      if (oldContent === undefined) robots.remove();
      else robots.content = oldContent;
    };
  }, []);
  useEffect(() => {
    if (!session) return;
    const timer = setTimeout(
      () => {
        endEdit();
        setError("Edit session ended. Unlock again to save your changes.");
      },
      Math.max(0, session.expiresAt - Date.now()),
    );
    return () => clearTimeout(timer);
  }, [session, endEdit]);
  useEffect(() => {
    if (!endpoint) return;
    let alive = true;
    const load = async () => {
      if (busy.current || dirty.current || document.hidden) return;
      try {
        const result = await request("read");
        if (
          !alive ||
          busy.current ||
          dirty.current ||
          result.revision < revisionRef.current
        )
          return;
        revisionRef.current = result.revision;
        setData(result.data);
        setRevision(result.revision);
        setStatus("Saved");
        setError("");
      } catch (e) {
        if (alive) {
          setStatus("Retry");
          setError(e.message);
        }
      }
    };
    load();
    const timer = setInterval(load, 30000);
    window.addEventListener("focus", load);
    document.addEventListener("visibilitychange", load);
    return () => {
      alive = false;
      clearInterval(timer);
      window.removeEventListener("focus", load);
      document.removeEventListener("visibilitychange", load);
    };
  }, []);
  useEffect(() => {
    const handler = (e) => {
      if (dirty.current || busy.current || pending) {
        e.preventDefault();
        e.returnValue = "";
      }
    };
    window.addEventListener("beforeunload", handler);
    return () => window.removeEventListener("beforeunload", handler);
  }, [pending]);

  async function save(
    updated,
    closeAfter = false,
    expectedRevision = revision,
  ) {
    if (!editing || busy.current || conflict) return false;
    busy.current = true;
    dirty.current = true;
    setStatus("Saving…");
    setError("");
    try {
      const result = await request(
        "save",
        { data: updated, revision: expectedRevision },
        session.token,
      );
      setData(result.data);
      setRevision(result.revision);
      revisionRef.current = result.revision;
      setStatus("Saved");
      setPending(null);
      pendingRef.current = null;
      dirty.current = false;
      if (closeAfter) close();
      return true;
    } catch (e) {
      setStatus("Retry");
      setError(e.message);
      setPending({ data: updated, closeAfter, revision: expectedRevision });
      pendingRef.current = {
        data: updated,
        closeAfter,
        revision: expectedRevision,
      };
      if (e.status === 401) endEdit();
      if (e.status === 409) {
        const latest = await request("read").catch(() => null);
        setConflict(latest || { unavailable: true });
      }
      return false;
    } finally {
      busy.current = false;
    }
  }
  async function unlock(e) {
    e.preventDefault();
    setUnlocking(true);
    setError("");
    try {
      const result = await request("unlock", { password });
      sessionStorage.setItem("dreams-edit", JSON.stringify(result));
      setSession(result);
      close();
    } catch (e) {
      setError(e.message);
    } finally {
      setUnlocking(false);
    }
  }
  const openGoal = (goal) => {
    setDraft(
      goal
        ? { ...goal }
        : {
            id: crypto.randomUUID(),
            title: "",
            description: "",
            accent: "peach",
            archived: false,
            order: data.goals.length,
          },
    );
    dirty.current = true;
    setDialog("goal");
  };
  const openStep = (step) => {
    setDraft({ ...step });
    dirty.current = true;
    setLookupError("");
    setDialog("step");
  };
  const change = (key, value) => {
    dirty.current = true;
    setDraft((previous) => ({ ...previous, [key]: value }));
  };
  async function lookup(force = false) {
    if (!editing || lookupBusy) return;
    const url = draft.url;
    setLookupBusy(true);
    setLookupError("");
    try {
      const metadata = await request("metadata", { url, force }, session.token);
      setDraft((previous) =>
        previous?.url === url
          ? {
              ...previous,
              metadata,
              kind: metadata.kind,
              title: previous.title || metadata.title,
            }
          : previous,
      );
    } catch (e) {
      setLookupError(e.message);
    } finally {
      setLookupBusy(false);
    }
  }
  const goalSave = (e) => {
    e.preventDefault();
    const item = { ...draft, title: draft.title.trim() };
    save(
      {
        ...data,
        goals: data.goals.some((g) => g.id === item.id)
          ? data.goals.map((g) => (g.id === item.id ? item : g))
          : [...data.goals, item],
      },
      true,
    ).then((ok) => {
      if (ok) {
        setSelectedId(item.id);
        setMobilePath(true);
      }
    });
  };
  const stepSave = (e) => {
    e.preventDefault();
    const item = {
      ...draft,
      title: draft.title.trim(),
      durationMinutes:
        draft.durationMinutes === "" ? null : draft.durationMinutes,
    };
    save(
      {
        ...data,
        steps: data.steps.some((s) => s.id === item.id)
          ? data.steps.map((s) => (s.id === item.id ? item : s))
          : [...data.steps, item],
      },
      true,
    );
  };
  async function reloadConflict() {
    const latest = await request("read").catch((e) => {
      setError(e.message);
      return null;
    });
    if (!latest) return;
    setData(latest.data);
    setRevision(latest.revision);
    revisionRef.current = latest.revision;
    setConflict(null);
    setPending(null);
    pendingRef.current = null;
    setStatus("Saved");
    setError("");
    // Keep the open form so the user's text can be reviewed against the latest version.
    dirty.current = !!draft;
  }
  const locked = !editing || status === "Saving…" || !!pending || !!conflict;
  const openNext = () => {
    setShowArchived(false);
    setSelectedId(next.goalId);
    setMobilePath(true);
    setFilter("All");
    openStep(next);
  };
  const saveFeedback = (error || conflict) && (
    <div className="dr-notice dr-error" role="alert">
      <span>
        {conflict
          ? "Another device changed this workspace. Load the latest version, review this form, then save again."
          : error}
      </span>
      {conflict ? (
        <button type="button" onClick={reloadConflict}>
          Load latest
        </button>
      ) : (
        pending && (
          <button
            type="button"
            disabled={!editing || status === "Saving…"}
            onClick={(event) => {
              if (dialog === "goal" && draft) goalSave(event);
              else if (dialog === "step" && draft) stepSave(event);
              else save(pending.data, pending.closeAfter, pending.revision);
            }}
          >
            Retry save
          </button>
        )
      )}
    </div>
  );
  const visible = steps.filter((s) =>
    filter === "Completed"
      ? s.completed
      : filter === "Today"
        ? !s.completed && s.plannedDate === todayKey()
        : true,
  );

  return (
    <div className="dreams-app">
      <div className="dr-workspace">
        <header className="dr-top">
          <div>
            <div className="dr-eyebrow">A LITTLE SPACE TO GROW</div>
            <h1>
              Dreams<span className="dr-title-dot">.</span>
            </h1>
            <p>
              {new Date().toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
          <div className="dr-top-actions">
            <span className="dr-sync" role="status">
              <i className={status === "Saved" ? "saved" : ""} />
              {status}
            </span>
            <button
              className="dr-edit"
              disabled={!endpoint || status === "Saving…"}
              onClick={() =>
                editing ? endEdit() : (setError(""), setDialog("unlock"))
              }
            >
              {editing ? <Check size={16} /> : <LockKeyhole size={15} />}
              {editing ? "Done" : "Edit"}
            </button>
          </div>
        </header>
        {!endpoint && (
          <div className="dr-notice">
            <span>Sync isn’t connected yet.</span>
            <span>Your workspace will be ready after the one-time setup.</span>
          </div>
        )}
        {error && (
          <div className="dr-notice dr-error" role="alert">
            <span>{error}</span>
            {pending && !conflict && (
              <button
                disabled={!editing || status === "Saving…"}
                onClick={() =>
                  save(pending.data, pending.closeAfter, pending.revision)
                }
              >
                Retry save
              </button>
            )}
            {!pending && endpoint && (
              <button onClick={() => window.location.reload()}>
                Reconnect
              </button>
            )}
          </div>
        )}
        {conflict && (
          <div className="dr-notice" role="alert">
            <span>
              This workspace changed on another device. Your form is still here.
              Load the latest version, review it, then save again.
            </span>
            <button onClick={reloadConflict}>Load latest</button>
          </div>
        )}
        <section className="dr-continue">
          <div>
            <span className="dr-eyebrow">
              {next ? "YOUR NEXT SMALL STEP" : "ONE STEP AT A TIME"}
            </span>
            <h2>
              {next
                ? next.title
                : total.total && total.done === total.total
                  ? "A little further. Well done."
                  : "Make room for what’s next."}
            </h2>
            <p>
              {next
                ? `${nextGoal?.title} · ${duration(remainingSeconds(next))}`
                : "Your goals. Your pace."}
            </p>
            {next && (
              <button className="dr-primary" onClick={openNext}>
                Continue <ArrowRight size={16} />
              </button>
            )}
          </div>
          <div className="dr-sprout" aria-hidden="true">
            <svg viewBox="0 0 140 140" fill="none">
              <path
                d="M72 116V63"
                stroke="#64442e"
                strokeWidth="5"
                strokeLinecap="round"
              />
              <path
                d="M72 82C38 84 25 61 29 40C55 37 76 52 72 82Z"
                fill="#a4b67b"
              />
              <path
                d="M73 67C72 37 89 22 113 26C117 51 99 70 73 67Z"
                fill="#c3ce94"
              />
              <path
                d="M49 118H96"
                stroke="#64442e"
                strokeWidth="5"
                strokeLinecap="round"
              />
              <circle cx="29" cy="102" r="4" fill="#e5a06b" />
              <path
                d="M113 86v14m-7-7h14"
                stroke="#d99a68"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </section>
        {total.total > 0 && (
          <div className="dr-summary">
            <span>
              <strong>
                {total.done}/{total.total}
              </strong>{" "}
              steps complete
            </span>
            <span>
              <strong>
                {duration(total.seconds)}
                {total.unknown ? "+" : ""}
              </strong>{" "}
              content time left
            </span>
          </div>
        )}
        <div className={`dr-columns ${mobilePath ? "path-open" : ""}`}>
          <aside className="dr-goals">
            <div className="dr-section-heading">
              <h2>Your goals</h2>
              <button
                className="dr-text"
                onClick={() => {
                  setShowArchived(!showArchived);
                  setSelectedId(null);
                }}
              >
                {showArchived ? "Active" : "Archived"}
              </button>
            </div>
            <div className="dr-goal-list">
              {goals.map((goal, index) => {
                const count = summary(
                  data.steps.filter((s) => s.goalId === goal.id),
                );
                return (
                  <article
                    className={`dr-goal ${selected?.id === goal.id ? "selected" : ""}`}
                    key={goal.id}
                  >
                    <button
                      className="dr-goal-open"
                      onClick={() => {
                        setSelectedId(goal.id);
                        setMobilePath(true);
                        setFilter("All");
                      }}
                    >
                      <span className={`dr-symbol ${goal.accent}`}>
                        <Flag size={20} />
                      </span>
                      <span className="dr-grow">
                        <strong>{goal.title}</strong>
                        <small>
                          {count.done}/{count.total} steps ·{" "}
                          {duration(count.seconds)}
                          {count.unknown ? "+" : ""} left
                        </small>
                        <span className="dr-progress">
                          <i
                            style={{
                              width: `${count.total ? (count.done / count.total) * 100 : 0}%`,
                            }}
                          />
                        </span>
                      </span>
                      <ArrowRight size={17} />
                    </button>
                    {editing && (
                      <div className="dr-row-tools">
                        <button
                          disabled={locked || index === 0}
                          aria-label={`Move ${goal.title} up`}
                          onClick={() =>
                            save({
                              ...data,
                              goals: [
                                ...data.goals.filter(
                                  (g) => !!g.archived !== showArchived,
                                ),
                                ...move(goals, goal.id, -1),
                              ],
                            })
                          }
                        >
                          <ArrowUp size={14} />
                        </button>
                        <button
                          disabled={locked || index === goals.length - 1}
                          aria-label={`Move ${goal.title} down`}
                          onClick={() =>
                            save({
                              ...data,
                              goals: [
                                ...data.goals.filter(
                                  (g) => !!g.archived !== showArchived,
                                ),
                                ...move(goals, goal.id, 1),
                              ],
                            })
                          }
                        >
                          <ArrowDown size={14} />
                        </button>
                        <button
                          disabled={locked}
                          aria-label={`Edit ${goal.title}`}
                          onClick={() => openGoal(goal)}
                        >
                          <MoreHorizontal size={17} />
                        </button>
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
            {!goals.length && (
              <div className="dr-empty dr-empty-small">
                <Flag size={23} strokeWidth={1.5} />
                <h3>
                  {showArchived ? "Nothing archived." : "Start with a dream."}
                </h3>
                <p>
                  {showArchived
                    ? "Finished goals can rest here."
                    : "Give something you want to learn a place to begin."}
                </p>
              </div>
            )}
            {editing && !showArchived && (
              <button
                disabled={locked}
                className="dr-add"
                onClick={() => openGoal()}
              >
                <Plus size={18} /> Add goal
              </button>
            )}
            {!editing && !data.goals.length && endpoint && (
              <button className="dr-add" onClick={() => setDialog("unlock")}>
                <Plus size={18} /> Add goal
              </button>
            )}
          </aside>
          <section className="dr-path">
            <button className="dr-back" onClick={() => setMobilePath(false)}>
              <ArrowLeft size={17} /> Your goals
            </button>
            {selected ? (
              <>
                <div className="dr-section-heading">
                  <div>
                    <span className="dr-eyebrow">THE LEARNING PATH</span>
                    <h2>{selected.title}</h2>
                  </div>
                  {editing && (
                    <button
                      className="dr-icon"
                      disabled={locked}
                      aria-label="Edit goal"
                      onClick={() => openGoal(selected)}
                    >
                      <MoreHorizontal size={22} />
                    </button>
                  )}
                </div>
                {selected.description && (
                  <p className="dr-description">{selected.description}</p>
                )}
                <div className="dr-path-meta">
                  <span>
                    {stats.done} of {stats.total} complete
                  </span>
                  <span>
                    {duration(stats.seconds)}
                    {stats.unknown ? "+" : ""} content time left
                  </span>
                </div>
                <div
                  className="dr-filters"
                  role="group"
                  aria-label="Filter steps"
                >
                  {["All", "Today", "Completed"].map((label) => (
                    <button
                      key={label}
                      aria-pressed={filter === label}
                      className={filter === label ? "active" : ""}
                      onClick={() => setFilter(label)}
                    >
                      {label}
                    </button>
                  ))}
                </div>
                <div className="dr-timeline">
                  {visible.map((step) => {
                    const Icon = icons[step.kind] || Flag;
                    const index = steps.findIndex((s) => s.id === step.id);
                    return (
                      <article
                        key={step.id}
                        className={`dr-step ${step.completed ? "complete" : ""}`}
                      >
                        <button
                          className="dr-check"
                          disabled={locked}
                          aria-label={`${step.completed ? "Reopen" : "Complete"} ${step.title}`}
                          aria-pressed={step.completed}
                          onClick={() =>
                            save({
                              ...data,
                              steps: data.steps.map((s) =>
                                s.id === step.id
                                  ? { ...s, completed: !s.completed }
                                  : s,
                              ),
                            })
                          }
                        >
                          {step.completed && (
                            <Check size={12} strokeWidth={3} />
                          )}
                        </button>
                        <div className="dr-step-card">
                          <button
                            className="dr-step-open"
                            onClick={() => openStep(step)}
                          >
                            <span className={`dr-symbol ${selected.accent}`}>
                              <Icon size={21} strokeWidth={1.7} />
                            </span>
                            <span className="dr-grow">
                              <strong>{step.title}</strong>
                              <small>
                                {step.id === data.pinnedStepId &&
                                !step.completed
                                  ? "Pinned · "
                                  : ""}
                                {step.kind === "task"
                                  ? "Task"
                                  : step.kind.charAt(0).toUpperCase() +
                                    step.kind.slice(1)}
                                {step.plannedDate
                                  ? ` · ${step.plannedDate < todayKey() && !step.completed ? "Overdue · " : ""}${new Date(step.plannedDate + "T12:00:00").toLocaleDateString("en-US", { month: "short", day: "numeric" })}`
                                  : ""}
                              </small>
                            </span>
                            <span className="dr-step-time">
                              {duration(
                                step.completed
                                  ? remainingSeconds({
                                      ...step,
                                      completed: false,
                                    })
                                  : remainingSeconds(step),
                              )}
                            </span>
                          </button>
                          {editing && (
                            <div className="dr-row-tools">
                              <button
                                disabled={locked || index === 0}
                                aria-label={`Move ${step.title} up`}
                                onClick={() =>
                                  save({
                                    ...data,
                                    steps: [
                                      ...data.steps.filter(
                                        (s) => s.goalId !== selected.id,
                                      ),
                                      ...move(steps, step.id, -1),
                                    ],
                                  })
                                }
                              >
                                <ArrowUp size={14} />
                              </button>
                              <button
                                disabled={locked || index === steps.length - 1}
                                aria-label={`Move ${step.title} down`}
                                onClick={() =>
                                  save({
                                    ...data,
                                    steps: [
                                      ...data.steps.filter(
                                        (s) => s.goalId !== selected.id,
                                      ),
                                      ...move(steps, step.id, 1),
                                    ],
                                  })
                                }
                              >
                                <ArrowDown size={14} />
                              </button>
                            </div>
                          )}
                        </div>
                      </article>
                    );
                  })}
                </div>
                {!visible.length && (
                  <div className="dr-empty">
                    <BookOpen size={27} strokeWidth={1.4} />
                    <h3>
                      {steps.length
                        ? "A little breathing room."
                        : "Every path starts somewhere."}
                    </h3>
                    <p>
                      {steps.length
                        ? "No steps in this view."
                        : "Add your first task, lesson, or link."}
                    </p>
                  </div>
                )}
                {editing && (
                  <button
                    className="dr-add"
                    disabled={locked}
                    onClick={() =>
                      openStep(blankStep(selected.id, steps.length))
                    }
                  >
                    <Plus size={18} /> Add step
                  </button>
                )}
              </>
            ) : (
              <div className="dr-empty dr-path-empty">
                <Sparkles size={31} strokeWidth={1.2} />
                <h2>A path of your own.</h2>
                <p>Your learning, one small step at a time.</p>
              </div>
            )}
          </section>
        </div>
        <footer className="dr-footer">
          A little progress is still progress.
        </footer>
      </div>
      {dialog === "unlock" && (
        <Modal title="A space for you." onClose={close}>
          <p>Enter your password to make changes.</p>
          <form onSubmit={unlock}>
            <label>
              Password
              <input
                autoFocus
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            {error && (
              <p className="dr-form-error" role="alert">
                {error}
              </p>
            )}
            <button className="dr-primary" disabled={unlocking}>
              {unlocking ? "Opening…" : "Enable editing"}
              <ArrowRight size={16} />
            </button>
          </form>
        </Modal>
      )}
      {dialog === "goal" && draft && (
        <Modal
          title={
            data.goals.some((g) => g.id === draft.id)
              ? "Your goal"
              : "A new beginning"
          }
          onClose={close}
        >
          <form onSubmit={goalSave}>
            <label>
              Title
              <input
                autoFocus
                required
                maxLength={160}
                value={draft.title}
                onChange={(e) => change("title", e.target.value)}
              />
            </label>
            <label>
              A few words <span>optional</span>
              <textarea
                maxLength={2000}
                rows={3}
                value={draft.description}
                onChange={(e) => change("description", e.target.value)}
              />
            </label>
            <fieldset>
              <legend>Color</legend>
              <div className="dr-swatches">
                {accents.map((accent) => (
                  <button
                    type="button"
                    key={accent}
                    className={`${accent} ${draft.accent === accent ? "chosen" : ""}`}
                    aria-label={accent}
                    aria-pressed={draft.accent === accent}
                    onClick={() => change("accent", accent)}
                  >
                    {draft.accent === accent && <Check size={17} />}
                  </button>
                ))}
              </div>
            </fieldset>
            {saveFeedback}
            <button
              className="dr-primary"
              disabled={locked || !draft.title.trim()}
            >
              Save goal
              <Check size={16} />
            </button>
            {data.goals.some((g) => g.id === draft.id) && (
              <div className="dr-danger-actions">
                <button
                  type="button"
                  disabled={locked}
                  onClick={() =>
                    save(
                      {
                        ...data,
                        goals: data.goals.map((g) =>
                          g.id === draft.id
                            ? { ...g, archived: !g.archived }
                            : g,
                        ),
                      },
                      true,
                    )
                  }
                >
                  <Archive size={16} />
                  {draft.archived ? "Restore goal" : "Archive goal"}
                </button>
                <button
                  type="button"
                  disabled={locked}
                  onClick={() => setDialog("delete-goal")}
                >
                  <Trash2 size={16} />
                  Delete goal
                </button>
              </div>
            )}
          </form>
        </Modal>
      )}
      {dialog === "step" && draft && (
        <Modal title={editing ? "Your next step" : draft.title} onClose={close}>
          {editing ? (
            <form onSubmit={stepSave}>
              <label>
                Title
                <input
                  autoFocus
                  required
                  maxLength={160}
                  value={draft.title}
                  onChange={(e) => change("title", e.target.value)}
                />
              </label>
              <label>
                Type
                <select
                  value={draft.kind}
                  onChange={(e) => {
                    change("kind", e.target.value);
                    change("metadata", null);
                    change("completedThrough", 0);
                  }}
                >
                  {Object.keys(icons).map((kind) => (
                    <option key={kind} value={kind}>
                      {kind.charAt(0).toUpperCase() + kind.slice(1)}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                Link <span>optional</span>
                <input
                  type="url"
                  maxLength={2000}
                  placeholder="https://"
                  value={draft.url}
                  onChange={(e) => {
                    change("url", e.target.value);
                    change("metadata", null);
                    change("completedThrough", 0);
                  }}
                  onBlur={() => {
                    if (youtubeResource(draft.url) && !draft.metadata) lookup();
                  }}
                />
              </label>
              {youtubeResource(draft.url) && (
                <button
                  className="dr-text dr-fetch"
                  type="button"
                  disabled={lookupBusy || locked}
                  onClick={() => lookup(true)}
                >
                  <RefreshCw size={14} />
                  {lookupBusy
                    ? "Finding duration…"
                    : draft.metadata
                      ? "Refresh YouTube details"
                      : "Get YouTube details"}
                </button>
              )}
              {lookupError && (
                <p className="dr-form-error">
                  {lookupError} You can still save your link.
                </p>
              )}
              {draft.metadata && (
                <div className="dr-resource-summary">
                  <strong>
                    {duration(draft.metadata.seconds)} content time
                  </strong>
                  {draft.metadata.videos?.length > 1 && (
                    <span>{draft.metadata.videos.length} videos</span>
                  )}
                  {draft.metadata.partial && (
                    <span>Partial total · unavailable videos excluded</span>
                  )}
                </div>
              )}
              <div className="dr-form-pair">
                <label>
                  Minutes <span>optional override</span>
                  <input
                    type="number"
                    min="0"
                    max="1000000"
                    step="1"
                    value={draft.durationMinutes ?? ""}
                    onChange={(e) =>
                      change(
                        "durationMinutes",
                        e.target.value === "" ? null : Number(e.target.value),
                      )
                    }
                  />
                </label>
                <label>
                  Planned date <span>optional</span>
                  <input
                    type="date"
                    value={draft.plannedDate}
                    onChange={(e) => change("plannedDate", e.target.value)}
                  />
                </label>
              </div>
              {draft.kind === "playlist" &&
                draft.metadata?.videos?.length > 0 && (
                  <label>
                    Completed through video
                    <input
                      type="number"
                      min="0"
                      max={draft.metadata.videos.length}
                      value={draft.completedThrough}
                      onChange={(e) =>
                        change(
                          "completedThrough",
                          Math.min(
                            draft.metadata.videos.length,
                            Math.max(0, Math.floor(Number(e.target.value))),
                          ),
                        )
                      }
                    />
                  </label>
                )}
              <label>
                Notes <span>optional</span>
                <textarea
                  rows={4}
                  maxLength={20000}
                  value={draft.notes}
                  onChange={(e) => change("notes", e.target.value)}
                />
              </label>
              <label className="dr-checkbox">
                <input
                  type="checkbox"
                  checked={draft.completed}
                  onChange={(e) => change("completed", e.target.checked)}
                />
                Completed
              </label>
              {saveFeedback}
              <button
                className="dr-primary"
                disabled={locked || lookupBusy || !draft.title.trim()}
              >
                Save step
                <Check size={16} />
              </button>
              {data.steps.some((s) => s.id === draft.id) && (
                <div className="dr-danger-actions">
                  <button
                    type="button"
                    disabled={locked}
                    onClick={() =>
                      save(
                        {
                          ...data,
                          pinnedStepId:
                            data.pinnedStepId === draft.id ? null : draft.id,
                        },
                        true,
                      )
                    }
                  >
                    <Flag size={16} />
                    {data.pinnedStepId === draft.id ? "Unpin" : "Pin as next"}
                  </button>
                  <button
                    type="button"
                    disabled={locked}
                    onClick={() => setDialog("delete-step")}
                  >
                    <Trash2 size={16} />
                    Delete step
                  </button>
                </div>
              )}
            </form>
          ) : (
            <div className="dr-read-detail">
              <span className="dr-detail-kind">
                {draft.kind} · {duration(remainingSeconds(draft))}
              </span>
              {draft.notes && <p className="dr-notes">{draft.notes}</p>}
              {draft.plannedDate && <p>Planned for {draft.plannedDate}</p>}
              {draft.metadata?.partial && (
                <p>Partial duration: some videos are unavailable.</p>
              )}
              {draft.url && (
                <a
                  className="dr-primary"
                  href={/^https?:\/\//i.test(draft.url) ? draft.url : undefined}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open resource
                  <ExternalLink size={16} />
                </a>
              )}
              <button
                className="dr-text"
                onClick={() => {
                  close();
                  setDialog("unlock");
                }}
              >
                Unlock to edit
              </button>
            </div>
          )}
        </Modal>
      )}
      {(dialog === "delete-goal" || dialog === "delete-step") && (
        <Modal
          title={`Delete this ${dialog === "delete-goal" ? "goal" : "step"}?`}
          onClose={close}
        >
          <p>
            {dialog === "delete-goal"
              ? "Its steps and notes will also be deleted."
              : "This step and its notes will be deleted."}
          </p>
          {saveFeedback}
          <div className="dr-dialog-actions">
            <button
              className="dr-edit"
              onClick={() =>
                setDialog(dialog === "delete-goal" ? "goal" : "step")
              }
            >
              Keep it
            </button>
            <button
              className="dr-primary"
              disabled={locked}
              onClick={() =>
                save(
                  dialog === "delete-goal"
                    ? {
                        ...data,
                        goals: data.goals.filter((g) => g.id !== draft.id),
                        steps: data.steps.filter((s) => s.goalId !== draft.id),
                        pinnedStepId: data.steps.some(
                          (s) =>
                            s.id === data.pinnedStepId && s.goalId === draft.id,
                        )
                          ? null
                          : data.pinnedStepId,
                      }
                    : {
                        ...data,
                        steps: data.steps.filter((s) => s.id !== draft.id),
                        pinnedStepId:
                          data.pinnedStepId === draft.id
                            ? null
                            : data.pinnedStepId,
                      },
                  true,
                )
              }
            >
              Delete
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
}
