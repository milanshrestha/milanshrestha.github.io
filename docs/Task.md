# Planned Tasks: Milan Shrestha's Personal Website

This document outlines the planned tasks for the development of Milan Shrestha's personal professional website, based on the provided specification documents.

## Phase 1: 11ty Project Scaffold & Theme Setup

*   **Task 1.1:** Initialize 11ty project and configure `.eleventy.js`.
*   **Task 1.2:** Set up the basic folder structure (`src/`, `src/_data/`, `src/_includes/`, `src/assets/`).
*   **Task 1.3:** Integrate Sass for CSS pre-processing and define the main stylesheet (`src/assets/css/main.scss`).
*   **Task 1.4:** Create global data files:
    *   `src/_data/site.json` (site metadata)
    *   `src/_data/nav.json` (navigation items)
    *   `src/_data/socials.json` (social links)
*   **Task 1.5:** Implement the root HTML template (`src/_includes/layouts/base.njk`).
*   **Task 1.6:** Set up Google Fonts for Google Sans, EB Garamond, and Roboto.
*   **Task 1.7:** Define core CSS variables (colors, fonts, spacing) and utility classes (e.g., `.container`, `.btn`).

## Phase 2: Page Layout & Content Integration

*   **Task 2.1:** Create core layout templates:
    *   `src/_includes/layouts/home.njk`
    *   `src/_includes/layouts/page.njk`
    *   `src/_includes/layouts/project.njk`
    *   `src/_includes/layouts/post.njk`
*   **Task 2.2:** Develop and integrate reusable Nunjucks components into layouts:
    *   `src/_includes/components/header.njk` (with dynamic navigation)
    *   `src/_includes/components/hero.njk`
    *   `src/_includes/components/footer.njk` (with dynamic social links)
    *   `src/_includes/components/meta-tags.njk` (for SEO)
    *   `src/_includes/components/analytics.njk` (Google Analytics / GTag)
    *   `src/_includes/components/project-card.njk`
    *   `src/_includes/components/post-card.njk`
    *   `src/_includes/components/contact-form.njk`
*   **Task 2.3:** Create static content pages using Markdown and appropriate layouts:
    *   `src/pages/index.md` (Home)
    *   `src/pages/about.md` (About)
    *   `src/pages/projects.md` (Project listing)
    *   `src/pages/resume.md` (Resume)
    *   `src/pages/blog.md` (Blog index)
    *   `src/pages/contact.md` (Contact)
*   **Task 2.4:** Populate `src/projects/` with individual project entries (e.g., `pms-integration.md`).
*   **Task 2.5:** Populate `src/posts/` with optional blog content (e.g., `2025-01-01-wifi-checklist.md`).

## Phase 3: Testing & SEO Optimization

*   **Task 3.1:** Implement comprehensive SEO features, including sitemap generation, `robots.txt`, OpenGraph tags, and meta tags.
*   **Task 3.2:** Ensure full responsiveness across mobile, tablet, and desktop breakpoints as defined in the Design System.
*   **Task 3.3:** Conduct performance testing using Lighthouse to achieve a score > 90.
*   **Task 3.4:** Verify WCAG 2.1 compliance for accessibility and semantic HTML usage.

## Phase 4: Deployment & Launch

*   **Task 4.1:** Configure deployment pipeline for Netlify or GitHub Pages.
*   **Task 4.2:** Set up continuous deployment from the `main` branch.

## Future Enhancements (V2.0)

*   **Task 5.1:** Implement a Blog RSS Feed.
*   **Task 5.2:** Integrate with GitHub Activity API for dynamic content.
*   **Task 5.3:** Develop an interactive “Tech Stack Timeline” visualization component.
*   **Task 5.4:** Add multilingual support (English + Nepali).
*   **Task 5.5:** Implement a Dark/Light Mode toggle feature.
*   **Task 5.6:** Develop additional components: `timeline.njk`, `testimonial.njk`, `dark-mode-toggle.njk`, `stats.njk`.
