# Dreams on Firebase

Dreams now uses **Firebase Authentication + Cloud Firestore**. All durations are entered manually in minutes. Video and playlist links are ordinary saved resources; no YouTube API or billing-enabled Cloud Functions are needed.

## Current activation blocker

The signed-in Google account has reached its Firebase project creation limit. Choose an existing Firebase project explicitly, or switch accounts/create an additional project after requesting a quota increase. No existing project has been changed or deleted.

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

A repository owner must select **Settings → Pages → Build and deployment → Source → GitHub Actions** to consolidate the existing root and Actions deployment paths. Merge the reviewed branch once backend and browser checks pass. The workflow publishes `dist`.

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

Browser tests mock the transport to exercise UI saving and conflicts. Actual Firebase sign-in, security rules, and cross-device saving must also be verified after account/project setup. Supabase code and YouTube lookup have been removed.
