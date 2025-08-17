---
title: "GitHub Actions PR Preview Guide"
date: "2025-08-17"
draft: false
description: "Guide for using the new GitHub Actions PR preview feature for StoryPad website development"
keywords:
  - github actions
  - pr preview
  - hugo
  - development workflow
  - storypad website
---

# GitHub Actions PR Preview Guide

This document demonstrates the new PR preview functionality that has been added to the StoryPad website repository.

## What is PR Preview?

The PR preview feature automatically builds a preview version of the website whenever a pull request is opened or updated. This allows contributors and reviewers to see exactly how their changes will look before merging.

## How It Works

1. **Automatic Trigger**: When you open a PR targeting the `develop` branch, GitHub Actions automatically starts building a preview
2. **Hugo Build**: The workflow uses the same Hugo v0.147.5 setup as production to ensure consistency
3. **Artifact Upload**: The built site is packaged and uploaded as a downloadable artifact
4. **PR Comment**: A bot comments on your PR with download instructions and build status

## Benefits

- **Visual Review**: See changes before they go live
- **Catch Issues Early**: Identify build failures or visual problems during review
- **Better Collaboration**: Reviewers can easily test changes locally
- **Confidence**: Merge with confidence knowing the changes work correctly

## Example Workflow

This documentation file itself serves as a test case for the PR preview system. When this change is submitted as a PR, the preview workflow will:

1. Build the site including this new documentation
2. Package the preview as `pr-preview-[PR#].tar.gz`
3. Upload the artifact for download
4. Comment on the PR with instructions

Try it out by opening a PR with any changes to the website!