```Start```
---

# 🧱 **Component Library Specification**

**Project:** *Personal Website — Milan Shrestha (IT Manager, Hotel Shanker)*
**Theme Base:** Google Developers Style + Custom 11ty Components
**Version:** 1.0

---

## 🔹 1. Overview

Each component is a **modular, reusable Nunjucks partial** stored in
`src/_includes/components/` and imported into layouts (e.g., `base.njk`, `home.njk`).

Naming follows a **BEM-inspired pattern** and **11ty component modularity** principle:

```
component-name/
 ├── component-name.njk
 ├── _component-name.scss
 └── README.md
```

Each component handles one responsibility — layout, UI, or data rendering.

---

## 🔹 2. Component Index

| Component          | Description                 | Layout Inclusion |
| ------------------ | --------------------------- | ---------------- |
| `header.njk`       | Main site navigation        | All layouts      |
| `hero.njk`         | Homepage introduction block | Home             |
| `project-card.njk` | Individual project preview  | Projects Grid    |
| `post-card.njk`    | Blog post snippet           | Blog             |
| `contact-form.njk` | Contact submission form     | Contact page     |
| `footer.njk`       | Footer links + copyright    | All layouts      |
| `meta-tags.njk`    | SEO meta + OpenGraph        | Base layout      |
| `analytics.njk`    | Google Analytics / GTag     | Base layout      |

---

## 🔹 3. Component Specifications

---

### 🧭 **HEADER COMPONENT**

**File:** `src/_includes/components/header.njk`

#### Purpose

Displays navigation bar with sticky top behavior and brand identity.

#### Structure

```html
<header class="site-header">
  <div class="container header__inner">
    <a href="/" class="header__logo">
      <span class="logo-text">Milan Shrestha</span>
      <span class="logo-sub">IT Manager</span>
    </a>

    <nav class="header__nav">
      {% for item in nav %}
        <a href="{{ item.url }}" class="nav__link{% if page.url == item.url %} active{% endif %}">
          {{ item.title }}
        </a>
      {% endfor %}
    </nav>
  </div>
</header>
```

#### Styles (SCSS)

```scss
.site-header {
  position: fixed;
  top: 0; width: 100%;
  background: rgba(255,255,255,0.96);
  backdrop-filter: blur(8px);
  box-shadow: 0 1px 6px rgba(0,0,0,0.05);
  z-index: 1000;
  .header__inner {
    display: flex; justify-content: space-between; align-items: center;
    padding: 1rem 1.5rem;
  }
  .nav__link {
    color: #202124; margin: 0 1rem; font-weight: 500; text-transform: uppercase;
    &:hover, &.active { color: #1A73E8; }
  }
}
```

---

### 💬 **HERO COMPONENT**

**File:** `src/_includes/components/hero.njk`

#### Purpose

Intro section on homepage with personal intro and CTAs.

#### Structure

```html
<section class="hero">
  <div class="container">
    <h1 class="hero__title">Bridging heritage hospitality with modern technology.</h1>
    <p class="hero__subtitle">
      Hello, I’m <strong>Milan Shrestha</strong> — IT Manager at Hotel Shanker, Kathmandu.
    </p>
    <div class="hero__actions">
      <a href="/projects/" class="btn btn-primary">View Projects</a>
      <a href="/resume/" class="btn btn-outline">Download Resume</a>
    </div>
  </div>
</section>
```

#### Styles (SCSS)

```scss
.hero {
  padding: 8rem 1.5rem 4rem;
  text-align: center;
  background: linear-gradient(180deg, #fff 0%, #f8f9fa 100%);
  .hero__title { font-size: 2.5rem; color: #202124; font-family: "Google Sans"; }
  .hero__subtitle { font-size: 1.25rem; color: #5f6368; margin-top: 1rem; }
  .hero__actions { margin-top: 2rem; display: flex; gap: 1rem; justify-content: center; }
}
```

---

### 📦 **PROJECT CARD COMPONENT**

**File:** `src/_includes/components/project-card.njk`

#### Purpose

Display individual project cards dynamically on `/projects/`.

#### Structure

```html
<article class="card project-card">
  <img src="{{ project.image }}" alt="{{ project.title }}" class="project-card__image">
  <div class="project-card__content">
    <h3 class="project-card__title">
      <a href="{{ project.url }}">{{ project.title }}</a>
    </h3>
    <p class="project-card__summary">{{ project.summary }}</p>
    <ul class="project-card__tags">
      {% for tag in project.tags %}
        <li class="tag">{{ tag }}</li>
      {% endfor %}
    </ul>
  </div>
</article>
```

#### Styles (SCSS)

```scss
.project-card {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  transition: transform .2s ease, box-shadow .2s ease;
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  }
  .project-card__image {
    width: 100%; border-radius: 8px 8px 0 0;
  }
  .project-card__content { padding: 1.5rem; }
  .tag {
    background: #E8F0FE; color: #1A73E8;
    font-size: 0.8rem; border-radius: 4px;
    padding: 0.3rem 0.6rem; margin-right: 0.4rem;
  }
}
```

---

### ✍️ **POST CARD COMPONENT**

**File:** `src/_includes/components/post-card.njk`

#### Purpose

Show blog or note previews on `/blog/`.

```html
<article class="card post-card">
  <h3><a href="{{ post.url }}">{{ post.data.title }}</a></h3>
  <p>{{ post.data.summary }}</p>
  <span class="post-date">{{ post.date | date("MMMM D, YYYY") }}</span>
</article>
```

---

### 📬 **CONTACT FORM COMPONENT**

**File:** `src/_includes/components/contact-form.njk`

#### Purpose

Provide a simple message form (Netlify or formspree compatible).

```html
<form class="contact-form" method="POST" data-netlify="true">
  <div class="form-group">
    <label for="name">Name</label>
    <input type="text" id="name" name="name" required>
  </div>
  <div class="form-group">
    <label for="email">Email</label>
    <input type="email" id="email" name="email" required>
  </div>
  <div class="form-group">
    <label for="message">Message</label>
    <textarea id="message" name="message" rows="5"></textarea>
  </div>
  <button type="submit" class="btn btn-primary">Send Message</button>
</form>
```

#### Styles (SCSS)

```scss
.contact-form {
  max-width: 600px; margin: 2rem auto;
  .form-group {
    margin-bottom: 1rem;
    label { display: block; font-weight: 500; margin-bottom: .5rem; }
    input, textarea {
      width: 100%; padding: .8rem; border: 1px solid #dadce0; border-radius: 6px;
      &:focus { border-color: #1A73E8; box-shadow: 0 0 0 2px #E8F0FE; }
    }
  }
}
```

---

### 🧾 **FOOTER COMPONENT**

**File:** `src/_includes/components/footer.njk`

#### Structure

```html
<footer class="site-footer">
  <div class="container footer__inner">
    <p>© {{ site.title }} — {{ site.subtitle }}</p>
    <div class="footer__socials">
      {% for social in socials %}
        <a href="{{ social.url }}" title="{{ social.title }}" target="_blank">
          <span class="material-symbols-outlined">{{ social.icon }}</span>
        </a>
      {% endfor %}
    </div>
  </div>
</footer>
```

#### Styles (SCSS)

```scss
.site-footer {
  background: #f8f9fa; padding: 2rem 1rem; text-align: center;
  color: #5f6368; font-size: 0.9rem;
  .footer__socials a {
    margin: 0 0.5rem; color: #1A73E8;
    &:hover { color: #155BC0; }
  }
}
```

---

## 🔹 4. Naming Conventions

| Type            | Convention | Example                |
| --------------- | ---------- | ---------------------- |
| Component       | kebab-case | `project-card.njk`     |
| Class           | BEM        | `.project-card__title` |
| Variable (SCSS) | camelCase  | `$primaryColor`        |
| ID              | kebab-case | `id="contact-form"`    |

---

## 🔹 5. Utility Classes (Global)

| Class                                  | Purpose                     |
| -------------------------------------- | --------------------------- |
| `.container`                           | Centered responsive wrapper |
| `.btn`, `.btn-primary`, `.btn-outline` | Button variants             |
| `.text-center`                         | Text alignment              |
| `.mt-*`, `.mb-*`                       | Margin utilities            |
| `.fade-in`                             | Animation fade effect       |

---

## 🔹 6. Integration Example (Homepage)

```html
{% extends "layouts/home.njk" %}
{% block content %}
  {% include "components/hero.njk" %}
  <section class="projects">
    <h2 class="section-title">Featured Projects</h2>
    <div class="project-grid">
      {% for project in collections.projects %}
        {% include "components/project-card.njk" %}
      {% endfor %}
    </div>
  </section>
{% endblock %}
```

---

## 🔹 7. Future Expandable Components

| Component              | Description                                | Version |
| ---------------------- | ------------------------------------------ | ------- |
| `timeline.njk`         | Career timeline (animated vertical layout) | v1.1    |
| `testimonial.njk`      | Feedback or recognition quotes             | v1.2    |
| `dark-mode-toggle.njk` | Dark/light switcher                        | v1.3    |
| `stats.njk`            | Small infographics (KPIs, project counts)  | v1.4    |

---
```End```
