const fs = require("fs");
const path = require("path");

const GITHUB_API = "https://api.github.com/repos/theachoem/storypad/releases";
const CHANGELOG_DIR = path.join(__dirname, "content", "changelogs");

async function fetchReleases() {
  try {
    const releases = [];

    // Fetch page 1
    console.log("Fetching page 1...");
    const response1 = await fetch(`${GITHUB_API}?page=1`);
    if (!response1.ok)
      throw new Error(`Failed to fetch page 1: ${response1.statusText}`);
    const data1 = await response1.json();
    releases.push(...data1);

    // Fetch page 2
    console.log("Fetching page 2...");
    const response2 = await fetch(`${GITHUB_API}?page=2`);
    if (!response2.ok)
      throw new Error(`Failed to fetch page 2: ${response2.statusText}`);
    const data2 = await response2.json();
    releases.push(...data2);

    console.log(`Total releases fetched: ${releases.length}`);
    return releases;
  } catch (error) {
    console.error("Error fetching releases:", error);
    process.exit(1);
  }
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toISOString().split("T")[0]; // Format as YYYY-MM-DD
}

function sanitizeVersionNumber(version) {
  // Remove 'v' prefix if present
  return version.replace(/^v/, "");
}
function generateDescription(release) {
  // Use release name if available and meaningful, otherwise create a generic one
  if (
    release.name &&
    release.name !== release.tag_name &&
    release.name.length > 10
  ) {
    return release.name;
  }

  // Analyze body for common keywords
  const body = (release.body || "").toLowerCase();
  const hasFeatures =
    body.includes("feature") || body.includes("add") || body.includes("new");
  const hasBugFixes =
    body.includes("fix") || body.includes("bug") || body.includes("close #");
  const hasPerformance =
    body.includes("performance") || body.includes("optimize");

  const parts = ["StoryPad " + release.tag_name, "is here"];
  const features = [];

  if (hasFeatures) features.push("new features");
  if (hasBugFixes) features.push("bug fixes");
  if (hasPerformance) features.push("performance improvements");

  if (features.length === 0) {
    features.push("improvements & bug fixes");
  }

  return `${parts.join(" ")} with ${features.join(" & ")}!`;
}
async function createChangelogFiles(releases) {
  // Ensure changelog directory exists
  if (!fs.existsSync(CHANGELOG_DIR)) {
    fs.mkdirSync(CHANGELOG_DIR, { recursive: true });
  }

  for (const release of releases) {
    const version = sanitizeVersionNumber(release.tag_name);
    const filename = `${version}.md`;
    const filepath = path.join(CHANGELOG_DIR, filename);

    // Skip if file already exists
    if (fs.existsSync(filepath)) {
      console.log(`Skipping ${filename} (already exists)`);
      continue;
    }

    const title = `StoryPad ${release.tag_name}`;
    const date = formatDate(release.published_at);
    const description = generateDescription(release);
    const body = release.body || "";

    // Build markdown content
    const frontmatter = `---
title: "${title}"
date: "${date}"
draft: false
description: "${description}"
---
`;

    const content = `${frontmatter}
${body}

For the full list of changes, check out the release notes on GitHub:
https://github.com/theachoem/storypad/releases/tag/${release.tag_name}
`;

    try {
      fs.writeFileSync(filepath, content);
      console.log(`Created: ${filename}`);
    } catch (error) {
      console.error(`Error creating ${filename}:`, error);
    }
  }
}

// Main execution
(async () => {
  console.log("Starting changelog generation...\n");
  const releases = await fetchReleases();
  await createChangelogFiles(releases);
  console.log("\nChangelog generation complete!");
})();
