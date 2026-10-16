# Dreams on Firebase

Dreams now uses **Firebase Authentication + Cloud Firestore**. All durations are entered manually in minutes. Video and playlist links are ordinary saved resources; no YouTube API or billing-enabled Cloud Functions are needed.

## Provisioned through the browser

- Project: **AIChatGemma** (`aichatgemma`), reused because this Google account has reached its project quota.
- Web app: **Dreams**, app ID `1:632551270983:web:e12f6a2a483f8b99d0df62`.
- Firestore: Standard edition, default database, region **asia-south1 (Mumbai)**, created in production mode on the existing Spark plan.
- Email/password sign-in: enabled. The owner created `dreams-editor@ashutoshsrivastava.me`; its UID is configured in `firestore.rules`.
- Public web configuration is already committed in `src/dreams/firebase-config.json`; no private Google credentials are stored in the repository.
- Rules are published. Real Firebase sign-in, goal/step saving, manual time, completion, and read-only viewing from a separate session have been verified. The rules playground denied an anonymous update. Temporary verification content was removed, leaving an empty workspace.

Neither AIChatGemma nor Magnetile was deleted. Google keeps deleted projects in the quota during the 30-day recovery window, so deletion would not have solved today's quota issue. The pre-existing iOS app was preserved. The newly created Firestore database had no existing collections and started with deny-all rules.

## Browser setup

1. Select the approved Firebase project.
2. Register a web app named Dreams. Copy its public API key and project ID into `src/dreams/firebase-config.json`. That config can be committed; it contains no password or private key.
3. Open **Authentication**, enable Email/Password, and add the editor user `dreams-editor@ashutoshsrivastava.me`. The owner must enter and submit the chosen password in the console; browser automation hands off new credential creation.
4. Copy the user's UID into `firestore.rules`, replacing its explicit placeholder.
5. Create a Standard Cloud Firestore database in production mode if the project has none. Use the default database. Do not upgrade billing.
6. Publish the Dreams rules. In a shared existing project, first preserve all existing rules and append the specific `/dreams/workspace` match and helper functions. Never replace unrelated rules or relax a broad wildcard. Existing permissive wildcard rules must be audited because Firestore allows access if any matching allow rule succeeds.
7. The first authorized save creates the workspace; no seeded goals are necessary.
8. Verify an incorrect password fails, manual minutes save, anonymous writes fail, and the saved goal appears on another device.

## Deployment

The public Firebase config is bundled with the Dreams page. Optional root `.env.local` overrides are listed in `.env.example` for local development. No secret configuration is required for GitHub Actions.

The current Pages configuration publishes from the repository root alongside the Actions workflow. Run `npm run build:pages-root` before committing frontend changes while that setting remains in place; this updates root publication files to the same build and preserves older hashed assets for cached HTML. The custom Actions workflow still builds and publishes `dist`.

An owner can later select **Settings → Pages → Build and deployment → Source → GitHub Actions** to remove the duplicate publication path. No owner account login or settings change was required to deploy this update.

## Behavior

- Public reads are restricted to one document: `dreams/workspace`. Editing is allowed only for the configured UID, after Firebase verifies the password.
- The edit session lasts at most one hour and stays in session storage. Refresh tokens are discarded. Done deletes the browser's ID token. Firestore rules independently enforce one hour from authentication.
- Firebase provides password sign-in throttling. The page never contains the password or a password hash.
- Writes check both the workspace revision and Firestore's document update time; competing saves cannot silently overwrite each other.
- Saves go straight to Firestore over HTTPS. Unsaved forms survive failed requests; focus/30-second refresh skips pending drafts.
- Total manual content time excludes completed steps. Missing durations are marked unknown.
- The workspace is limited to 900 KB, below Firestore's document limit. The page gives a clear error rather than dropping data if full.
- `/Dreams`, `/dreams`, and trailing slashes work, remain absent from portfolio navigation, and use noindex metadata.

## Checks

```sh
npm run lint:dreams
npm run test:dreams
npm run test:dreams:browser
DREAMS_BUILD_DIR=/tmp/dreams-build npm run build
```

Browser tests mock the transport to exercise UI saving and conflicts. Actual Firebase sign-in and saving were also verified through the browser; the rules simulator rejected anonymous writes. Supabase code and YouTube lookup have been removed.
