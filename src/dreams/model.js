export const accents = ["peach", "sage", "lavender", "blue"];
export const emptyWorkspace = () => ({
  goals: [],
  steps: [],
  pinnedStepId: null,
});
export function todayKey(date = new Date()) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}
export const ordered = (items) => [...items].sort((a, b) => a.order - b.order);
export function nextStep(data) {
  const active = ordered(data.goals.filter((g) => !g.archived));
  const candidates = active.flatMap((g) =>
    ordered(data.steps.filter((s) => s.goalId === g.id && !s.completed)),
  );
  return (
    candidates.find((s) => s.id === data.pinnedStepId) || candidates[0] || null
  );
}
export function remainingSeconds(step) {
  if (step.completed) return 0;
  if (
    step.durationMinutes !== null &&
    step.durationMinutes !== undefined &&
    step.durationMinutes !== ""
  ) {
    return Math.max(0, Number(step.durationMinutes) * 60);
  }
  const meta = step.metadata;
  if (!meta) return null;
  const videos = meta.videos || [];
  if (step.kind === "playlist" && videos.length) {
    const remaining = videos.slice(step.completedThrough || 0);
    const known = remaining.filter((v) => v.seconds !== null);
    return known.length
      ? known.reduce((n, v) => n + v.seconds, 0)
      : remaining.length
        ? null
        : 0;
  }
  return meta.seconds ?? null;
}
export function summary(steps) {
  const unfinished = steps.filter((s) => !s.completed);
  return {
    done: steps.filter((s) => s.completed).length,
    total: steps.length,
    seconds: unfinished.reduce((n, s) => n + (remainingSeconds(s) ?? 0), 0),
    unknown: unfinished.some(
      (s) =>
        remainingSeconds(s) === null ||
        (s.durationMinutes == null && s.metadata?.partial),
    ),
  };
}
export function duration(seconds) {
  if (seconds === null || seconds === undefined) return "Time not set";
  if (seconds === 0) return "0 min";
  const minutes = Math.ceil(seconds / 60);
  return minutes < 60
    ? `${minutes} min`
    : `${Math.floor(minutes / 60)}h${minutes % 60 ? ` ${minutes % 60}m` : ""}`;
}
export function move(items, id, direction) {
  const sorted = ordered(items);
  const index = sorted.findIndex((item) => item.id === id);
  const target = index + direction;
  if (index < 0 || target < 0 || target >= sorted.length) return items;
  [sorted[index], sorted[target]] = [sorted[target], sorted[index]];
  return sorted.map((item, order) => ({ ...item, order }));
}
export function youtubeResource(value) {
  try {
    const url = new URL(value);
    if (
      ![
        "youtube.com",
        "www.youtube.com",
        "m.youtube.com",
        "youtu.be",
        "www.youtu.be",
      ].includes(url.hostname)
    )
      return null;
    const playlist = url.searchParams.get("list");
    if (playlist && /^[\w-]{10,100}$/.test(playlist))
      return { kind: "playlist", id: playlist };
    const id = url.hostname.endsWith("youtu.be")
      ? url.pathname.slice(1)
      : url.searchParams.get("v") ||
        url.pathname.match(/^\/(?:shorts|embed|live)\/([\w-]+)/)?.[1];
    return id && /^[\w-]{11}$/.test(id) ? { kind: "video", id } : null;
  } catch {
    return null;
  }
}
