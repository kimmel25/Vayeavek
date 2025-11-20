# Decap CMS Setup Guide for Vayeavek

## What is Decap CMS?

Decap CMS gives you a beautiful admin panel to write blog posts without touching code. Everything you write is saved as markdown files in your GitHub repository and automatically deployed when you hit "Publish".

## Setup Instructions

### Step 1: Update GitHub Repository Name

Edit `public/admin/config.yml` and update line 3 with your GitHub username and repo name:

```yaml
backend:
  name: github
  repo: YOUR-USERNAME/Vayeavek  # Change this!
  branch: main
```

For example, if your GitHub username is `yaakov123`:
```yaml
  repo: yaakov123/Vayeavek
```

### Step 2: Enable GitHub OAuth

To log in to your CMS, you need to enable GitHub authentication.

#### Option A: Using GitHub (Free)

1. Go to your repository on GitHub
2. Go to Settings → Pages
3. Enable GitHub Pages from the `main` branch, `/` (root) folder
4. Note your site URL (e.g., `https://yaakov123.github.io/Vayeavek`)

5. Create GitHub OAuth App:
   - Go to https://github.com/settings/developers
   - Click "New OAuth App"
   - Fill in:
     - **Application name**: Vayeavek CMS
     - **Homepage URL**: Your GitHub Pages URL
     - **Authorization callback URL**: `https://api.netlify.com/auth/done` (yes, even for GitHub Pages!)
   - Click "Register application"
   - You'll see your **Client ID** and **Client Secret** - SAVE THESE!

6. Add OAuth credentials:
   - If using Netlify (recommended for OAuth), deploy there instead
   - OR use a third-party OAuth service like https://github.com/vencax/netlify-cms-github-oauth-provider

#### Option B: Deploy to Netlify (Easiest!)

Netlify makes GitHub OAuth super easy:

1. Push your code to GitHub
2. Go to https://netlify.com
3. Click "Add new site" → "Import an existing project"
4. Choose GitHub and select your Vayeavek repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy"
7. Go to Site settings → Identity → Enable Identity
8. Under Identity → Services → Git Gateway → Enable Git Gateway
9. Update `public/admin/config.yml`:

```yaml
backend:
  name: git-gateway
  branch: main
```

### Step 3: Access Your Admin Panel

Once deployed:

1. Go to `https://your-site-url.com/admin`
2. Click "Login with GitHub"
3. Authorize the app
4. You're in!

## How to Use the CMS

### Writing a New Blog Post

1. Go to `/admin`
2. Click "Blog Posts" → "New Blog Posts"
3. Fill in the form:
   - **Title**: Your post title
   - **Type**: Choose "divrei-torah" or "reflection"
   - **Publish Date**: When to publish
   - **Excerpt**: Short summary (shows on homepage)
   - **Tags**: Add relevant tags
   - **Body**: Write your post in markdown!

4. Click **"Publish"** (or "Save" for draft)
5. The post is automatically committed to GitHub
6. GitHub Pages rebuilds your site (takes 1-2 minutes)
7. Your new post appears on the site!

### Editing an Existing Post

1. Go to `/admin`
2. Click "Blog Posts"
3. Click on the post you want to edit
4. Make changes
5. Click "Publish"

### Deleting a Post

1. Go to `/admin`
2. Click "Blog Posts"
3. Click on the post
4. Click "Delete" (top right)
5. Confirm

## How It Works Behind the Scenes

1. You write posts in the admin panel
2. Decap CMS saves them as markdown files in `content/blog/`
3. It commits the files to your GitHub repository
4. When you build (`npm run build`), a script runs:
   - Reads all markdown files from `content/blog/`
   - Parses the frontmatter (title, date, etc.)
   - Generates `src/data/blogPosts.ts`
5. Your React site reads from that generated file
6. GitHub Pages rebuilds and deploys

## Writing in Markdown

Markdown is simple! Here's a quick guide:

```markdown
# Heading 1
## Heading 2

**Bold text**
*Italic text*

- Bullet point
- Another point

1. Numbered list
2. Second item

[Link text](https://example.com)

> Blockquote

---
```

## Workflow Summary

### To Add a New Post:
1. Go to `/admin`
2. Write your post
3. Click "Publish"
4. Wait 1-2 minutes for deployment
5. Done!

### To Edit Site Code:
1. Edit files in VS Code
2. Run `npm run build`
3. Push to GitHub
4. Done!

## Troubleshooting

### Can't log in to /admin
- Make sure you set up GitHub OAuth correctly
- Check that your `config.yml` has the right repo name
- Try clearing cookies and logging in again

### Post not showing up
- Check that it's published (not draft)
- Wait a few minutes for GitHub Pages to rebuild
- Check GitHub Actions to see if build succeeded

### Changes not reflecting
- Run `npm run generate-content` locally
- Then `npm run build`
- Make sure you pushed to GitHub

## Local Development

To test the CMS locally:

```bash
# Run the dev server
npm run dev

# In another terminal, run the CMS proxy
npx decap-server
```

Then go to `http://localhost:5173/admin` and you can test without GitHub.

## Important Files

- `public/admin/config.yml` - CMS configuration
- `public/admin/index.html` - CMS entry point
- `content/blog/` - Your markdown blog posts (edit through CMS!)
- `scripts/generate-content.js` - Converts markdown to TypeScript
- `src/data/blogPosts.ts` - Auto-generated (don't edit directly!)

## Tips

1. **Always use the CMS for blog posts** - Don't edit markdown files directly in VS Code unless you know what you're doing
2. **Tags are useful** - Add relevant tags to help organize posts
3. **Drafts** - Click "Save" instead of "Publish" to keep posts as drafts
4. **Preview** - The CMS has a preview panel to see your post as you write
5. **Media uploads** - You can upload images through the CMS too!

---

**Your site is now a professional CMS-powered website! Write away!** ✍️
