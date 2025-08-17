# StoryPad Website

<p align="center">
  <img src="static/logo_200x200.png" alt="StoryPad Logo" width="120" height="120">
</p>

<p align="center">
  <strong>Not another journal app. A timeline for your life.</strong>
</p>

<p align="center">
  <a href="https://apps.apple.com/us/app/storypad-write-your-story/id6744032172?platform=iphone">
    <img src="https://img.shields.io/badge/Download_on_the-App_Store-black?style=for-the-badge&logo=apple&logoColor=white" alt="Download on App Store">
  </a>
  <a href="https://play.google.com/store/apps/details?id=com.tc.writestory">
    <img src="https://img.shields.io/badge/Get_it_on-Google_Play-green?style=for-the-badge&logo=google-play&logoColor=white" alt="Get it on Google Play">
  </a>
</p>

<p align="center">
  <a href="https://github.com/theachoem/storypad">
    <img src="https://img.shields.io/badge/Main_App-Repository-blue?style=for-the-badge&logo=github" alt="Main App Repository">
  </a>
  <a href="https://storypad.me">
    <img src="https://img.shields.io/badge/Visit-Website-orange?style=for-the-badge&logo=firefox" alt="Visit Website">
  </a>
</p>

---

## About This Repository

This repository contains the source code for the **StoryPad website** ([storypad.me](https://storypad.me)) - the official documentation, changelog, and marketing site for the StoryPad open-source diary app.

> **Looking for the main StoryPad app?** Visit the [main repository](https://github.com/theachoem/storypad) for the Flutter-based mobile application.

## About StoryPad

StoryPad is an open-source timeline diary app with **80,000+ downloads** that lets you capture everything - notes, thoughts, emotions, workouts, travels - on a single continuous timeline. 

### Key Features
- **Timeline-based journaling** - No folders, no tabs, just your life beautifully organized
- **Multi-platform** - Available on iOS and Android
- **Open source** - Built with Flutter and available on GitHub
- **Privacy-focused** - Your data belongs to you
- **Multilingual** - Support for 16+ languages

## Technology Stack

This website is built with:

- **[Hugo](https://gohugo.io/)** - Static site generator
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **Custom Theme** - `sp_theme` designed specifically for StoryPad
- **GitHub Pages** - Automated deployment

## Development Setup

### Prerequisites

- Node.js (for Tailwind CSS)
- Hugo Extended (included in repository as `hugo.tar.gz`)

### Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/theachoem/storypad.me.git
   cd storypad.me
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Extract Hugo binary** (if not already done)
   ```bash
   tar -xzf hugo.tar.gz
   ```

4. **Start development server**
   ```bash
   ./hugo server --buildDrafts --buildFuture
   ```

5. **Visit** `http://localhost:1313` to view the site

### Building for Production

```bash
./hugo --gc --minify
```

The built site will be available in the `public/` directory.

## Pull Request Previews

This repository includes automated PR preview builds! When you open a pull request, GitHub Actions will automatically:

1. **Build the Hugo site** with your changes
2. **Package the preview** as a downloadable artifact
3. **Comment on your PR** with download instructions

### How to Access PR Previews

1. Open or update a pull request targeting the `develop` branch
2. Wait for the "PR Preview - Build Hugo Site" workflow to complete
3. Go to the Actions tab and find your PR's build
4. Download the `pr-preview-[PR#]` artifact
5. Extract the archive and open `index.html` in your browser

This makes it easy to review visual changes and test website functionality before merging!

## Project Structure

```
├── content/              # Markdown content files
│   ├── changelogs/      # App version changelogs
│   ├── contributions/   # Contribution guides
│   ├── engineering/     # Technical blog posts
│   └── wiki/           # Documentation
├── themes/sp_theme/     # Custom Hugo theme
│   ├── layouts/        # HTML templates
│   └── assets/        # CSS, JS, and other assets
├── static/             # Static files (images, icons, etc.)
├── hugo.toml          # Hugo configuration
└── package.json       # Node.js dependencies
```

## Contributing

We welcome contributions to improve the StoryPad website! Here are ways you can help:

### Content Contributions
- **Documentation improvements** - Help make our guides clearer
- **Translation** - Contribute to our [localization efforts](https://docs.google.com/spreadsheets/d/1XcohOqNzrkMJnAmAuJssa0Rc7wftjfN2rrxb4GgcE9c/edit?usp=sharing)
- **Blog posts** - Share your StoryPad experience

### Technical Contributions
- **Bug fixes** - Help us fix website issues
- **Feature improvements** - Enhance the website experience
- **Performance optimizations** - Make the site faster

### How to Contribute

1. **Fork** this repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add some amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Reporting Issues

Found a bug or have a suggestion? Please:
- Check if the issue already exists in our [issue tracker](https://github.com/theachoem/storypad.me/issues)
- For app-related issues, use the [main app repository](https://github.com/theachoem/storypad/issues)
- For website issues, create an issue in this repository

## Links

- **Main App Repository**: [github.com/theachoem/storypad](https://github.com/theachoem/storypad)
- **Website**: [storypad.me](https://storypad.me)
- **iOS App**: [App Store](https://apps.apple.com/us/app/storypad-write-your-story/id6744032172?platform=iphone)
- **Android App**: [Google Play](https://play.google.com/store/apps/details?id=com.tc.writestory)
- **Contact**: [thea@storypad.me](mailto:thea@storypad.me)

## License

This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built with ❤️ by [theachoem](https://github.com/theachoem)
- Powered by [Hugo](https://gohugo.io/) and [Tailwind CSS](https://tailwindcss.com/)
- Thanks to all [contributors](https://github.com/theachoem/storypad.me/graphs/contributors) and the StoryPad community

---

<p align="center">
  <strong>StoryPad - Your timeline, your story</strong>
</p>