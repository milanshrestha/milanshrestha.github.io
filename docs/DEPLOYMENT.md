# Deployment and Publishing Guide

This document outlines the steps to deploy and publish the **Milan Shrestha Personal Website** project. The project uses **11ty (Eleventy)** as a static site generator and is deployed via **GitHub Pages** using **GitHub Actions**.

## Prerequisites

Before deploying, ensure you have the following installed:
*   **Node.js** (v14 or higher)
*   **npm** (Node Package Manager)
*   **Git**

## 1. Local Development

Always verify your changes locally before deploying.

1.  **Install Dependencies** (first time only):
    ```bash
    npm install
    ```

2.  **Run Development Server**:
    ```bash
    npx @11ty/eleventy --serve
    ```
    This will start a local server at `http://localhost:8080`. Changes to files will automatically trigger a rebuild and refresh the browser.

## 2. Building for Production

To create a production-ready build without starting a server:

```bash
npx @11ty/eleventy
```

This command compiles all assets and templates into the `dist/` directory.

## 3. Deployment to GitHub Pages

The project is configured to automatically deploy to GitHub Pages whenever changes are pushed to the `main` branch.

### Step-by-Step Deployment:

1.  **Stage Changes**:
    Add your modified files to the git staging area.
    ```bash
    git add .
    ```

2.  **Commit Changes**:
    Write a descriptive commit message.
    ```bash
    git commit -m "Description of changes (e.g., Added new blog post)"
    ```

3.  **Push to GitHub**:
    Push your commits to the `main` branch.
    ```bash
    git push origin main
    ```

4.  **Automatic Deployment**:
    *   Once pushed, **GitHub Actions** will automatically trigger the `Deploy to GitHub Pages` workflow defined in `.github/workflows/deploy.yml`.
    *   This workflow builds the project and pushes the `dist/` folder to the `gh-pages` branch.

### Verifying Deployment

1.  Go to your GitHub repository.
2.  Click on the **Actions** tab to see the progress of the deployment workflow.
3.  Once the workflow shows a green checkmark, your site is live.
4.  Visit **[https://milanshrestha.github.io](https://milanshrestha.github.io)**.

## 4. Configuration Details

### GitHub Pages Settings
Ensure your repository settings are correct:
1.  Go to **Settings** > **Pages**.
2.  **Source**: Deploy from a branch.
3.  **Branch**: Select `gh-pages` and `/ (root)`.
4.  **Custom Domain** (Optional): If you are NOT using a custom domain, ensure the field is empty and `deploy.yml` does not have a `cname` field.

### Troubleshooting

#### 404 Not Found
If you see a 404 error on the live site:
*   **Check Branch**: Ensure GitHub Pages is serving from the `gh-pages` branch, NOT `main`.
*   **Check .nojekyll**: Ensure the `.nojekyll` file exists in `src/` and is being copied to `dist/`. This prevents GitHub from ignoring files starting with `_` (like `_assets`).
    *   *Fix*: The project is configured to copy `src/.nojekyll` to `dist/`.

#### Styles Missing
If the site loads but looks unstyled:
*   **Check Paths**: Ensure CSS paths in your templates are absolute (e.g., `/assets/css/main.css`) or correctly relative.
*   **Check Build**: Verify that `dist/assets/css/main.css` exists after running `npx @11ty/eleventy`.
