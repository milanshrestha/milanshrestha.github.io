# Project Overview: Milan Shrestha's Personal Website

This directory contains the comprehensive planning and specification documents for Milan Shrestha's personal professional website. The website aims to showcase Milan's expertise, career achievements, and technology initiatives as the IT Manager at Hotel Shanker. It will serve as a digital identity, portfolio, and technical profile, designed with a Google Developers-inspired layout.

## Main Technologies:
*   **Static Site Generator:** 11ty (Eleventy)
*   **Template Engine:** Nunjucks
*   **Styling:** Sass / PostCSS
*   **Version Control:** Git + GitHub
*   **CMS (Optional):** Netlify CMS
*   **Deployment:** GitHub Pages / Netlify

## Architecture:
The project is designed as a modular static site, utilizing Nunjucks for templating, Markdown for content, and JSON/YAML for data management. It follows a component-based architecture for reusability and maintainability.

## Building and Running:
To build and run the 11ty project locally, the following command is typically used:
```bash
npx @11ty/eleventy --serve
```
*(Note: This command assumes the 11ty project is set up in a `src` directory as outlined in the `Structure and Architecture Plan.md` and `package.json` is configured with 11ty dependencies.)*

## Development Conventions:

### Component Library:
*   Each component is a modular, reusable Nunjucks partial stored in `src/_includes/components/`.
*   Naming follows a BEM-inspired pattern and 11ty component modularity principle: `component-name/component-name.njk`, `_component-name.scss`, `README.md`.

### Styling:
*   **CSS Architecture:** BEM-style naming, component-based partials, variables for colors, fonts, spacing, compiled using Sass.
*   **Theme Guidelines:** Google Developers Web Theme inspired, focusing on simplicity, hierarchy, modernity, and accessibility.
*   **Color Palette:** Primary Google Blue (`#1A73E8`), Secondary Charcoal (`#202124`), Background White (`#FFFFFF`), Surface Light Gray (`#F8F9FA`), Accent Sky Blue (`#E8F0FE`). Optional brand accent: Regal Gold (`#C6A664`).
*   **Typography:** Headings (Google Sans), Body Text (EB Garamond), UI & Captions (Roboto).

### Folder Structure:
The planned folder structure is detailed in `Structure and Architecture Plan.md`, with `src/` as the main source directory containing `_data/`, `_includes/`, `pages/`, `projects/`, `posts/`, and `assets/`.

## Key Files in this Directory:
*   **`Component Library Specification.md`**: Details the individual UI components, their purpose, structure, and styling.
*   **`Design System and Theme Specification.md`**: Outlines the design philosophy, color palette, typography, layout system, and component styling.
*   **`Product Requirements Document.md`**: Provides an overview of the project's purpose, objectives, target audience, scope, key features, and non-functional requirements.
*   **`Structure and Architecture Plan.md`**: Describes the 11ty project's folder structure, content architecture, layout architecture, data-driven sections, styling system, and build/deployment processes.
