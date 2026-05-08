📄 Résumé Website — Static HTML + SCSS

A simple, fast, and fully customizable résumé / portfolio website built using HTML, SCSS, and optional Bootstrap.
This project focuses on clean structure, modular styles, and easy deployment (GitHub Pages, Netlify, etc.).
🚀 Features

✔️ Fully static — no backend required
✔️ SCSS with custom variables + partials
✔️ Responsive layout
✔️ Easy to customize colors, fonts, and sections
✔️ Lightweight and fast
✔️ Ready for GitHub Pages deployment

 

# Development
- Just improve or add feature and push to github: 
  - Magic: develop update automatically
  - npm run  start
## Getting started
- Open code in VS Code
- run script start

## Google Tag Manager
- Access to your website
- Conversion-Tracking
- Basis for Optimazation

// Variables
@import "./variables";

// Mixins
@import "./mixins";

// Base layout styles
@import "./layout";

// Components (buttons, cards, sections)
@import "./components";


npx sass src/scss/main.scss dist/style.css --watch


'''
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm install
      - run: npx sass src/scss/main.scss dist/style.css --style=compressed

      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    steps:
      - uses: actions/deploy-pages@v4

# Deployement
- Go to Settings from GitHub
  - Select Pages
  - Source: Deploy from a branch
  - Branch:   
    - which branch  > gh-pages 
    - root > should content index.html
- Go to Actions from GitHub
  - All actions are listed from workflows directory
  - no all
- Install GitHub Pages deploy tool
  - npm install --save-dev angular-cli-ghpages
  - check deploy script