# Ashutosh Srivastava — personal website

A minimal personal space for current activities, writing, beliefs, projects, life events, and conversations. Built with React, Vite, React Router, Firebase Authentication and Cloud Firestore.

- `/` — current life and recent published content
- `/about`, `/opinions`, `/projects`, `/beliefs`, `/story` — public reading and connected entries
- `/portfolio` — original professional portfolio, preserved separately
- `/connect`, `/messages`, `/spaces` — contact, private communication and discussions
- `/admin` — existing owner's content dashboard
- `/dreams` — original personal Dreams workspace

```sh
npm ci
npm run dev
```

See [PERSONAL_PLATFORM.md](PERSONAL_PLATFORM.md) for the inspected architecture, data model, owner identity, Firebase deployment steps, test commands, hosting details, and first-release boundaries. Live interactive features require publishing the accompanying Firebase rules and indexes and authorizing the custom domain for Google sign-in.

Never commit passwords, service-account keys or private Firebase credentials. The committed Firebase web configuration only identifies the public client application.
