# 🚀 Ashutosh Kumar - Modern Portfolio & Resume

## Complete Setup & Deployment Guide

---

## 📋 What You Have

A **modern, animated portfolio website** built with:

- ⚛️ **React** - Component-based UI
- ✨ **Framer Motion** - Smooth animations
- 🎨 **Tailwind CSS** - Modern styling
- 🔗 **Lucide Icons** - Beautiful icons

**Features:**

- ✅ Smooth scroll animations
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Fast performance
- ✅ GitHub profile integration
- ✅ Contact links
- ✅ Project showcase with live links

---

## 🛠️ Setup Instructions

### **Step 1: Prerequisites**

Make sure you have installed:

- **Node.js** (v14 or higher) - Download from https://nodejs.org/
- **Git** - Download from https://git-scm.com/

Verify installation:

```bash
node --version    # Should show v14.0.0 or higher
npm --version     # Should show 6.0.0 or higher
git --version     # Should show 2.0.0 or higher
```

---

### **Step 2: Create GitHub Repository**

1. Go to https://github.com/new
2. Repository name: **`askuma.github.io`** (must be exact)
3. Description: "Modern portfolio & resume"
4. Select **Public**
5. Click **Create repository**

---

### **Step 3: Local Setup**

```bash
# 1. Create project directory
mkdir ashutosh-portfolio
cd ashutosh-portfolio

# 2. Initialize Node project
npm init -y

# 3. Install dependencies
npm install react react-dom lucide-react framer-motion
npm install --save-dev react-scripts tailwindcss postcss autoprefixer gh-pages

# 4. Initialize Tailwind CSS
npx tailwindcss init -p

# 5. Initialize Git
git init
git branch -M main
git remote add origin https://github.com/askuma/askuma.github.io.git
```

---

### **Step 4: Project Structure**

Create this folder structure:

```
ashutosh-portfolio/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── index.js
│   ├── App.jsx
│   ├── index.css
│   └── components/
│       └── Portfolio.jsx
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── .gitignore
```

---

### **Step 5: File Setup**

#### **`public/index.html`**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Ashutosh Kumar - Technical Scrum Master | AI Learning & Building"
    />
    <title>Ashutosh Kumar - Technical Scrum Master</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>
```

#### **`src/index.js`**

```javascript
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
```

#### **`src/App.jsx`**

```javascript
import Portfolio from "./components/Portfolio";

function App() {
  return <Portfolio />;
}

export default App;
```

#### **`src/index.css`**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family:
    -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu",
    "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html {
  scroll-behavior: smooth;
}
```

#### **`tailwind.config.js`**

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
```

#### **`postcss.config.js`**

```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

#### **`.gitignore`**

```
# Dependencies
node_modules/
/.pnp
.pnp.js

# Testing
/coverage

# Production
/build
/dist

# Misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*
```

---

### **Step 6: Copy Portfolio Component**

Copy the content of `Portfolio.jsx` (provided separately) into:
`src/components/Portfolio.jsx`

---

### **Step 7: Update package.json**

Add/update the scripts and homepage section in `package.json`:

```json
{
  "name": "ashutosh-portfolio",
  "version": "1.0.0",
  "private": true,
  "homepage": "https://askuma.github.io",
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "lucide-react": "^latest",
    "framer-motion": "^10.16.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "deploy": "npm run build && gh-pages -d build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "devDependencies": {
    "react-scripts": "5.0.1",
    "gh-pages": "^5.0.0"
  }
}
```

---

## 🚀 Deployment to GitHub Pages

### **Step 1: Test Locally**

```bash
npm start
```

Visit http://localhost:3000 to see your portfolio

Press `Ctrl+C` to stop

---

### **Step 2: Build for Production**

```bash
npm run build
```

This creates a `build/` folder with optimized files

---

### **Step 3: Deploy to GitHub Pages**

```bash
npm run deploy
```

This will:

1. Build your project
2. Push the `build` folder to the `gh-pages` branch
3. GitHub Pages will automatically deploy it

---

### **Step 4: Verify Deployment**

1. Go to your repository: https://github.com/askuma/askuma.github.io
2. Click **Settings** → **Pages**
3. Verify the source is set to `gh-pages` branch
4. Visit https://askuma.github.io (may take 1-2 minutes to go live)

---

## ✏️ Customization

### **Update Your Information**

Edit `src/components/Portfolio.jsx`:

**Change your name:**

```javascript
<h1>Ashutosh Kumar</h1> // Line ~90
```

**Update your bio:**

```javascript
<p>15 years in enterprise IT. I lead agile teams by understanding...</p>
```

**Modify experience section:**

```javascript
const experiences = [
  {
    role: "Your Role",
    company: "Your Company",
    period: "Date Range",
    description: "Your description",
    highlights: ["Skill1", "Skill2"],
    icon: "🎯",
  },
  // Add more...
];
```

**Update projects:**

```javascript
const projects = [
  {
    name: "Project Name",
    description: "Description",
    tech: ["Tech1", "Tech2"],
    url: "https://github.com/yourname/project",
    highlight: false,
  },
  // Add more...
];
```

**Change links:**

- Replace `ashutosh.kumar1089@gmail.com` with your email
- Replace GitHub URL with your profile
- Replace LinkedIn URL with your profile

---

## 🔄 Making Updates

After making changes:

```bash
# Test locally
npm start

# When satisfied, deploy
npm run deploy
```

Changes will be live within 1-2 minutes.

---

## 📱 SEO & Meta Tags

Update in `public/index.html`:

```html
<meta name="description" content="Your tagline here" />
<meta name="keywords" content="Agile, DevOps, Leadership, AI" />
<meta name="author" content="Ashutosh Kumar" />

<!-- Open Graph for social sharing -->
<meta property="og:title" content="Ashutosh Kumar - Technical Scrum Master" />
<meta property="og:description" content="Your description" />
<meta property="og:url" content="https://askuma.github.io" />
```

---

## 🎨 Styling Customization

### **Change Color Scheme**

The portfolio uses grayscale + accent colors. To change:

Edit `src/components/Portfolio.jsx` and replace color classes:

**Current colors:**

- Background: `bg-white`, `bg-gray-50`, `bg-gray-900`
- Text: `text-gray-900`, `text-gray-600`
- Accents: `bg-gray-900`, `border-gray-900`

**Example - Blue theme:**
Replace `gray-900` → `blue-900`
Replace `gray-600` → `blue-600`
Replace `gray-100` → `blue-100`

---

## ⚡ Performance Tips

1. **Optimize images**: Keep image sizes small
2. **Lazy load**: React automatically code-splits
3. **Cache**: GitHub Pages caches assets
4. **CDN**: Already using Lucide icons from CDN

Check performance:

```bash
npm run build
# Check /build folder size (should be <500KB)
```

---

## 🐛 Troubleshooting

### **Deploy not showing**

```bash
# Clear cache and redeploy
rm -rf build/
npm run deploy
```

### **Styles not loading**

```bash
# Rebuild Tailwind
npm run build
```

### **Port already in use**

```bash
# Use different port
PORT=3001 npm start
```

### **Git issues**

```bash
# Verify remote
git remote -v

# Should show:
# origin  https://github.com/askuma/askuma.github.io.git (fetch)
# origin  https://github.com/askuma/askuma.github.io.git (push)
```

---

## 📚 Resources

- **React Docs**: https://react.dev
- **Tailwind CSS**: https://tailwindcss.com
- **Lucide Icons**: https://lucide.dev
- **Framer Motion**: https://www.framer.com/motion/
- **GitHub Pages**: https://pages.github.com

---

## 🎯 Next Steps

1. ✅ Set up local project
2. ✅ Deploy to GitHub Pages
3. ✅ Customize your information
4. ✅ Share your portfolio URL
5. ✅ Update regularly with new projects

---

## 📧 Support

For issues or questions:

- Check GitHub Pages documentation
- Review error messages carefully
- Verify all links are correct
- Test locally before deploying

---

**Last Updated:** June 2026  
**Portfolio Ready to Deploy!** 🚀
