
**Created Date** : 2November 26, 2025 by Github@milanshrestha

### Project Overview

This is a static website built with Eleventy (11ty), a static site generator. It uses Nunjucks as its templating language and Sass for styling. The content is managed through a combination of Markdown files and global JSON data files.

#### Core Technologies & Build Process

Eleventy (`.eleventy.js`): The main configuration file, .eleventy.js, is the heart of the build process. It defines how Eleventy handles different parts of the site:

-- Collections: It creates collections of content, specifically for "posts" (from src/posts/) and "services" (from src/services/). This allows for easy listing and iteration of these content types.

-- Sass Compilation: The project uses a manual Sass compilation step that is triggered before each Eleventy build. It compiles src/assets/css/main.scss into dist/assets/css/main.css.

-- Asset Handling: JavaScript files, images, and some root files (sitemap.xml, robots.txt) are copied directly to the output dist folder without being processed.

-- Data and Layouts: It's configured to use the src directory as the main source, with _data for data files, _includes for templates and components, and dist as the output directory.

Dependencies (`package.json`):

 - @11ty/eleventy: The static site generator.
 - luxon: Used for formatting dates in Nunjucks templates.
 - sass: For compiling SCSS files to CSS.

#### Content & Structure

 - Layouts (`src/_includes/layouts/`): The site uses a main base.njk
   layout, which defines the core HTML structure, including the header,
   footer, and links to CSS and JS files. Other layouts (like home.njk,
   page.njk, etc.) extend this base layout. The content of each page is
   injected into the base.njk layout.

 - Components (`src/_includes/components/`): The project is
   component-based, with reusable Nunjucks partials for different
   sections like the header, footer, and about me section.

 - Data (`src/_data/`): Global data, such as site metadata (site.json),
   navigation links (nav.json), and social media links (socials.json),
   is stored in the src/_data directory. This data is available to all
   templates.

 - Content Pages:

	- src/pages/: Contains Markdown files for static pages like "About" and "Contact".
	- src/posts/: Contains Markdown files for blog posts.
	- src/services/: Contains Markdown files for the different services offered.

#### Key Observations

Data-Driven, But with Static Content: While the project is set up to be data-driven (using collections and data files), some components, like featured-content.njk, are currently hardcoded with static content. This is an area that could be improved by dynamically generating the content from the services collection.