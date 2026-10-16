# Activate Dreams

The page is implemented. Cross-device saving and YouTube lookup require two accounts you own. Nothing here requires sharing your password or API keys in chat.

## 1. Create the database

1. Open https://supabase.com/dashboard and sign in (GitHub sign-in works).
2. Create an organization if prompted, then a project named **Dreams**. Choose a region near you and save the database password in your password manager. Wait for the project to finish creating.
3. Copy the **project reference** from the dashboard URL: `https://supabase.com/dashboard/project/PROJECT_REF`.
4. Tell Codex the project reference. It is public and safe to share. Keep your database password private.

The following commands are run from the portfolio folder. Codex can run them once your account is connected; the login command may ask you to authorize Supabase in a browser.

```sh
npx supabase login
npx supabase link --project-ref PROJECT_REF
npx supabase db push
```

If the CLI asks for the database password, enter it locally. The migration creates an empty workspace, a YouTube metadata cache, and password-attempt limits. Direct browser database access is disabled.

## 2. Enable YouTube durations (optional until ready)

1. Open https://console.cloud.google.com/ and sign in.
2. Create a project named **Dreams**.
3. Open **APIs & Services → Library**, search **YouTube Data API v3**, and enable it.
4. Open **APIs & Services → Credentials → Create credentials → API key**.
5. Edit the key: restrict API access to **YouTube Data API v3**. This key runs on the backend, so do not set a website/referrer restriction.
6. Keep the key private. Paste it only into the local setup prompt below. Duration lookup can be added later; manual links and minutes work without it.

## 3. Set your edit password locally

Run:

```sh
node scripts/dreams-secrets.mjs
```

Enter the edit password you chose in chat when prompted. Password input is hidden. The script saves only a salted PBKDF2 hash and generated token secret to `.env.dreams.secrets`, which Git ignores. It never writes the plaintext password to the project.

Then upload secrets and deploy the function:

```sh
npx supabase secrets set --env-file .env.dreams.secrets
npx supabase functions deploy dreams --no-verify-jwt
```

`--no-verify-jwt` permits public viewing; the function itself requires a valid one-hour edit token for every write and YouTube lookup. Done removes the browser's token. Tokens are kept in session storage and expire after one hour.

## 4. Connect the website

Create `.env.local` containing the public URL:

```dotenv
VITE_DREAMS_API_URL=https://PROJECT_REF.supabase.co/functions/v1/dreams
```

Restart `npm run dev`. Open http://localhost:5173/Dreams, select Edit, and enter your password. Add a goal and verify it appears on another browser/device.

For production, add a GitHub repository **Actions variable** named `VITE_DREAMS_API_URL` with that same URL. This variable is public; do not put any backend secrets in it.

An account with repository admin access must open **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**. The currently connected GitHub account has write access but cannot change this setting. This removes the competing root-folder deployment.

Merge the Dreams branch only after setup and validation. The existing deployment workflow publishes the `dist` artifact on pushes to main. Check that workflow succeeds, then open https://ashutoshsrivastava.me/Dreams/ directly and test Edit and a saved goal. No portfolio navigation link is added.

## Verification

```sh
npm ci
npm run test:dreams
npx playwright install chromium
npx playwright test
DREAMS_BUILD_DIR=/tmp/dreams-build npm run build
npx deno check supabase/functions/dreams/index.ts
```

Node 22 or newer is required for the TypeScript-backed unit tests. Browser tests use a mock API, including two-device conflicts and failed saves; they do not prove a remote Supabase instance is configured. The production build defaults to `dist`; the optional `DREAMS_BUILD_DIR` keeps test output away from pre-existing generated files.

## Behavior and limits

- `/Dreams`, `/dreams`, and trailing slashes have generated static entry pages with noindex metadata.
- Reading is public. Password checks and write authorization happen on the backend.
- Eight password attempts per IP per 15 minutes; 40 uncached/forced YouTube lookups per workspace per hour.
- YouTube metadata is cached for 24 hours. Private/deleted/live videos may have unknown duration and are marked as partial totals.
- Each playlist stays one step; progress through video N subtracts known durations of those videos. A manual minutes override takes precedence and is treated as the remaining estimate until the step is completed.
- The workspace refreshes on focus and every 30 seconds while visible, unless a form or failed save is pending.
- Concurrent saves use a revision check. On conflict, load the latest version and review the preserved form before saving. Failed non-form actions may be retried; their original revision is retained.
- There is no offline write queue. Failed saves are retained in memory, and closing/reloading warns about unsaved work.
- To rotate the password, generate a new secrets file locally and upload it. Rotating the token secret invalidates existing edit sessions.
