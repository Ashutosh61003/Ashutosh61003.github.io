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
  return null;
}

export function summary(steps) {
  const unfinished = steps.filter((s) => !s.completed);
  return {
    done: steps.filter((s) => s.completed).length,
    total: steps.length,
    seconds: unfinished.reduce((n, s) => n + (remainingSeconds(s) ?? 0), 0),
    unknown: unfinished.some((s) => remainingSeconds(s) === null),
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
