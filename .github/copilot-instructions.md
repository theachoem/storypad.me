# StoryPad Website - Copilot Instructions

Always reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.

StoryPad is a Hugo-based static website for promoting the StoryPad mobile app - a timeline-based journaling application. The site uses Hugo v0.147.5 with a custom theme (`sp_theme`) built on TailwindCSS v4, showcasing app features, user reviews, FAQ, and download links.

## Table of Contents
1. [Working Effectively](#working-effectively)
2. [Content Structure & Formats](#content-structure--formats)
3. [Hugo Layouts & Templates](#hugo-layouts--templates)
4. [Validation](#validation)
5. [Common Tasks](#common-tasks)
6. [Critical Notes](#critical-notes)

## Working Effectively

### Bootstrap, build, and test the repository:

1. **Install Hugo Extended v0.147.5** (CRITICAL - other versions will fail):
   ```bash
   HUGO_VERSION=0.147.5
   wget -O /tmp/hugo.deb https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_extended_${HUGO_VERSION}_linux-amd64.deb
   sudo dpkg -i /tmp/hugo.deb
   ```

2. **Install Node.js dependencies** (TailwindCSS v4 required):
   ```bash
   [[ -f package-lock.json ]] && npm ci || npm install
   ```
   Takes ~11-14 seconds. NEVER CANCEL.

3. **Build the site**:
   ```bash
   hugo --gc --minify
   ```
   Takes ~1.4 seconds consistently. NEVER CANCEL. Set timeout to 30+ seconds for safety.

4. **Run development server**:
   ```bash
   hugo server --bind 0.0.0.0 --port 1313
   ```
   Starts in ~1.5 seconds. Site available at http://localhost:1313/

### Build timing expectations:
- **NEVER CANCEL**: Clean builds take 0.6-1.4 seconds consistently
- **NEVER CANCEL**: npm install takes 11-14 seconds for fresh dependencies  
- **NEVER CANCEL**: Development server starts in 0.7-1.5 seconds
- Set timeouts to 30+ seconds minimum for all build commands to avoid premature cancellation

## Validation

### ALWAYS manually validate functionality after making changes:

1. **Build validation**:
   ```bash
   rm -rf public/ && hugo --gc --minify
   ```
   Should complete without errors in ~1.4 seconds.

2. **Development server validation**:
   ```bash
   hugo server --bind 0.0.0.0 --port 1313
   ```
   Verify server starts and responds at http://localhost:1313/

3. **CRITICAL manual testing scenarios**:
   - **Home page loads**: Visit http://localhost:1313/ and verify complete page rendering
   - **FAQ functionality**: Click on FAQ questions to test accordion expand/collapse
   - **Navigation links**: Test app store buttons, GitHub links, and internal navigation
   - **Responsive design**: Check mobile viewport rendering and interactions
   - **CSS/JS loading**: Verify no 404s for stylesheets and JavaScript files
   - **Image loading**: Confirm all hero images, icons, and screenshots display correctly

4. **Critical user scenarios to test**:
   - User lands on homepage and can see app description and screenshots
   - User can expand FAQ items to read answers
   - User can click download buttons (App Store/Google Play) - links should be functional
   - User can navigate to different sections via anchor links
   - User can access footer links to privacy policy, changelogs, etc.

## Content Structure & Formats

The site follows a structured content organization with specific frontmatter requirements and conventions for each section type. Understanding these patterns is critical for maintaining consistency across the site.

### Directory Structure

```
content/
├── _index.md                 # Homepage (layout: home)
├── blogs/                    # Blog posts about journaling
│   ├── _index.md            # Section index (build.render: "never")
│   ├── features.md          # Feature overview blog post
│   ├── journal-vs-diary.md  # Educational content
│   └── how-to-*.md          # Tutorial/guide content
├── changelogs/              # Version release notes
│   ├── _index.md           # Section index (layout: collection)
│   ├── 2.0.md              # Version changelog
│   ├── 2.20.0.md           # Latest version
│   └── *.md                # Semantic versioned files
├── wiki/                    # Documentation & guides
│   ├── _index.md           # Section index (build.render: "never")
│   ├── migrate-to-storypad.md
│   └── different-between-storypad-and-spooky.md
├── engineering/             # Technical blog posts
│   ├── _index.md           # Section index (build.render: "never")
│   ├── developer_experience.md
│   └── why_revenue_cat_return_empty_products.md
├── contributions/           # Contribution guides
│   ├── _index.md           # Section index (build.render: "never")
│   └── localization.md
├── privacy-policy.md        # Legal page
├── term-of-use.md          # Legal page
├── add-ons.md              # Product page
├── sitemap.md              # Site map
├── categories.md           # Taxonomy
└── tags.md                 # Taxonomy
```

### Content Type Formats

#### 1. Blog Posts (`/blogs/`)

**Purpose**: Educational content, tutorials, feature highlights, and journaling tips.

**Frontmatter Pattern**:
```yaml
---
title: "Article Title"
date: "2025-06-08"
draft: false
description: "SEO-optimized description for search engines and social sharing"
---
```

**Required Fields**:
- `title`: Article title (50-60 chars recommended for SEO)
- `date`: Publication date in YYYY-MM-DD format
- `draft`: Boolean (false to publish, true to hide)
- `description`: Meta description (150-160 chars recommended)

**Optional Fields**:
- `keywords`: Array of SEO keywords (inherited from section if not specified)

**Content Guidelines**:
- Use personal, conversational tone (first-person narrative)
- Include practical examples and use cases
- Add StoryPad app promotional section with image:
  ```markdown
  ## Meet StoryPad: Your Life, Your Story
  
  ![og_1200x630.jpg](https://storypad.me/og_1200x630.jpg)
  
  Curious how StoryPad can help you? Visit [storypad.me](https://storypad.me) for a quick 2-minute pitch...
  ```
- End with "Final Thoughts" section
- Use H2 (##) for main sections, H3 (###) for subsections
- Include tables for comparisons where appropriate

**Example Structure**:
```markdown
---
title: "How to Build a Journaling Habit That Actually Sticks"
date: "2025-06-08"
draft: false
description: "Discover proven strategies to build a journaling habit..."
---

[Opening paragraph - personal hook]

## Why Journaling Habits Fail
[Content]

## 6 Ways to Make Journaling Stick
[Numbered list with explanations]

## Meet StoryPad: Your Life, Your Story
[Promotional section with image]

## Final Thoughts
[Conclusion]
```

**Layout**: Uses `page.html` template - renders full article with prose styling.

---

#### 2. Changelogs (`/changelogs/`)

**Purpose**: Version release announcements with new features and bug fixes.

**Frontmatter Pattern**:
```yaml
---
title: StoryPad X.Y.Z
date: "2025-11-09"
description: "StoryPad X.Y.Z changelog - Discover the latest features..."
keywords:
  - storypad
  - timeline diary
  - digital journal
  - [standard keywords]
draft: false
embed_content: |
  [Optional embedded content like Reddit posts]
---
```

**Required Fields**:
- `title`: Format as "StoryPad X.Y.Z" (matches version number)
- `date`: Release date in YYYY-MM-DD format
- `description`: SEO description mentioning version and features
- `keywords`: Standard StoryPad keyword list (see template below)
- `draft`: Boolean (false to publish)

**Optional Fields**:
- `embed_content`: Multiline string with HTML embeds (Reddit, Twitter, etc.)

**Standard Keywords Array**:
```yaml
keywords:
  - storypad
  - timeline diary
  - digital journal
  - open source journal
  - personal timeline
  - online writing platform
  - life log
  - creative journaling
  - organize memories
  - daily notes
  - story sharing
  - private journal
```

**Content Guidelines**:
- Start with brief introduction or summary
- Use ## headings for major sections (Summary, What's Changed, Key Features)
- Include feature descriptions with emoji bullets (🎙️, 📝, ✨, 🔒)
- Add GitHub comparison link at end: `[Full Changelog](https://github.com/theachoem/storypad/compare/X.Y.Z...A.B.C)`
- Images should be from GitHub user-attachments
- List pull requests with format: `- Description by @username in https://github.com/theachoem/storypad/pull/XXX`

**Special Features**:
- Reddit embeds: Use `embed_content` field with `<blockquote class="reddit-embed-bq">` HTML
- The `page.html` layout handles Reddit embed styling and resizing automatically
- Navigation links between changelog versions are auto-generated

**Example**:
```markdown
---
title: StoryPad 2.20.0
date: "2025-11-09"
description: "StoryPad 2.20.0 changelog - Discover the latest features..."
keywords: [standard array]
embed_content: |
  <blockquote class="reddit-embed-bq">...</blockquote>
draft: false
---

Introducing Voice Journal add-on! 🎙️📝

**Key Features:**
- 🎙️ **Voice Recording**: Easily record your thoughts
- 📝 **Automatic Transcription**: Voice to text
...

[Full Changelog](https://github.com/theachoem/storypad/compare/2.19.0...2.20.0)
```

**File Naming**: Use semantic versioning: `2.20.0.md`, `2.0.md`, `2.12.1.md`

**Layout**: Uses `page.html` with special changelog handling - includes Reddit embed support and version navigation.

---

#### 3. Wiki/Documentation (`/wiki/`)

**Purpose**: User guides, migration instructions, and informational documentation.

**Frontmatter Pattern**:
```yaml
---
title: Page Title
date: "2025-02-27"
description: "Clear description of what this guide covers"
keywords:
  - specific
  - relevant
  - keywords
---
```

**Required Fields**:
- `title`: Clear, descriptive title
- `date`: Creation/update date in YYYY-MM-DD format
- `description`: What the guide helps users accomplish
- `keywords`: Specific to the page topic

**Content Guidelines**:
- Use step-by-step instructions with ### headings
- Include numbered steps within sections
- Add screenshots/badges where helpful (e.g., Play Store badge)
- Use blockquotes (>) for important notes or cross-references
- Link to related wiki pages with relative links: `/wiki/page-name`

**Example**:
```markdown
---
title: Migrate from Spooky to StoryPad
date: "2025-02-27"
description: "Step-by-step guide to migrate your journals..."
keywords: [migration-specific]
---

### Step 1: Export Data from Spooky
1. Open **Spooky**.
2. Navigate to **Backups**...

### Step 2: Import Data into StoryPad
1. Download StoryPad...

> [Why Are We Making This Change?](/wiki/different-between-storypad-and-spooky)
```

**Layout**: Uses `page.html` template - full prose rendering with tag support.

---

#### 4. Engineering Blog (`/engineering/`)

**Purpose**: Technical posts about development, architecture, and lessons learned.

**Frontmatter Pattern**:
```yaml
---
title: "Technical Article Title"
date: "2025-03-02"
draft: false
keywords: [standard StoryPad keywords]
---
```

**Required Fields**:
- `title`: Descriptive technical title
- `date`: Publication date
- `draft`: Boolean
- `keywords`: Standard StoryPad keyword list

**Content Guidelines**:
- Technical but accessible writing style
- Share real development experiences and learnings
- Include code snippets when relevant
- Link to GitHub repository or PRs
- May include original source references (e.g., Reddit posts)

**Example**:
```markdown
---
title: "Sharing my open-source diary app with 80k+ downloads..."
date: "2025-03-02"
draft: false
keywords: [standard array]
---

Hi everyone, today I want to introduce my open-source diary app...

[Technical content with code examples]

Original Reddit Post:
[link]
```

**Layout**: Uses `page.html` template - standard prose rendering.

---

#### 5. Contributions (`/contributions/`)

**Purpose**: Guides for contributors (translations, bug reports, etc.).

**Frontmatter Pattern**:
```yaml
---
title: "Contribution Type"
date: "2025-02-27"
draft: false
keywords: [standard keywords]
---
```

**Content Guidelines**:
- Clear instructions for contributors
- Include tables for tracking contributions
- Link to external resources (Google Sheets, PRs)
- Use emojis for visual organization (💬, 🙌, etc.)
- Format contributor acknowledgments as markdown tables

**Example**:
```markdown
---
title: "Localization"
date: "2025-02-27"
draft: false
keywords: [standard array]
---

## 💬 How Can I Help?
[Instructions]

## 🙌 Contributors
| Name | Reference | Languages |
|------|-----------|-----------|
| ... | ... | ... |
```

**Layout**: Uses `page.html` template.

---

#### 6. Section Index Pages (`_index.md`)

**Purpose**: Control section behavior and optionally provide index page content.

**Two Patterns**:

**A. Disabled Rendering (blogs, wiki, engineering, contributions)**:
```yaml
---
build:
  render: "never"
---
```
This prevents Hugo from generating an index page. Section pages are accessed directly.

**B. Collection Layout (changelogs)**:
```yaml
---
title: Changelogs
date: "2025-08-10"
layout: collection
draft: false
keywords: [standard array]
---
```
This creates a custom collection page showing all changelog entries in a grid.

**Layout Behavior**:
- `render: "never"` → No index page generated, uses `section.html` if accessed
- `layout: collection` → Uses `collection.html` template with grid of cards
- Default → Uses `section.html` template with grid of entries

---

#### 7. Standalone Pages

**Homepage** (`content/_index.md`):
```yaml
---
title: StoryPad - Timeline Diary | Open Source
date: "2023-01-01"
draft: false
description: Not another journal app. A timeline for your life...
keywords: [standard array]
---
```
Uses `home.html` layout with custom sections (hero, features, FAQ, reviews).

**Product Pages** (`add-ons.md`, `privacy-policy.md`, `term-of-use.md`):
```yaml
---
date: "2025-07-03"
draft: false
title: "Page Title"
description: "Page description"
---
```
Use `page.html` layout - standard prose rendering.

**Taxonomy Pages** (`categories.md`, `tags.md`, `sitemap.md`):
Minimal frontmatter, use special layouts (`taxonomy.html`, `sitemap.html`).

### Archetype Template

**Location**: `/archetypes/default.md`

```markdown
+++
date = '{{ .Date }}'
draft = true
description = 'Designed for simplicity - capture your thoughts, emotions, and memories.'
title = '{{ replace .File.ContentBaseName "-" " " | title }}'
+++
```

**Usage**: When creating new content with `hugo new`, this template is used:
```bash
hugo new blogs/my-new-post.md
hugo new changelogs/2.21.0.md
```

**Note**: Manually add `keywords` array and adjust description as needed per content type.

## Hugo Layouts & Templates

### Layout Files Overview

```
themes/sp_theme/layouts/
├── baseof.html              # Base template (header, footer, main block)
├── home.html               # Homepage layout
├── page.html               # Single page/post layout
├── section.html            # Section index (blogs, wiki, engineering)
├── collection.html         # Custom collection (changelogs)
├── taxonomy.html           # Tag/category listing
├── term.html              # Single tag/category page
├── sitemap.html           # Sitemap page
└── _partials/             # Reusable components
    ├── head.html
    ├── header.html
    ├── footer.html
    ├── terms.html         # Tag display partial
    └── home/              # Homepage sections
        ├── headline.html
        ├── usecases.html
        ├── faq.html
        ├── reviews.html
        └── backup.html
```

### Layout Behavior by Content Type

#### `section.html` - Default Section Layout
**Used by**: `/blogs/`, `/wiki/`, `/engineering/` (when accessed)

**Renders**:
- Section title (H1)
- Optional section content
- Grid of posts (3 columns on desktop)
- Each card shows: title, summary (100 chars), date
- Sorted by date (newest first)
- Hover effects on cards

**Styling**: TailwindCSS with dark mode support, responsive grid.

#### `collection.html` - Custom Collection Layout
**Used by**: `/changelogs/` (when `layout: collection` is set)

**Renders**:
- Collection title (H1)
- Optional content
- Grid of items with title and date
- No summary text (changelog titles are self-descriptive)
- Custom empty state message

**Nearly identical to `section.html`** but optimized for changelogs.

#### `page.html` - Single Page Layout
**Used by**: All individual posts, changelogs, wiki pages, standalone pages

**Features**:
- Page title (H1) and date
- Full content with prose styling
- Special handling for changelogs:
  - Converts GitHub "Full Changelog" links to styled buttons
  - Supports `embed_content` field for Reddit/social embeds
  - Auto-resizes Reddit iframes
  - Navigation links to previous/next changelog versions
- Tag display (via `terms.html` partial)

**Prose Styling**: Uses TailwindCSS Typography plugin with customizations:
- Code blocks with syntax highlighting
- Blockquotes with blue accent
- Tables with proper formatting
- Links in blue with hover underline
- Dark mode support

#### `home.html` - Homepage Layout
**Used by**: `content/_index.md`

**Sections** (in order):
1. Headline/Hero (`_partials/home/headline.html`)
2. Use Cases (`_partials/home/usecases.html`) - from `data/usecases.yaml`
3. FAQ (`_partials/home/faq.html`) - from `data/questions.yml`
4. Reviews (`_partials/home/reviews.html`) - from `data/reviews.yml`
5. Backup info (`_partials/home/backup.html`)

### Dark Mode Support

All layouts support dark mode using TailwindCSS:
- `dark:` prefix for dark mode styles
- Automatic theme switching based on system preference
- Consistent color palette:
  - Light: neutral-50/100/900 backgrounds
  - Dark: neutral-800/900 backgrounds
  - Accent: blue-400/600

## Common Tasks

### Repository structure:
```
/home/runner/work/storypad.me/storypad.me/
├── .github/
│   ├── workflows/hugo.yaml        # CI/CD deployment to GitHub Pages
│   └── copilot-instructions.md    # This file
├── archetypes/
│   └── default.md                 # Template for new content
├── content/                       # All site content (see Content Structure)
│   ├── _index.md                 # Homepage
│   ├── blogs/                    # Blog posts
│   ├── changelogs/               # Release notes
│   ├── wiki/                     # Documentation
│   ├── engineering/              # Technical posts
│   ├── contributions/            # Contribution guides
│   └── [standalone pages]
├── data/                         # YAML data for homepage sections
│   ├── usecases.yaml            # Use case scenarios
│   ├── questions.yml            # FAQ questions/answers
│   └── reviews.yml              # User reviews
├── static/                       # Static assets (images, icons, fonts)
│   ├── og_1200x630.jpg          # Open Graph image
│   └── [other assets]
├── themes/sp_theme/              # Custom Hugo theme
│   ├── assets/
│   │   ├── css/main.css         # TailwindCSS v4 styles
│   │   └── js/main.js           # Interactive JavaScript
│   └── layouts/                 # Hugo templates (see Layouts section)
├── hugo.toml                    # Hugo configuration
├── package.json                 # Node.js dependencies (TailwindCSS)
└── package-lock.json            # Locked dependency versions
```

### Creating New Content

#### New Blog Post
```bash
# Create using archetype
hugo new blogs/my-article-title.md

# Manual frontmatter structure
---
title: "Article Title"
date: "2025-11-10"
draft: false
description: "SEO description (150-160 chars)"
---

# Content with personal tone, practical examples
# Include "Meet StoryPad" promotional section
# End with "Final Thoughts"
```

#### New Changelog
```bash
# Create file with version number
hugo new changelogs/2.21.0.md

# Required frontmatter
---
title: StoryPad 2.21.0
date: "2025-11-10"
description: "StoryPad 2.21.0 changelog - Brief feature summary"
keywords:
  - storypad
  - timeline diary
  - digital journal
  - open source journal
  - personal timeline
  - online writing platform
  - life log
  - creative journaling
  - organize memories
  - daily notes
  - story sharing
  - private journal
draft: false
---

# Content structure
Summary paragraph

## What's Changed
- Feature descriptions with emoji bullets
- PR links from GitHub

[Full Changelog](https://github.com/theachoem/storypad/compare/2.20.0...2.21.0)
```

#### New Wiki/Documentation Page
```bash
# Create with descriptive filename
hugo new wiki/topic-name.md

# Frontmatter
---
title: "Clear Descriptive Title"
date: "2025-11-10"
description: "What this guide helps users do"
keywords:
  - specific
  - relevant
  - keywords
---

# Step-by-step structure with ### headings
# Numbered instructions
# Screenshots or badges where helpful
```

#### New Engineering Post
```bash
# Create technical content
hugo new engineering/technical-topic.md

# Use standard frontmatter with keywords array
# Technical but accessible writing
# Include code examples, GitHub links
```

### Updating Existing Content

#### Homepage Sections
- **Hero/Headline**: Edit `themes/sp_theme/layouts/_partials/home/headline.html`
- **Use Cases**: Edit `data/usecases.yaml`
- **FAQ**: Edit `data/questions.yml`
- **Reviews**: Edit `data/reviews.yml`
- **Homepage Meta**: Edit `content/_index.md` frontmatter

#### FAQ Data Format (`data/questions.yml`):
```yaml
- question: "Question text?"
  answer: "Answer text with **markdown** support."
- question: "Another question?"
  answer: "Another answer."
```

#### Reviews Data Format (`data/reviews.yml`):
```yaml
- author: "User Name"
  rating: 5
  text: "Review text"
  date: "2025-11-10"
```

#### Use Cases Format (`data/usecases.yaml`):
```yaml
- title: "Use Case Title"
  description: "Description text"
  icon: "📝"  # Emoji or icon
```

### Key files to check when making changes:
- **Hugo config**: Check `hugo.toml` after site configuration changes
- **Main stylesheet**: Check `themes/sp_theme/assets/css/main.css` for styling
- **Interactive JS**: Check `themes/sp_theme/assets/js/main.js` for behavior
- **Data files**: Check `data/*.yml` when updating homepage sections
- **Homepage meta**: Check `content/_index.md` for title, description, keywords
- **Section indexes**: Check `content/[section]/_index.md` for section behavior

### Content Workflow Best Practices

1. **Consistency Across Sections**:
   - Use standard keywords array for changelogs, engineering, contributions
   - Follow date format: YYYY-MM-DD consistently
   - Use descriptive keywords array for blogs and wiki (specific to topic)
   - Set `draft: false` only when ready to publish

2. **SEO Optimization**:
   - Title: 50-60 characters (includes brand name where appropriate)
   - Description: 150-160 characters (clear, compelling, includes keywords)
   - Keywords: 5-12 relevant terms per page
   - Use H1 for title (auto-generated), H2 for sections, H3 for subsections

3. **Writing Tone by Section**:
   - **Blogs**: Personal, conversational, first-person narrative
   - **Changelogs**: Concise, feature-focused, celebratory
   - **Wiki**: Instructional, clear, step-by-step
   - **Engineering**: Technical but accessible, experience-sharing
   - **Contributions**: Helpful, welcoming, action-oriented

4. **Image References**:
   - Homepage OG image: `https://storypad.me/og_1200x630.jpg`
   - GitHub assets: `https://github.com/user-attachments/assets/[hash]`
   - Local static files: `/path/to/image.png`
   - External embeds: Use `embed_content` field for Reddit, Twitter, etc.

5. **Link Patterns**:
   - Internal pages: `/section/page-slug/` (Hugo generates permalinks)
   - Cross-references: `/wiki/page-name`, `/blogs/post-name`
   - External: Full URLs with https://
   - GitHub: Link to PRs, issues, releases, comparisons

### Common Content Updates:
- **Add new blog post**: Create in `content/blogs/`, follow blog format
- **Add changelog**: Create `content/changelogs/X.Y.Z.md`, include GitHub link
- **Update FAQ**: Edit `data/questions.yml`, rebuild to see changes
- **Update reviews**: Edit `data/reviews.yml`
- **Add wiki page**: Create in `content/wiki/`, cross-link with related pages
- **Update privacy/legal**: Edit markdown files directly, check legal accuracy

### Theme development:
- **CSS changes**: Edit `themes/sp_theme/assets/css/main.css` (TailwindCSS v4 syntax)
  - Use `@import "tailwindcss"` (not v3 syntax)
  - Utility-first approach, use dark: prefix for dark mode
  - Custom styles in @layer components or utilities
- **JavaScript**: Edit `themes/sp_theme/assets/js/main.js`
  - Interactive features: FAQ accordion, theme toggle, etc.
  - Vanilla JS preferred (no framework dependencies)
- **Templates**: Edit files in `themes/sp_theme/layouts/`
  - Follow Hugo template syntax
  - Test with `hugo server` after changes
- **Partials**: Edit files in `themes/sp_theme/layouts/_partials/`
  - Reusable components for sections, header, footer

### Deployment:
- Site auto-deploys to GitHub Pages via `.github/workflows/hugo.yaml` on push to `develop` branch
- Uses Hugo v0.147.5, Dart Sass, and npm dependencies in CI
- Build artifacts cached for performance
- Deployment URL: https://storypad.me/
- DNS and custom domain configured in GitHub Pages settings

### Git Workflow:
- **Main branch**: `develop` (auto-deploys to production)
- **Feature branches**: Create from `develop`, PR back to `develop`
- **Commit messages**: Descriptive, mention section/feature changed
- **Before merging**: Always test build locally with `hugo --gc --minify`

## Critical Notes

### Hugo version compatibility:
- **MUST use Hugo Extended v0.147.5** - other versions cause template failures
- The repository includes `hugo.tar.gz` but install from GitHub releases for latest patches

### TailwindCSS v4 requirements:
- Uses newer `@import "tailwindcss"` syntax in CSS
- Requires Node.js dependencies via npm
- CSS processing handled by Hugo's built-in TailwindCSS integration

### Common warnings (expected):
- "Raw HTML omitted" warnings in changelogs are expected and harmless
- External resource loading may fail in development (fonts, analytics) - this is normal

### Browser testing notes:
- External CDN resources (Google Fonts, Firebase) may be blocked in testing environments
- Core functionality (navigation, FAQ, responsive design) should work without external resources
- Interactive JavaScript features are in `main.js` and should function offline

### DO NOT:
- Use different Hugo versions - causes template parsing failures
- Skip manual validation - automated builds may pass but site may not function
- Cancel builds or installs early - they complete quickly but need time for TailwindCSS processing
- Edit `public/` directory - it's auto-generated and will be overwritten
- Commit `hugo` binary - it's large and excluded via .gitignore