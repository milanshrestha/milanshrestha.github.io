```Start```
# 🧾 **Product Requirements Document (PRD)**

**Project Title:** *Personal Website — Milan Shrestha (IT Manager, Hotel Shanker)*
**Version:** 1.0
**Last Updated:** November 2025

---

## 1. **Overview**

### **Purpose**

To create a personal professional website that showcases Milan Shrestha’s expertise, career achievements, and technology initiatives as the IT Manager at Hotel Shanker. The website will serve as a **digital identity**, **portfolio**, and **technical profile**, designed with a **Google Developers-inspired layout** and powered by **11ty (Eleventy)** for speed, security, and scalability.

---

## 2. **Objectives**

| # | Objective             | Description                                                                                     |
| - | --------------------- | ----------------------------------------------------------------------------------------------- |
| 1 | Professional Presence | Establish an online identity aligned with hospitality technology professionalism.               |
| 2 | Portfolio Showcase    | Present IT projects, digital initiatives, and technical solutions implemented at Hotel Shanker. |
| 3 | Resume Access         | Provide downloadable and interactive resume (CV).                                               |
| 4 | Personal Branding     | Build a minimal, elegant website reflecting credibility and modern design aesthetics.           |
| 5 | SEO & Discoverability | Ensure optimized metadata and structure for Google Search visibility.                           |

---

## 3. **Target Audience**

* Hospitality professionals & hoteliers
* IT and technology partners
* Potential collaborators / vendors
* Recruiters or corporate networks
* General public interested in hotel technology

---

## 4. **Scope**

### **In Scope**

* Static personal website using **11ty**
* Responsive layout (desktop, tablet, mobile)
* Pages: Home, About, Projects, Resume, Blog, Contact
* Integration with Google Fonts and Schema markup
* Deployment on GitHub Pages / Netlify
* Basic SEO setup (OpenGraph, sitemap, meta tags)

### **Out of Scope**

* Dynamic CMS backend
* User login or authentication
* E-commerce or transactional features

---

## 5. **Key Features & Functional Requirements**

| Feature                        | Description                                                                        | Priority |
| ------------------------------ | ---------------------------------------------------------------------------------- | -------- |
| **Home Page**                  | Intro, tagline, portrait, and call-to-action buttons (Projects / Resume / Contact) | High     |
| **About Page**                 | Professional bio, career timeline, expertise overview                              | High     |
| **Projects Page**              | Showcase of technical and operational IT projects at Hotel Shanker                 | High     |
| **Blog / Notes Page**          | Optional section for technical notes or case studies                               | Medium   |
| **Contact Page**               | Form + email link + social links                                                   | High     |
| **SEO Optimization**           | Metadata, sitemap, robots.txt                                                      | High     |
| **Google Developers Theme UI** | Typography, spacing, card design, minimalist visuals                               | High     |
| **Dark/Light Mode**            | Theme toggle for accessibility                                                     | Low      |

---

## 6. **Non-Functional Requirements**

| Category               | Requirement                                  |
| ---------------------- | -------------------------------------------- |
| **Performance**        | Page load under 1.5s (Lighthouse score > 90) |
| **Security**           | HTTPS enforced (via Netlify / GitHub Pages)  |
| **Scalability**        | Modular structure for easy page addition     |
| **Accessibility**      | WCAG 2.1 compliance, semantic HTML           |
| **Maintainability**    | Simple Markdown + Nunjucks templating        |
| **Design Consistency** | Google Developers theme alignment            |

---

## 7. **Design Guidelines**

* **Typography:** Google Sans / Roboto / EB Garamond
* **Color Palette:**

  * Primary: `#1A73E8` (Google Blue)
  * Accent: `#202124` (Charcoal)
  * Background: `#FFFFFF`
* **Layout:** Card-based grid, clean spacing, fixed header
* **Visual Style:** Inspired by developers.google.com (modern, calm, professional)

---

## 8. **Tech Stack**

| Layer            | Tool                                            |
| ---------------- | ----------------------------------------------- |
| Static Generator | 11ty (Eleventy)                                 |
| Template Engine  | Nunjucks                                        |
| CSS              | Sass / PostCSS                                  |
| Deployment       | GitHub Pages / Netlify                          |
| Fonts            | Google Fonts (Google Sans, Roboto, EB Garamond) |
| Version Control  | Git + GitHub                                    |
| CMS              | Netlify CMS                                     |

---

## 9. **Milestones**

| Phase   | Task                                
| ------- | ----------------------------------- 
| Phase 1 | 11ty Project Scaffold & Theme Setup 
| Phase 2 | Page Layout & Content Integration   
| Phase 3 | Testing & SEO Optimization          
| Phase 4 | Deployment & Launch                 

---

## 10. **Success Metrics**

| Metric                   | Target                          |
| ------------------------ | ------------------------------- |
| Page Load                | < 1.5s                          |
| SEO Score                | > 90                            |
| Lighthouse Accessibility | > 90                            |
| Bounce Rate              | < 30%                           |
| Portfolio Page Views     | 100+ unique visitors in 30 days |

---

## 11. **Future Enhancements (V2.0)**

* Blog RSS Feed
* Integration with GitHub Activity API
* Interactive “Tech Stack Timeline” visualization
* Multilingual support (English + Nepali)

---

```End```
