# Resume Site

Static resume site generated from the provided LinkedIn PDF export.

## Deploy on GitHub Pages

### Automatic Deployment (Recommended)
This repository includes a GitHub Actions workflow that automatically deploys to GitHub Pages when changes are pushed to the `main` branch.

1. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Navigate to **Settings → Pages**
   - Under **Build and deployment**, select **Source: GitHub Actions**
   - Save the settings

2. **Deploy:**
   - Merge this PR or push changes to the `main` branch
   - The GitHub Actions workflow will automatically build and deploy your site
   - Your site will be available at `https://askuma.github.io/askuma/`

### Manual Deployment (Alternative)
If you prefer manual deployment without GitHub Actions:

1. Go to **Settings → Pages** in your repository
2. Under **Build and deployment**, choose **Deploy from a branch**
3. Select **Branch: main** and **Folder: / (root)**, then **Save**
4. Your site will be available at `https://askuma.github.io/askuma/`

## Local Preview
Open `index.html` in a browser or use a local web server:
```bash
# Python 3
python -m http.server 8000

# Node.js (if npx is available)
npx serve
```
Then visit `http://localhost:8000` in your browser.
