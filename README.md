# RoadReady Arkansas

A small, installable study coach for Azalea's Arkansas driver license test.

## Run locally

```bash
python3 -m http.server 4173
```

Open http://localhost:4173.

## Publish with GitHub Pages

This is a static site and can be deployed from the repository root using GitHub Pages.

1. Create a new GitHub repository, for example `roadready-arkansas`.
2. Push this folder to the repository's `main` branch.
3. In GitHub, open **Settings > Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select `main` and `/ (root)`, then save.
6. Open the generated HTTPS URL on Azalea's phone.
7. Add it to the Home Screen.

The service worker will cache the app and study guide after the first successful visit. Progress is saved separately on each device.

Source: Arkansas Driver License Study Guide, Volume 1, Edition 8, July 2023.
