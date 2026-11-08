---
date: "2026-11-08T17:00:00Z"
draft: false
title: "Privacy Policy"
description: "StoryPad privacy policy: your journal stays on your device and in the cloud you choose, analytics is fully anonymous, and we never sell your data."
keywords:
  - storypad privacy policy
  - data security
  - anonymous analytics
  - google drive icloud dropbox nextcloud backup
  - journal app privacy
---

Welcome to StoryPad (“we,” “our,” or “us”). Your privacy is important to us. This Privacy Policy explains what information StoryPad handles, where it goes, and what never leaves your device, when you use our app, available at [storypad.me](https://storypad.me/).

## 1. Information We Collect

**No Personal Data Stored on Our Servers.**

StoryPad has no account system and no server that stores your journal. Your entries, photos, videos, voice recordings, tags, places, and nickname are stored locally on your device. If you connect a backup service, they are sent **directly** from your device to that service. We do not have access to this data at any time.

**Nickname**  
You may provide a nickname for display purposes within the app. This nickname is stored locally on your device and included in your backups.

**Anonymous Analytics and Crash Reports**  
We use Firebase Analytics and Firebase Crashlytics to understand which features are used and to fix crashes. This data is **fully anonymous**. See section 5 for exactly what is and isn't collected.

**Template Usage Counts**  
When you use a template from the template gallery, StoryPad records a usage count for that template in Google Cloud Firestore. Each record contains a random ID created when the app is installed (on iOS, the app's vendor identifier), the device model (for example, “Pixel 8”), and when the template was used. It contains nothing you wrote, and it isn't linked to your name, email, or cloud accounts. We use it only to see which templates are popular.

## 2. How We Use Your Information

- To let you create, view, and manage your entries and data within the app.
- To back up your entries, media, and nickname directly to the backup service you choose.
- To display your chosen nickname in the app interface.
- To restore your in-app purchases on your other devices.
- To understand, through anonymous analytics and crash reports, which features are used and what to fix or improve.

## 3. Backup Services

Backups are optional, and you choose where they go. StoryPad talks to each service directly from your device. We never receive a copy, and we do not store or manage your credentials for these services.

- **Google Drive:** backups are stored in a private, app-specific folder that isn't visible in the normal Google Drive interface ([Google Drive AppData folder](https://developers.google.com/workspace/drive/api/guides/appdata)). Sign-in uses Google Sign-In. See the [Google Privacy Policy](https://policies.google.com/privacy).
- **iCloud (iOS and macOS):** backups are stored in StoryPad's private iCloud container, using the iCloud account on your device. See [Apple's Privacy Policy](https://www.apple.com/legal/privacy/).
- **Dropbox:** backups are stored in the `Apps/StoryPad` folder of your Dropbox. See the [Dropbox Privacy Policy](https://www.dropbox.com/privacy).
- **Nextcloud / WebDAV:** backups are stored in a folder you choose on the server you enter. That server is run by you or your provider, under their own privacy policy. Use an `https://` address so your app password and backups are encrypted in transit. StoryPad warns you before connecting over plain `http://`.

Backup files are not end-to-end encrypted by StoryPad, so the service storing them can technically read them, just like any other file you keep there.

## 4. In-App Purchases

StoryPad offers an optional one-time purchase (StoryPad Pro) and add-ons. Payments are processed by the Google Play Store or the Apple App Store. Purchases are managed through RevenueCat, a third-party service that helps us verify purchases and restore them across your devices.

We do **not** collect, store, or access your credit card details or other billing information.

To restore purchases on your other devices, RevenueCat starts with an anonymous ID. If you connect a backup service, your purchases are linked to that service's account identifier:

- **Google Drive:** your Google account ID
- **iCloud:** your iCloud (CloudKit) user record ID
- **Dropbox:** your Dropbox account ID
- **Nextcloud:** your username and server address (for example, `name@cloud.example.com`), unless the server is `localhost` or a bare IP address, in which case nothing is linked

These identifiers are sent only to RevenueCat, only for restoring purchases, and never to analytics.

For details on how these services handle your data, please see:

- [Google Privacy Policy](https://policies.google.com/privacy)
- [Apple Privacy Policy](https://www.apple.com/legal/privacy/)
- [RevenueCat Privacy Policy](https://www.revenuecat.com/privacy)

## 5. Anonymous Analytics

StoryPad's analytics is anonymous by design, for every event. We use it to learn which features are used and where the app crashes, so we know what to build and fix next. There is currently no in-app setting to turn it off.

**What is never collected:**

- Anything you write: entry text, titles, search terms, tag names, or names of people you tag.
- Your locations or coordinates.
- Full links. When you open a link, only the site name is recorded (for example, `www.reddit.com`), never the rest of the address.
- Your name, email address, or any cloud account identifier.
- Your device's advertising ID. StoryPad shows no ads, does not request the advertising ID permission on Android, turns off advertising ID collection, and never asks for tracking permission on iOS.

**What is collected:**

- Which screens and features are used, with counts and categories only (for example, “a story with 3 pages and 2 tags was saved”).
- Settings choices such as theme, font, and language.
- Crash reports (error details and device type) through Firebase Crashlytics.
- A random per-install ID that Firebase uses to count installs and sessions. It isn't linked to your name, email, or cloud accounts.

Like any internet service, Google can see your IP address when the app sends this data. Google Analytics does not log or store IP addresses. Google keeps analytics data for a limited period, set by our Firebase project's data retention settings. On Linux, Firebase isn't used at all.

## 6. Other Services the App Connects To

Some features download content from third-party services. These services see your IP address, as any web server does, but receive nothing from your journal unless noted:

- **static.storypad.me (Cloudflare):** our own content host, serving app assets (relax sounds, backgrounds, and template gallery images) and app configuration.
- **Google Fonts:** downloads the fonts you pick in the app.
- **Maps and places:** when you view a map or attach a place to a story, map tiles and place search are provided by Google Maps or MapTiler, depending on your settings, and by your device's built-in geocoder. These services receive the area of the map you view or the place you search for.

## 7. We Don't Sell Your Data

We do not sell, rent, or share your personal data with anyone for advertising or any other purpose. StoryPad contains no advertising.

## 8. Data Security

We protect your data by:

- Storing your data locally on your device.
- Sending backups only directly to the service you choose, over encrypted connections (unless you enter a plain `http://` Nextcloud address after StoryPad warns you).
- Keeping analytics anonymous, as described in section 5.
- Offering an app lock (PIN or biometrics) inside the app.

We also recommend using secure, trusted networks and keeping your device's software up to date.

## 9. Children’s Privacy

StoryPad is not intended for children under 13 years old. We do not knowingly collect personal information from children under 13.

## 10. Your Rights and Choices

You control your entries, media, and nickname through the StoryPad app. You can change or delete them at any time, and you can disconnect a backup service whenever you like. Backup files stay in your own cloud storage, where you can delete them.

StoryPad does not currently provide an option to opt out of anonymous analytics and crash reporting.

## 11. Changes to This Policy

We may update this Privacy Policy from time to time. The date at the top of this page shows when it was last changed.

## 12. Contact Us

If you have any questions about this Privacy Policy or your data privacy, please contact us at:

**Email:** thea@storypad.me  
**Company:** StoryPad  
**Location:** Phnom Penh, Cambodia
