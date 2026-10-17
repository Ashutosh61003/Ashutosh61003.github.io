export const OWNER_UID = "AvqwmPY304eoBGWcOk536dCWgYq1";
export const TYPES = ["opinions", "beliefs", "projects", "story"];
export const PROJECT_STATUSES = [
  "Exploring",
  "Planned",
  "Building",
  "Active",
  "Completed",
  "Archived",
];
export const defaultSettings = {
  introduction:
    "I’m Ashutosh Srivastava. I explore product, technology, and the ideas that shape a life.",
  about:
    "I’m a computer science graduate focused on product management, user discovery, product strategy, analytics, and growth experiments.\n\nMy work includes product systems at Flurn, early consumer product and growth work at Hugsy, and projects across AI, iOS, analytics, and more.\n\nThis is my space for the work, the questions, and the journey beyond it.",
  doing: "Exploring product management opportunities.",
  learning: "",
  building: "",
  exploring: "",
  tags: ["Product", "AI", "Technology"],
  categories: [
    "Software",
    "Product",
    "Research",
    "Creative",
    "Civic & policy",
    "Business",
  ],
  socials: [
    { platform: "Email", url: "mailto:ashu.61003@gmail.com" },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/ashutosh-srivastava-892433226/",
    },
    { platform: "GitHub", url: "https://github.com/AshutoshSri123" },
  ],
};
export const seedContent = [
  {
    id: "scope",
    type: "projects",
    title: "SCOPE",
    summary:
      "A solar output estimator built with SwiftUI, Core ML, location, and weather data.",
    body: "Developed a Solar Capacity Output Potential Estimator for predicting solar generation from user location, roof area, and weather inputs.\n\nThe iOS experience brings together maps, onboarding, weather context, and Core ML regression.",
    category: "Software",
    projectStatus: "Completed",
    period: "Aug 2025",
    tags: ["AI", "iOS"],
    links: [
      { label: "GitHub", url: "https://github.com/AshutoshSri123/SCOPE" },
    ],
  },
  {
    id: "ecommerce-analytics",
    type: "projects",
    title: "E-commerce Analytics",
    summary:
      "A Python and SQL pipeline for revenue analysis, segmentation, and visualization.",
    body: "Created an analytics system covering CSV ingestion, relational modeling, SQL querying, customer segmentation, and notebook reporting.",
    category: "Software",
    projectStatus: "Completed",
    period: "Sep 2025",
    tags: ["Analytics"],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/AshutoshSri123/SQL_Python_EcommerceProject",
      },
    ],
  },
  {
    id: "rainbow-coloring",
    type: "projects",
    title: "Rainbow Coloring",
    summary:
      "Fuzzy logic and rainbow coloring algorithms across graph families.",
    body: "Co-led a graph algorithm project combining fuzzy logic with rainbow coloring. The work includes alpha-cut graph construction, BFS and DFS checks, spanning-tree coloring, and greedy optimization.",
    category: "Research",
    projectStatus: "Completed",
    period: "Nov 2025",
    tags: ["Algorithms"],
    links: [
      { label: "Project report", url: "/files/fuzzy-rainbow-coloring.pdf" },
    ],
  },
  {
    id: "parkinsons-detection",
    type: "projects",
    title: "Parkinsons Detection",
    summary:
      "A leakage-aware, explainable voice-based machine learning framework.",
    body: "Built a voice-based biomedical ML framework with GroupKFold validation, feature selection, ensemble classification workflows, and SHAP explanations.",
    category: "Research",
    projectStatus: "Completed",
    period: "Apr 2026",
    tags: ["AI", "Research"],
    links: [
      { label: "Project report", url: "/files/parkinsons-disease-report.pdf" },
    ],
  },
].map((item) => ({
  ...item,
  published: true,
  featured: false,
  relatedIds: [],
  category: "",
  projectStatus: "Exploring",
  period: "",
  ...item,
  format: "Note",
  attribution: "",
  reasoning: "",
  date: "",
  image: "",
  collaborators: "",
  revision: 0,
}));
export function safeUrl(value) {
  if (typeof value !== "string") return "";
  if (/^\/(?!\/)/.test(value)) return value;
  try {
    const url = new URL(value);
    return ["https:", "http:", "mailto:"].includes(url.protocol) ? value : "";
  } catch {
    return "";
  }
}
export function entryUrl(entry) {
  return `/${entry.type}/${entry.id}`;
}
export function splitList(value) {
  return [
    ...new Set(
      value
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean),
    ),
  ].slice(0, 30);
}
export function validateEntry(entry) {
  if (!TYPES.includes(entry.type)) throw new Error("Choose a content type.");
  if (!entry.title?.trim() || entry.title.length > 180)
    throw new Error("Use a title of 1–180 characters.");
  if (!entry.body?.trim() || entry.body.length > 60000)
    throw new Error("Add content of up to 60,000 characters.");
  if (entry.summary.length > 600)
    throw new Error("Keep the summary under 600 characters.");
  if (entry.links.some((link) => !safeUrl(link.url)))
    throw new Error("Use valid http, https, mailto, or site-relative links.");
  if (entry.image && !safeUrl(entry.image))
    throw new Error("Use a valid image URL.");
  return entry;
}
export function errorMessage(error) {
  const code = error?.code || "";
  if (code.includes("permission-denied"))
    return "This data is unavailable for this account. Please sign in again or try later.";
  if (code.includes("unauthorized-domain"))
    return "Google sign-in is not enabled for this domain yet.";
  if (code.includes("operation-not-allowed"))
    return "Google sign-in needs to be enabled in Firebase Authentication.";
  if (code.includes("popup-blocked"))
    return "Allow the sign-in popup and try again.";
  if (code.includes("popup-closed"))
    return "Sign-in was cancelled. You can try again.";
  if (code.includes("invalid-credential"))
    return "The owner email or password was not accepted.";
  if (code.includes("failed-precondition"))
    return "The database indexes are still being configured. Please try again shortly.";
  return error?.message || "Could not connect. Please try again.";
}
