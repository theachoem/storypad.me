---
title: "Lessons Learned: Why `Purchases.getProducts` Returned Empty in RevenueCat"
date: "2025-12-01T14:26:53Z"
draft: false
keywords:
  - revenuecat
  - flutter
  - in-app-purchase
  - ios
  - android
  - storekit
  - getproducts
  - troubleshooting
---

Hi everyone, I recently ran into a frustrating issue while integrating RevenueCat in my Flutter app: `Purchases.getProducts` was always returning an empty list of products. I had followed the official documentation carefully, and all my products were approved. Yet, nothing worked.

Here’s what I learned the hard way.

## 1. Follow the docs… but check everything

I carefully followed RevenueCat’s troubleshooting guide:  
[RevenueCat Troubleshooting Offerings](https://www.revenuecat.com/docs/offerings/troubleshooting-offerings)

Even after checking all product identifiers, approvals, and matching, `Purchases.getProducts` still returned empty. At this point, I emailed RevenueCat:

> I have followed all the instructions in the documentation, but Purchases.getProducts is still returning an empty result. Everything is set up, all products were matched & approved a few weeks ago. I will be grateful if you can check what's wrong with my account.

## 2. Hidden Issue #1: StoreKit & Production Builds

StoreKit configuration is meant only for testing. If you build your production app **with StoreKit enabled**, `Purchases.getProducts` will not work in production. To avoid this, make sure to disable StoreKit when building your production app, or create a separate scheme exclusively for testing.

## 3. Hidden Issue #2: Missing Payment Profile

After solving the StoreKit issue, the problem still persisted. It turns out I had forgotten to set up my Apple payment profile. Once I added it, `Purchases.getProducts` finally returned the correct products.

**Takeaway:** When nothing seems wrong but your products still don’t appear, check the production app build with StoreKit **and** make sure your payment profile is set. Apple doesn’t give any clear error messages for these issues.

## 4. Confusion Around `getProducts` Identifiers

Another thing that confused me: what exactly should I put in `Purchases.getProducts()`? The documentation isn’t very clear. Should I use the App Store identifier or the RevenueCat identifier?

- I initially tried `com.tc.writestory.relax_sounds` for iOS and `relax_sounds` for Google Play.
- Nothing worked.
- My workaround: I created new App Store products with the same identifiers as in RevenueCat, deactivated the old ones, and then `getProducts()` worked.

To this day, I’m still not entirely sure which identifier RevenueCat prefers, but my approach works.

## Lesson Learned

Integrating in-app purchases can be tricky. Even when everything seems correct in RevenueCat and the App Stores, hidden issues like production builds, StoreKit, and missing payment profiles can silently break things. Always double-check these “invisible” steps when debugging.

---

Original References:

- [RevenueCat Troubleshooting Offerings](https://www.revenuecat.com/docs/offerings/troubleshooting-offerings)
- [My Flutter Code Example](https://github.com/theachoem/storypad/blob/develop/lib/views/add_ons/add_ons_view_model.dart#L33)
