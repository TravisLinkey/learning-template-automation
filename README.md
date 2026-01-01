# Educational Content Platform Template

A reusable template for creating educational content websites similar to [LEARN_CPP](https://www.learncpp.com/). Built with Astro and designed for easy customization.

## Features

- 📚 Chapter-based lesson organization
- 📝 Markdown-based content
- 🎯 Quiz pages with solutions
- 🧭 Automatic navigation (Previous/Next/Back to TOC)
- 📱 Responsive design
- 🚀 GitHub Pages deployment ready
- 🎨 LEARN_CPP-inspired styling
- 🔢 **Math rendering** with KaTeX (LaTeX equations)
- 📋 **Copy buttons** on all code blocks
- 🎴 **Styled math examples** in recessed cards with labels
- 🏠 **Home page route** (`/home`) for table of contents

## Quick Start

### 1. Clone or Use as Template

```bash
git clone <your-repo-url>
cd <your-repo-name>
npm install
```

### 2. Customize for Your Subject

See `CONTEXT/TEMPLATE_SETUP.md` for detailed customization instructions.

**Quick customization checklist:**
- [ ] Update `astro.config.mjs` with your repository name and base path
- [ ] Update `src/components/Header.astro` with your subject name
- [ ] Update `src/pages/index.astro` and `src/pages/home.astro` with your subject details
- [ ] Update `CONTEXT/03__CONTENT_PLAN.md` with your subject details
- [ ] Create your content in `content/lessons/`

**Note:** Math rendering and copy buttons are already configured - no additional setup needed!

### 3. Local Development

```bash
npm run dev
```

Visit `http://localhost:4321` to preview your site.

### 4. Build for Production

```bash
npm run build
```

### 5. Deploy to GitHub Pages

See deployment section below.

## Documentation

- **`CONTEXT/TEMPLATE_SETUP.md`** - Complete setup and customization guide
- **`CONTEXT/00__PLAN_FILE.md`** - Project overview and implementation status
- **`CONTEXT/01__CLONE_EXAMPLE.md`** - Content formatting patterns and style guide
- **`CONTEXT/02__ARCHITECTURAL_DESIGN.md`** - Technical architecture details
- **`CONTEXT/03__CONTENT_PLAN.md`** - Content structure and organization (customize this!)
- **`CONTEXT/04__FEATURES_AND_CONFIG.md`** - Features documentation (math, copy buttons, etc.)

## Deployment to GitHub Pages

This project is configured to deploy automatically to GitHub Pages.

### Automatic Deployment (Recommended)

The project uses GitHub Actions to automatically deploy when you push to the `main` branch.

#### Setup

1. **First, push your code to GitHub:**
   ```sh
   git add .
   git commit -m "Initial setup"
   git push origin main
   ```

2. **Enable GitHub Pages in your repository:**
   - Go to your repository on GitHub
   - Click on **Settings** (top menu bar of your repository)
   - Scroll down in the left sidebar and click **Pages**
   - Under **Build and deployment**, you should see a **Source** dropdown
   - Select **GitHub Actions** from the dropdown
   - If "GitHub Actions" doesn't appear, make sure the workflow file (`.github/workflows/deploy.yml`) has been pushed to your repository

3. **Enable GitHub Actions:**
   - Go to **Settings** → **Actions** → **General**
   - Under **Actions permissions**, select "Allow all actions and reusable workflows"
   - Under **Workflow permissions**, select "Read and write permissions"
   - Click **Save**

4. **Verify the workflow:**
   - Go to the **Actions** tab in your repository
   - You should see "Deploy to GitHub Pages" workflow
   - It will run automatically on push, or you can trigger it manually

5. **Deployment will happen automatically:**
   - The GitHub Action will build and deploy your site
   - You can check the deployment status under the **Actions** tab in your repository
   - Your site will be available at `https://<username>.github.io/<repository-name>/`
   - Note: It may take a few minutes for the first deployment to complete

## Manual Deployment

If you prefer to deploy manually:

1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Deploy:**
   ```sh
   npm run deploy
   ```

This will build the site and push it to the `gh-pages` branch.

## Project Structure

```
project-root/
├── CONTEXT/              # Documentation and planning files
│   ├── TEMPLATE_SETUP.md # Start here for customization!
│   ├── 00__PLAN_FILE.md
│   ├── 01__CLONE_EXAMPLE.md
│   ├── 02__ARCHITECTURAL_DESIGN.md
│   ├── 03__CONTENT_PLAN.md
│   └── 04__FEATURES_AND_CONFIG.md
├── content/             # Your markdown content
│   └── lessons/
│       └── chapter-0/     # Example chapter
├── src/
│   ├── components/        # Astro components
│   ├── layouts/           # Page layouts
│   ├── pages/             # Route pages
│   └── utils/             # Utility functions
├── .github/
│   └── workflows/         # GitHub Actions
└── astro.config.mjs       # Astro configuration
```

## Customization

This template is designed to be easily customized for any subject. Key areas to customize:

1. **Subject Information**: Update in `CONTEXT/03__CONTENT_PLAN.md` and component files
2. **Content**: Create markdown files in `content/lessons/`
3. **Styling**: Modify `src/layouts/BaseLayout.astro` for colors, fonts, etc.
4. **Deployment**: Update `astro.config.mjs` with your repository name

See `CONTEXT/TEMPLATE_SETUP.md` for detailed instructions.

## License

This template is provided as-is for educational purposes. Customize and use as needed.
