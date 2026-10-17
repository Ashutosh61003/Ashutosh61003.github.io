# Personal platform

## Existing architecture and preservation

React 18, React Router 6, Vite 5, static GitHub Pages with a custom domain. The Pages setting currently uses the legacy repository-root build alongside the Actions deployment. `npm run build:pages-root` keeps the root publication files synchronized; `npm run build` prepares `dist` for Actions.

The professional home is still `/portfolio`, with its existing components and visual design. Its project gallery is now also at `/portfolio/projects`; `/project` remains a legacy gallery alias. `/work`, `/contact`, `/photography`, `/identity`, `/blogs`, and `/thoughts` remain available. Personal content uses `/projects`, `/opinions`, `/beliefs`, `/story`, `/about`, `/connect`, `/spaces`, `/messages`, and `/admin`. Dreams and its single-document transport are unchanged.

The new personal application and professional portfolio load in separate bundles. The two approximately 10 KB portrait WebP images preload from HTML, remain mounted together, and change visibility immediately with the theme. A small head script restores the theme before the app loads.

## Owner access

There is exactly one administrator: Firebase Auth UID `AvqwmPY304eoBGWcOk536dCWgYq1`, the existing `dreams-editor@ashutoshsrivastava.me` account. This is enforced in Firestore rules, separately from the UI. There is no editable administrator flag, user-controlled role document, or email-based privilege grant.

At `/admin`, use the existing owner password. Google sign-in is for visitors. A different Google account, including one with the owner's display name, receives no administrator privileges. To later use Google for the owner, the owner must deliberately link Google credentials to the same Firebase identity in a separate authorized change; creating a second identity does not grant access.

The public Firebase web configuration identifies the existing `aichatgemma` project and is not a server credential. No service-account key or privileged token is used in the frontend.

## Data model

- `personalContent/{id}`: one entity with `type` (`opinions`, `beliefs`, `projects`, `story`), `title`, `summary`, Markdown `body`, `published`, `featured`, `tags`, `relatedIds`, `links`, format/quote attribution, belief reasoning, optional exact date, approximate period, project category/status/collaborators, optional image URL, revision and server timestamps. `sortDate` derives an exact date or approximate year for story chronology. IDs never change when titles change. Related entries are fetched by ID and reverse relationships by `array-contains`; only published entries can be read anonymously. Missing/deleted connections are skipped. Detail backlinks are limited to 20 per entry for this first release.
- `personalSettings/site`: public introduction, About Markdown, doing/learning/building/exploring text, category/tag vocabulary, social links. Blank current-activity fields are hidden. Omitted social platforms are hidden.
- `personalUsers/{uid}`: display name, photo URL, updated timestamp; readable only by that user and owner. No email addresses are copied to Firestore.
- `personalConversations/{userUid}`: one private owner-reader thread, private identity/preview, latest sender/time/ID, owner/reader read timestamps, archive and block flags. Only its reader and owner can read it. The owner can list the inbox; other readers must query only their own `ownerId`.
- `personalConversations/{userUid}/messages/{id}`: immutable text, sender ID, kind (`message` or `idea`), server timestamp. A message and its conversation preview must be written atomically. A proposal is a private message with context rather than a second public collection.
- `personalSpaces/{id}`: title, description, optional cover URL, published flag, Open/Closed/Archived state, timestamps. Published metadata is public; message threads and participant names require membership or owner access.
- `personalSpaces/{id}/members/{uid}`: minimal display identity, join time, posting timestamp and latest message ID. No email or private account details. A reader can join themselves and leave. Owner can remove and ban.
- `personalSpaces/{id}/messages/{id}`: text, sender ID/display name, server timestamp. Owner may delete moderated messages. Participants cannot edit history or forge another sender ID.
- `personalSpaces/{id}/bans/{uid}`: owner-managed block records. A banned participant cannot read or post even before their membership document is removed.

All ordinary content changes propagate through Firestore subscriptions, without a redeployment. Content saves use a transaction and revision check to reject stale concurrent edits. Failed editor saves preserve the draft in the open form. Destructive content/message deletion requires a browser confirmation. Conversations and discussion spaces are archived instead of deleting their nested history.

## Initial content

No opinions, beliefs, life events, or current learning/building activities have been invented. The existing introduction and professional experience inform the About/default homepage text. Four existing project summaries can be imported using the owner dashboard's **Import existing projects** button; existing IDs are never overwritten. The full original project archive remains publicly available in the professional portfolio. After import, those summaries are ordinary editable content.

## Firebase deployment (required before the new interactive features are live)

1. Use existing project `aichatgemma`; do not create another database or replace unrelated services. Google and Email/Password providers are already enabled, verified in the console.
2. Add `ashutoshsrivastava.me` and, if used, `www.ashutoshsrivastava.me` to Authentication → Settings → Authorized domains. Localhost is already present. This authorizes OAuth redirects; it does not grant any visitor administrator privileges.
3. Publish `firestore.rules`. Existing published rules were inspected and matched the original Dreams-only rules. The updated file preserves the same Dreams UID, revision validation, one-hour editing limit, and default deny for unspecified paths.
4. Create the composite indexes in `firestore.indexes.json`. Preserve any unrelated existing indexes. With an already authorized Firebase CLI, `firebase deploy --only firestore:rules,firestore:indexes --project aichatgemma` deploys these files; review any proposed unrelated index deletions rather than accepting them. No Firebase CLI login is currently stored in this checkout's environment.
5. Wait for indexes to become Ready. Check published-content feeds anonymously; Google sign-in from the custom domain; owner login; publishing a draft; owner-reader replies; and group membership/posting. Do not seed fake opinions or send test messages to real people.
6. Run the root publication build and deploy through the existing GitHub Pages workflow. Open `/admin` and import existing projects if desired. The owner enters their existing password; the agent does not need to know it.

## Validation

```sh
npm ci
npm run lint:personal
npm run test:dreams
npm run test:personal
npm run build
npm run build:pages-root
```

`test:personal` starts disposable local Auth and Firestore emulators using project `demo-personal`, runs security rules tests, and runs browser workflows. Java 11+ is required by the pinned emulator toolchain (Java 19 used locally). Browser binaries can be installed with `npx playwright install chromium`. Emulator use is compiled out of production and additionally restricted to development on localhost/127.0.0.1. Test credentials belong only to the emulator.

Security tests cover public/draft isolation, fixed owner permissions, forged roles, concurrent revisions, private conversation isolation, owner replies, sender spoofing, orphan messages, throttling, blocked users, profile privacy, membership checks, closed spaces, bans, moderation, Google identity requirements, and preservation of Dreams protections. Browser tests cover content publishing/backlinks, filters, drafts, editable activities, discussion creation/posting, mobile navigation/themes, Google sign-in, private proposals/replies/archiving, and portfolio preservation.

## Deliberate first-release boundaries

- Discussions are public-to-discover and require sign-in/membership to read threads and post. Invitation-only spaces, custom participant roles, video/audio, attachments, reactions, and push/email notifications are later enhancements.
- Images use URLs; no new Storage bucket or file-upload service was introduced. Markdown renders without raw HTML; links are restricted to safe schemes.
- Feeds, inboxes, history, participants and admin lists use bounded cursor pages (20–50 records plus one lookahead). Full-text search and category/tag filters operate on the displayed page and say so when pagination is present. A dedicated search index can be added when content volume warrants it.
- Security rules enforce text size, authenticated Google identity for reader contributions, fixed ownership, atomic message writes and a five-second posting interval. This is basic abuse prevention, not a full bot-defense service; App Check, global quotas and a trusted server rate limiter can be added if abuse warrants them. Creating another account or leaving/rejoining a space can circumvent a per-thread/per-membership interval.
- Archive/unpublish is provided for conversations and discussion spaces. Recursive permanent removal of nested histories, bulk export and account-erasure workflows require a trusted server/admin operation; none is exposed as an unsafe client-side shortcut.
- Stable content URLs work through the existing Pages SPA fallback. New arbitrary content-detail URLs receive GitHub Pages' HTTP 404 before the SPA renders. Per-entry server-rendered SEO/social previews and reliable HTTP 200 deep links would require a host with rewrites (for example Firebase Hosting) or generated detail pages on publish. The current hosting is deliberately preserved; no claim of server rendering is made.
- Public sections start honestly empty until the owner publishes. No fake engagement, participants, testimonials, beliefs or events are included.

## Provisioning completed in this session

The owner approved publication of the new permissions. The updated rules were published in the existing Firebase console, and `ashutoshsrivastava.me` was added to authorized Google sign-in domains. Six required composite indexes were created for recent/featured content, typed feeds, story chronology, conversations, and spaces. The backlinks query succeeds using existing automatic indexes, so an unnecessary extra composite index was omitted. Anonymous access to private conversation documents was verified denied against the live project.

No extra administrator was created. The account `dreams-editor@ashutoshsrivastava.me` retains its existing UID and password. Initial project import is available after owner sign-in; no personal opinions or events were seeded.
