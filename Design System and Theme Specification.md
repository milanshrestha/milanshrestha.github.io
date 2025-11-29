```Start```
---

# 🎨 **Design System & Theme Specification**

**Project:** *Personal Website — Milan Shrestha (IT Manager, Hotel Shanker)*
**Theme Style:** *Google Developers Web Theme (developers.google.com-inspired)*
**Version:** 1.0

---

## 1. **Design Philosophy**

The theme will follow **Google’s Material-inspired principles**, focusing on:

* **Simplicity** — clean, uncluttered layouts
* **Hierarchy** — clear type and color contrast
* **Modernity** — flat design with subtle elevation
* **Accessibility** — legible text, adequate contrast
* **Personality** — subtle infusion of Hotel Shanker’s heritage tone through font pairing and tone

---

## 2. **Color Palette**

### 🎨 **Primary Palette**

| Role           | Color       | Hex       | Usage                    |
| -------------- | ----------- | --------- | ------------------------ |
| **Primary**    | Google Blue | `#1A73E8` | Headings, buttons, links |
| **Secondary**  | Charcoal    | `#202124` | Text, main body          |
| **Background** | White       | `#FFFFFF` | Page background          |
| **Surface**    | Light Gray  | `#F8F9FA` | Cards, panels            |
| **Accent**     | Sky Blue    | `#E8F0FE` | Hover, highlights        |
| **Error**      | Red         | `#D93025` | Form validation, alerts  |

### 🏨 **Optional Brand Accent (Hotel Shanker Tone)**

Use subtly — warm gold hue to represent heritage and elegance.

| Role            | Color      | Hex       |
| --------------- | ---------- | --------- |
| **Accent Gold** | Regal Gold | `#C6A664` |

> 💡 **Usage Rule:**
> Use blue as the functional color (actions, links), gold for small decorative highlights like section dividers or hover accents — not dominant backgrounds.

---

## 3. **Typography System**

### **Primary Typefaces**

| Role                 | Font          | Style                                   |
| -------------------- | ------------- | --------------------------------------- |
| **Headings (H1–H3)** | *Google Sans* | Clean, geometric, modern                |
| **Body Text**        | *EB Garamond* | Elegant serif — adds heritage character |
| **UI & Captions**    | *Roboto*      | Neutral readability for forms, buttons  |

---

### **Font Sizes & Hierarchy**

| Element    | Font        | Size | Weight | Letter Spacing |
| ---------- | ----------- | ---- | ------ | -------------- |
| H1         | Google Sans | 48px | 600    | -1px           |
| H2         | Google Sans | 32px | 500    | -0.5px         |
| H3         | Google Sans | 24px | 500    | 0              |
| Body       | EB Garamond | 18px | 400    | 0              |
| Small / UI | Roboto      | 14px | 400    | 0.2px          |
| Button     | Roboto      | 16px | 500    | 0.3px          |

---

### **Line Height**

* Heading: 1.2
* Body: 1.6
* Paragraph Spacing: `1.2em`

---

## 4. **Layout System**

### **Container**

* Max width: `1200px`
* Padding: `0 1.5rem`
* Grid: 12-column flexible grid using CSS Grid

### **Breakpoints**

| Device  | Width      | Columns | Gutter |
| ------- | ---------- | ------- | ------ |
| Mobile  | 0–599px    | 4       | 16px   |
| Tablet  | 600–1023px | 8       | 24px   |
| Desktop | 1024px+    | 12      | 32px   |

---

## 5. **Component Style Guide**

### 🧭 **Navigation Bar**

* Fixed top with elevation shadow (`box-shadow: 0 2px 6px rgba(0,0,0,0.05)`)
* Transparent on hero section; solid white on scroll
* Logo (text only):
  **Milan Shrestha** <span style="color:#1A73E8">· IT Manager</span>
* Links: uppercase, medium weight, letter spacing `0.05em`

---

### 💬 **Hero Section**

* Full viewport height
* Large intro heading:
  *“Bridging heritage hospitality with modern technology.”*
* Subtext in EB Garamond, soft gray tone
* CTA buttons (Projects / Resume / Contact) styled with filled and outlined variants

```scss
.btn-primary {
  background-color: #1A73E8;
  color: #fff;
  border-radius: 8px;
  padding: 0.8rem 1.6rem;
  font-weight: 500;
  transition: all 0.2s ease;
}
.btn-primary:hover {
  background-color: #155BC0;
}
.btn-outline {
  border: 1px solid #1A73E8;
  color: #1A73E8;
  background: transparent;
}
```

---

### 📦 **Cards (Projects, Blog Posts)**

* Rounded corners: `8px`
* Background: white
* Shadow: `0 2px 8px rgba(0,0,0,0.06)`
* Hover: elevate + border-color highlight
* Include project title, description, and tech stack chips

```scss
.card {
  padding: 1.5rem;
  border-radius: 8px;
  background: #fff;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}
```

---

### ✍️ **Content Typography**

* Paragraph width: max `65ch`
* Headings use blue tone; body text charcoal
* Links underline on hover only
* Blockquotes italicized in Garamond with left border accent

```scss
blockquote {
  border-left: 3px solid #1A73E8;
  padding-left: 1rem;
  color: #5f6368;
  font-style: italic;
}
```

---

### 📬 **Contact Form**

* Simple 2-column layout (desktop)
* Inputs: subtle border radius, 1px border, focus glow in blue
* Button: primary style (blue), hover accent gold border

---

## 6. **Iconography**

* Use **Material Symbols (Outlined)** via Google Fonts
* Example: `<span class="material-symbols-outlined">email</span>`
* Consistent 24px sizing, color inherits text tone

---

## 7. **Motion & Interaction**

* Subtle fade-in animation for content (`opacity: 0 → 1`)
* Navigation color change on scroll
* Button hover: 5% darker tone
* Project cards: elevate slightly on hover
* Use CSS transitions only — no heavy JS animations

---

## 8. **Accessibility & Dark Mode (Optional v2)**

* Contrast ratio ≥ 4.5 for text
* Use `prefers-color-scheme` to auto-toggle dark mode
* Dark Mode Palette (preview):

| Element    | Light     | Dark      |
| ---------- | --------- | --------- |
| Background | `#FFFFFF` | `#121212` |
| Text       | `#202124` | `#E8EAED` |
| Card       | `#F8F9FA` | `#1E1E1E` |
| Primary    | `#1A73E8` | `#8AB4F8` |

---

## 9. **Asset Style**

| Asset Type | Format            | Notes                       |
| ---------- | ----------------- | --------------------------- |
| Images     | WebP              | Optimized, lazy-loaded      |
| Icons      | SVG               | Scalable, inline            |
| Fonts      | Google Fonts      | Self-host fallback optional |
| Favicon    | 512x512 PNG + SVG | Blue monogram “M”           |

---

## 10. **Design Summary**

| Principle          | Description                                             |
| ------------------ | ------------------------------------------------------- |
| **Aesthetic**      | Minimal, card-based, airy spacing                       |
| **Tone**           | Professional with warm undertones                       |
| **Emotion**        | Calm confidence, trust, precision                       |
| **Inspiration**    | developers.google.com + Google Design System            |
| **Personal Touch** | EB Garamond font + gold accent = Hotel Shanker elegance |

---
```End```
