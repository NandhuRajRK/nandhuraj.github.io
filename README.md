# Nandhu Raj R Portfolio

Personal portfolio built with Astro, TypeScript, and Tailwind CSS.
Design style: dark AI systems console / terminal dashboard.

## Tech Stack

- Astro
- TypeScript
- Tailwind CSS

## Local Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start development server:
   ```bash
   npm run dev
   ```
3. Open:
   ```text
   http://localhost:4321
   ```

## Build

```bash
npm run build
```

## GitHub Pages Deployment

This repo includes a GitHub Actions workflow at `.github/workflows/deploy.yml` that:

1. Installs dependencies
2. Builds the Astro site
3. Deploys `dist/` to GitHub Pages

### Required Repository Settings

1. In GitHub, go to `Settings > Pages`.
2. Set source to `GitHub Actions`.
3. Ensure the repository is named `nandhuraj.github.io` (already true for user pages).

## Project Structure

```text
src/
  components/
    CommandButton.astro
    ConsoleSection.astro
    LogTimeline.astro
    Navbar.astro
    ProjectConsoleCard.astro
    StatusBadge.astro
    Tag.astro
    TerminalWindow.astro
  data/
    experience.ts
    projects.ts
  layouts/
    Layout.astro
  pages/
    index.astro
    projects.astro
    resume.astro
```
