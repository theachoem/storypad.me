# StoryPad Website

Always reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.

StoryPad is a Hugo-based static website for promoting the StoryPad mobile app - a timeline-based journaling application. The site uses Hugo v0.147.5 with a custom theme (`sp_theme`) built on TailwindCSS v4, showcasing app features, user reviews, FAQ, and download links.

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

## Common Tasks

### Repository structure:
```
/home/runner/work/storypad.me/storypad.me/
├── .github/workflows/hugo.yaml  # CI/CD deployment to GitHub Pages
├── content/                     # Markdown content files
│   ├── _index.md               # Homepage content and metadata
│   ├── changelogs/             # App version changelogs
│   ├── privacy-policy.md       # Privacy policy page
│   └── wiki/                   # Documentation content
├── data/                       # YAML data files
│   ├── usecases.yaml          # Use case scenarios for homepage
│   ├── questions.yml          # FAQ questions and answers
│   └── reviews.yml            # User review data
├── static/                     # Static assets (images, icons, etc.)
├── themes/sp_theme/            # Custom Hugo theme
│   ├── assets/
│   │   ├── css/main.css       # TailwindCSS v4 styles
│   │   └── js/main.js         # Interactive JavaScript
│   └── layouts/               # Hugo template files
├── hugo.toml                  # Hugo configuration
└── package.json               # Node.js dependencies (TailwindCSS)
```

### Key files to check when making changes:
- **Always check `hugo.toml`** after modifying site configuration
- **Always check `themes/sp_theme/assets/css/main.css`** when styling changes are made
- **Always check `data/*.yml` files** when content sections are modified
- **Always check `content/_index.md`** when homepage content changes

### Content updates:
- **Homepage content**: Edit `content/_index.md` for meta tags and page data
- **FAQ questions**: Edit `data/questions.yml` 
- **User reviews**: Edit `data/reviews.yml`
- **App features**: Edit `data/usecases.yaml`
- **Changelogs**: Add new files to `content/changelogs/`

### Theme development:
- **CSS changes**: Edit `themes/sp_theme/assets/css/main.css` (TailwindCSS v4 syntax)
- **JavaScript**: Edit `themes/sp_theme/assets/js/main.js`
- **Templates**: Edit files in `themes/sp_theme/layouts/`
- **Partials**: Edit files in `themes/sp_theme/layouts/_partials/`

### Deployment:
- Site auto-deploys to GitHub Pages via `.github/workflows/hugo.yaml` on push to `develop` branch
- Uses Hugo v0.147.5, Dart Sass, and npm dependencies in CI
- Build artifacts cached for performance

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