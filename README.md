# Vayeavek - Mental Health Support for the Yeshiva World

> "The dust of their struggle rose to the Kisei HaKavod" - Bereishis Rabbah 77:3

## Overview

Vayeavek is a website dedicated to supporting mental health in the yeshiva world. The name comes from Parshas Vayishlach, referencing Yaakov's struggle with the Sar shel Eisav - a powerful metaphor for our own battles with the Sitra Achra.

The site provides:
- **Divrei Torah & Personal Reflections** on struggle, mental health, and faith
- **Mental Health Resources** that understand and respect the yeshiva world
- **Torah Sources (Haskamos)** validating struggle and the importance of seeking help
- **Anonymous Contact** for reaching out

## Getting Started

```bash
npm install
npm run dev
```

Visit `http://localhost:5173` (or next available port)

## Project Structure

```
src/
├── Components/         # Reusable UI components
├── pages/             # Full page components
├── data/              # Content (blog posts, resources, haskamos)
└── App.tsx            # Main routing
```

## Adding Content

### Blog Posts (CMS - Recommended!)
1. Go to `/admin` after deployment
2. Login with GitHub
3. Click "New Blog Post"
4. Write and publish!

**OR** edit markdown files in `content/blog/` directly

### Resources
Edit `src/data/resources.ts` - Add mental health organizations

### Torah Sources
Edit `src/data/haskamos.ts` - Add quotes from Chazal, Tanach, etc.

## CMS Setup

This site includes **Decap CMS** for easy content management!

See [CMS-SETUP.md](CMS-SETUP.md) for complete setup instructions.

**Quick start:**
1. Update `public/admin/config.yml` with your GitHub repo name
2. Deploy to GitHub Pages or Netlify
3. Access `/admin` to write posts!

## Build for Production

```bash
npm run build
```

---

**Remember**: Your struggle is real. Your struggle is holy. You are not alone.

