# 🚀 Modern Portfolio & Resume - Ashutosh Kumar

A beautiful, modern portfolio website built with React, Framer Motion, and Tailwind CSS. Showcasing your technical leadership, AI learning journey, and GitHub projects.

**Live Demo:** https://askuma.github.io

---

## ✨ Features

✅ **Modern Design** - Clean, professional, tech-forward aesthetic  
✅ **Smooth Animations** - Framer Motion-powered transitions  
✅ **Fully Responsive** - Perfect on mobile, tablet, desktop  
✅ **Fast Performance** - Optimized React + static hosting  
✅ **GitHub Pages Ready** - Deploy with one command  
✅ **SEO Optimized** - Built-in meta tags and structured data  
✅ **Easy to Customize** - Well-documented, modular code  

---

## 📋 What's Included

```
📦 Portfolio Package
├── 📄 Portfolio.jsx          ← Main component (copy to src/components/)
├── 📦 package.json           ← Dependencies (copy to root)
├── 📖 SETUP_GUIDE.md         ← Step-by-step setup instructions
├── ⚡ QUICK_START.md         ← 5-minute deployment guide
├── 🎨 CUSTOMIZATION_GUIDE.md ← Full customization reference
└── README.md                 ← This file
```

---

## 🚀 Quick Start

### **1. Clone This Package**

```bash
# Create project
mkdir ashutosh-portfolio
cd ashutosh-portfolio

# Initialize with files from this package
```

### **2. Install Dependencies**

```bash
npm install
npm install --save-dev react-scripts gh-pages
```

### **3. Deploy**

```bash
npm run deploy
```

**Your portfolio is now live at:** `https://askuma.github.io` ✨

(Takes 1-2 minutes to appear)

---

## 📝 Sections Included

### **Hero Section**
- Attention-grabbing introduction
- Your name and key tagline
- CTA buttons to explore

### **Experience**
- 4 roles from your career
- Timeline view with descriptions
- Key highlights and skills per role

### **Skills & Focus**
- Organized by category
- Leadership, Technical, Programming, Emerging Tech
- Current focus on AI learning

### **Featured Projects**
- Links to your GitHub repositories
- Tech stack display
- Featured project highlighting

### **Education**
- University, degree, field
- Graduation year

### **Call to Action**
- Email, LinkedIn, GitHub links
- Easy contact options

---

## 🎨 Key Technologies

- **React 18** - Component-based UI
- **Framer Motion** - Smooth animations
- **Tailwind CSS** - Utility-first styling
- **Lucide React** - Beautiful icons
- **GitHub Pages** - Free hosting

---

## 📚 Documentation

### **Getting Started?**
→ Read **`QUICK_START.md`** (5 minutes)

### **Need Step-by-Step Instructions?**
→ Read **`SETUP_GUIDE.md`** (15 minutes)

### **Want to Customize Everything?**
→ Read **`CUSTOMIZATION_GUIDE.md`** (full reference)

---

## 🎯 Setup in 3 Steps

### **Step 1: Prerequisites**
- Node.js installed (https://nodejs.org/)
- Git installed (https://git-scm.com/)
- GitHub account (https://github.com/signup)

### **Step 2: Local Setup**
```bash
npm install
npm start  # Test at http://localhost:3000
```

### **Step 3: Deploy**
```bash
npm run deploy  # Live at https://askuma.github.io
```

---

## ✏️ Customization Checklist

- [ ] Update your name in hero section
- [ ] Update email and social links
- [ ] Customize experience section with your roles
- [ ] Update skills list
- [ ] Add/modify GitHub projects
- [ ] Update education details
- [ ] Test locally: `npm start`
- [ ] Deploy: `npm run deploy`

---

## 🔧 Common Tasks

### **Update Your Information**
Edit `src/components/Portfolio.jsx` and update:
- Name
- Email
- GitHub username
- LinkedIn profile
- Experience details
- Skills
- Projects

See `CUSTOMIZATION_GUIDE.md` for detailed instructions.

### **Change Color Scheme**
All styling uses Tailwind CSS. Find color classes and replace:
```
bg-gray-900  →  bg-blue-900
text-gray-900 → text-blue-900
```

See `CUSTOMIZATION_GUIDE.md` → "Styling Customization" section.

### **Add/Remove Sections**
The `Portfolio.jsx` component is self-contained. Add new sections following the existing pattern:
```javascript
<section id="your-section" className="py-24 px-6">
  {/* Your content */}
</section>
```

See `CUSTOMIZATION_GUIDE.md` → "Advanced Customization" section.

### **Deploy Updates**
```bash
# After making changes:
npm run deploy
# Live within 1-2 minutes
```

---

## 📊 Project Structure

```
ashutosh-portfolio/
├── node_modules/          # Dependencies
├── public/
│   └── index.html         # HTML entry point
├── src/
│   ├── components/
│   │   └── Portfolio.jsx   # Main component (everything is here!)
│   ├── App.jsx            # App wrapper
│   ├── index.js           # React initialization
│   └── index.css          # Global styles
├── package.json           # Dependencies & config
├── tailwind.config.js     # Tailwind setup
└── postcss.config.js      # PostCSS setup
```

---

## 🚀 Deployment

### **Automatic (Recommended)**
```bash
npm run deploy
```

This:
1. Builds optimized production files
2. Pushes to `gh-pages` branch
3. GitHub Pages automatically deploys

### **Manual**
```bash
npm run build
gh-pages -d build
```

---

## ✅ Verification Checklist

After deployment:
- [ ] Visit `https://askuma.github.io` (your actual URL)
- [ ] Check responsive design on mobile
- [ ] Click all navigation links
- [ ] Verify GitHub/LinkedIn links work
- [ ] Test email link opens mail client
- [ ] Check animations are smooth
- [ ] Verify all text is correct

---

## 🎨 Customization Examples

### **Change from Grayscale to Blue**
In `src/components/Portfolio.jsx`, use Find & Replace:
- Find: `bg-gray-900` → Replace: `bg-blue-900`
- Find: `text-gray-900` → Replace: `text-blue-900`
- Find: `border-gray-300` → Replace: `border-blue-300`

### **Add a Resume Download**
In `public/` folder, add `resume.pdf`, then add button:
```javascript
<a href="/resume.pdf" download className="...">
  Download Resume
</a>
```

### **Change Animation Speed**
In `Portfolio.jsx`, modify animation duration:
```javascript
animation: `fadeInUp 0.7s ...`  // Change 0.7s to 0.3s for faster
```

---

## 🐛 Troubleshooting

### **Deploy Not Showing?**
```bash
rm -rf build/
npm run deploy
# Wait 2-3 minutes
```

### **Styles Look Wrong?**
```bash
npm run build
# Clear browser cache: Ctrl+Shift+Delete
```

### **Links Not Working?**
- Verify URLs include `https://`
- Check GitHub username spelling
- Test URL in new tab

See `SETUP_GUIDE.md` for more troubleshooting.

---

## 📈 Next Steps

1. **Follow Quick Start** → Deploy in 5 minutes
2. **Customize Information** → Update your details
3. **Test Locally** → `npm start`
4. **Deploy** → `npm run deploy`
5. **Share** → Proudly share your portfolio URL

---

## 🎓 Learning Resources

- **React Docs**: https://react.dev
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Framer Motion**: https://www.framer.com/motion/
- **Lucide Icons**: https://lucide.dev
- **GitHub Pages**: https://pages.github.com

---

## 📞 Support

- **Setup Issues?** → See `SETUP_GUIDE.md`
- **Customization Questions?** → See `CUSTOMIZATION_GUIDE.md`
- **Quick Answers?** → See `QUICK_START.md`

---

## 📜 License

Free to use and modify for your personal portfolio.

---

## 🙌 Credits

Built with:
- React 18
- Framer Motion
- Tailwind CSS
- Lucide React Icons
- GitHub Pages

---

## 🚀 You're All Set!

Your modern portfolio is ready to showcase your career, skills, and projects.

**Next Action:** Read `QUICK_START.md` and deploy in 5 minutes!

---

**Version:** 1.0  
**Created:** June 2026  
**Status:** Ready to Deploy ✨
