# Deploy to GitHub Pages

This guide will help you deploy your portfolio to GitHub Pages for free hosting at `https://username.github.io/repo-name`.

## Prerequisites

- A GitHub account
- Git installed on your machine (or use Replit's Git features)

## Step-by-Step Deployment

### 1. Create a GitHub Repository

1. Go to [GitHub](https://github.com) and log in
2. Click the `+` icon in the top right and select "New repository"
3. Name your repository (e.g., `portfolio`, `my-website`, etc.)
4. Choose **Public** (required for free GitHub Pages)
5. **Do NOT** initialize with README, .gitignore, or license (we already have these)
6. Click "Create repository"

### 2. Connect Your Replit Project to GitHub

**Option A: Using Replit's Git UI**
1. Click the Git icon in the left sidebar of Replit
2. Click "Create a Git Repo"
3. Connect to your GitHub repository

**Option B: Using Terminal**
```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit your code
git commit -m "Initial commit: Portfolio website"

# Add your GitHub repo as remote (replace with your actual repo URL)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** tab
3. In the left sidebar, click **Pages**
4. Under "Build and deployment":
   - Source: Select **GitHub Actions**
5. That's it! The workflow will run automatically

### 4. Configure the Base Path (Important!)

The GitHub Actions workflow automatically sets the base path to your repository name. 

**If your repo is at** `https://github.com/username/portfolio`:
- Your site will be live at: `https://username.github.io/portfolio/`
- No configuration needed! ✅

**If you want to use a custom domain:**
1. Update `.github/workflows/deploy.yml` - Change the VITE_BASE_PATH environment variable:
   ```yaml
   - name: Build
     env:
       VITE_BASE_PATH: /  # Change from /${{ github.event.repository.name }}/ to /
     run: npm run build
   ```
2. Follow [GitHub's custom domain guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

### 5. Wait for Deployment

1. Go to the **Actions** tab in your GitHub repository
2. You'll see the "Deploy to GitHub Pages" workflow running
3. Wait for it to complete (usually 1-3 minutes)
4. Once complete, visit: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

## Automatic Updates

Every time you push code to the `main` branch, GitHub Actions will automatically:
1. Build your project
2. Deploy the new version to GitHub Pages
3. Update your live site

## Troubleshooting

### Deployment Failed?

**Check the Actions tab** for error messages:
1. Go to **Actions** tab
2. Click on the failed workflow
3. Read the error logs

**Common issues:**

1. **Build errors**: Make sure your code builds locally with `npm run build`
2. **Permissions**: Go to Settings > Actions > General > Workflow permissions and select "Read and write permissions"
3. **404 errors**: The base path might be incorrect. Check your repo name matches the URL path.

### Site not updating?

1. Hard refresh your browser (Ctrl+Shift+R or Cmd+Shift+R)
2. Check the Actions tab to see if deployment completed
3. Clear your browser cache

### CSS/Assets not loading?

This usually means the base path is incorrect:
1. Check that `VITE_BASE_PATH` in the workflow matches your repo name
2. Make sure it has leading and trailing slashes: `/repo-name/`

## Testing Locally Before Deployment

To test the production build locally:

```bash
# Build the project
npm run build

# Preview the production build
npm run preview
```

## Making Changes

1. Edit your code in Replit
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Description of changes"
   git push
   ```
3. GitHub Actions will automatically deploy your changes

## Custom Domain (Optional)

To use your own domain instead of `username.github.io`:

1. Buy a domain from a registrar (Namecheap, Google Domains, etc.)
2. In your GitHub repo: Settings > Pages > Custom domain
3. Add your domain and follow the DNS configuration instructions
4. Update `vite.config.ts` base path to `/`

## Cost

**Completely FREE!** 🎉
- GitHub Pages is free for public repositories
- Unlimited bandwidth for static sites
- Automatic HTTPS

## Support

If you encounter issues:
1. Check the [GitHub Pages documentation](https://docs.github.com/en/pages)
2. Review the [Vite deployment guide](https://vitejs.dev/guide/static-deploy.html)
3. Check your workflow logs in the Actions tab

---

**Your portfolio is now live on the internet!** Share your link: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`
