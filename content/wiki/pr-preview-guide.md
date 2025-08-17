---
title: "GitHub Actions PR Preview Guide"
date: "2025-08-17"
draft: false
description: "Guide for using the new GitHub Actions PR preview deployments for StoryPad website development"
keywords:
  - github actions
  - pr preview
  - hugo
  - development workflow
  - storypad website
  - netlify deploy
---

# GitHub Actions PR Preview Guide

This document demonstrates the new PR preview deployment functionality that has been added to the StoryPad website repository.

## What is PR Preview?

The PR preview feature automatically builds and deploys a live preview version of the website whenever a pull request is opened or updated. This allows contributors and reviewers to see exactly how their changes will look in a real browser environment before merging.

## How It Works

1. **Automatic Trigger**: When you open a PR targeting the `develop` branch, GitHub Actions automatically starts building and deploying a preview
2. **Hugo Build**: The workflow uses the same Hugo v0.147.5 setup as production to ensure consistency
3. **Live Deployment**: The built site is deployed to Netlify with a unique preview URL
4. **PR Comment**: A bot comments on your PR with a direct link to the live preview

## Benefits

- **Live Preview**: Click a link to see changes instantly in your browser
- **Real Environment**: Test in a real hosting environment, not just local files
- **Visual Review**: See changes exactly as they will appear to users
- **Catch Issues Early**: Identify build failures or visual problems during review
- **Better Collaboration**: Reviewers can easily access and test changes
- **Confidence**: Merge with confidence knowing the changes work correctly

## Preview URLs

Each PR gets a unique preview URL in the format:
`https://pr-[PR-NUMBER]--[SITE-NAME].netlify.app`

The preview is automatically updated every time you push new commits to the PR branch.

## Example Workflow

This documentation file itself serves as a test case for the PR preview system. When this change is submitted as a PR, the preview workflow will:

1. Build the site including this new documentation
2. Deploy to a unique Netlify preview URL
3. Comment on the PR with a direct link to the live preview
4. Update the preview automatically on subsequent commits

Try it out by opening a PR with any changes to the website!

## Setup for Repository Maintainers

To enable PR previews, the following secrets must be configured in the repository:

- `NETLIFY_AUTH_TOKEN`: Personal access token from Netlify
- `NETLIFY_SITE_ID`: The site ID from your Netlify dashboard

Once configured, all contributors can benefit from automatic PR previews without any additional setup.