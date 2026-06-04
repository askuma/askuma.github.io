# 📖 Portfolio Customization & Architecture Guide

Complete reference for customizing and extending your portfolio.

---

## 🏗️ Architecture Overview

Your portfolio is built with:

```
Frontend Stack:
├── React 18 (Component Framework)
├── Framer Motion (Animations)
├── Tailwind CSS (Styling)
├── Lucide React (Icons)
└── Deployed to GitHub Pages
```

**Key Files:**

- `src/components/Portfolio.jsx` - Main component (everything is here!)
- `public/index.html` - HTML entry point
- `src/index.js` - React app initialization
- `package.json` - Dependencies & deployment config

---

## 🎨 Customization Guide

### **1. Basic Information (5 minutes)**

Edit `src/components/Portfolio.jsx`:

#### **Hero Section**

```javascript
// Around line 180
<h1>Ashutosh Kumar</h1>  // ← Change this

<p>15 years in enterprise IT...</p>  // ← Change this

<p>Technical Scrum Master</p>  // ← Change this
```

#### **Contact Information**

```javascript
// Search for these and replace:
ashutosh.kumar1089@gmail.com  // Your email
https://github.com/askuma  // Your GitHub
https://linkedin.com/in/ashutosh-kumar-aa2747135  // Your LinkedIn
```

---

### **2. Experience Section (10 minutes)**

Located in `Portfolio.jsx` around line 88:

```javascript
const experiences = [
  {
    role: "Your Job Title",
    company: "Company Name",
    period: "Jan 2020 - Present (2 years)",
    description: "What you did and achieved. Be specific and results-oriented.",
    highlights: ["Skill1", "Skill2", "Skill3"], // 3-5 key skills
    icon: "⚡", // Change emoji here
  },
  // Add more roles...
];
```

**Icon options:**

```
⚡ Lightning    🎯 Target     📊 Chart      🔧 Wrench
🚀 Rocket       👥 People     🔐 Lock       📱 Mobile
🌟 Star         💡 Lightbulb  🎨 Palette    🛠️ Tools
```

**Important:**

- Keep descriptions to 1-2 sentences
- Focus on impact: "Reduced deployment time by 40%"
- List 3-5 most relevant highlights

---

### **3. Skills Section (5 minutes)**

Around line 122:

```javascript
const skills = [
  {
    category: "Your Category",
    items: ["Skill1", "Skill2", "Skill3", "Skill4"],
  },
  // Add more categories...
];
```

**Suggested Categories:**

- Leadership / Project Management
- Technical Skills
- Programming Languages
- Emerging Technologies
- Cloud Platforms
- Development Tools

**Keep items concise:** "Project Management" not "I am very good at managing projects"

---

### **4. Projects Section (10 minutes)**

Around line 145:

```javascript
const projects = [
  {
    name: "Project Name",
    description: "What it does and why it matters",
    tech: ["Tech1", "Tech2"], // 2-4 technologies
    url: "https://github.com/username/repo",
    highlight: false, // Set to true for 1-2 featured projects
  },
  // Add more projects...
];
```

**Example with highlight:**

```javascript
{
  name: "AI-Powered Automation",
  description: "Built an agent framework that reduced manual tasks by 60%",
  tech: ["Python", "AI", "GitHub Copilot"],
  url: "https://github.com/askuma/my-project",
  highlight: true  // This makes it the dark card
}
```

**Tips:**

- Feature 1-2 projects (set `highlight: true`)
- Show variety: mix of different tech stacks
- Include real GitHub repo links
- Write descriptions that explain impact, not just features

---

### **5. Education Section (3 minutes)**

Around line 167:

```javascript
const education = {
  institution: "Your University Name",
  degree: "Bachelor of Technology",
  field: "Your Field of Study",
  year: "2006 - 2010",
};
```

---

## 🎨 Styling Customization

### **Color Scheme**

The portfolio uses Tailwind CSS utility classes. Current scheme: Grayscale + White/Black

**To change colors**, replace Tailwind classes:

**Current:**

- Primary: `bg-gray-900` (dark gray/black)
- Secondary: `bg-gray-50` (light gray)
- Text: `text-gray-900`, `text-gray-600`
- Borders: `border-gray-300`, `border-gray-200`

**Blue Theme Example:**

```
bg-gray-900  →  bg-blue-900
bg-gray-50   →  bg-blue-50
text-gray-900 → text-blue-900
border-gray-300 → border-blue-300
```

**Color Options in Tailwind:**

- `blue`, `purple`, `pink`, `red`, `orange`, `amber`, `yellow`, `green`, `teal`, `cyan`, `indigo`

**How to apply:**

1. Open `src/components/Portfolio.jsx`
2. Use Find & Replace (Ctrl+H or Cmd+H)
3. Replace all instances

**Example replacement:**

```
Find:     bg-gray-900
Replace:  bg-blue-900
```

---

### **Typography Changes**

Modify text sizes in Tailwind classes:

```javascript
// Current sizes used:
text-7xl    // Hero heading (large)
text-5xl    // Section headings
text-2xl    // Subheadings
text-lg     // Body text
text-sm     // Meta info
```

**To make text smaller:**

- `text-7xl` → `text-6xl`
- `text-5xl` → `text-4xl`
- `text-2xl` → `text-xl`

---

### **Spacing Changes**

Modify gaps and padding:

```javascript
// Current spacing:
py - 24; // Vertical padding (large sections)
mb - 20; // Margin bottom
gap - 12; // Gap between grid items
px - 6; // Horizontal padding
```

**To make sections more compact:**

- `py-24` → `py-16`
- `mb-20` → `mb-12`
- `gap-12` → `gap-8`

---

## ✨ Animation Customization

The portfolio uses CSS animations defined at the bottom of the file.

**Current animations:**

```css
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

**Adjust animation speed:**

```javascript
// In HTML elements, adjust duration:
animation: "slideUp 0.8s ..."; // 0.8s = speed (make faster: 0.4s)
animation: "fadeInUp 0.7s ..."; // Stagger timing
```

**To disable animations:**

Find and comment out:

```javascript
// style={{
//   animation: `fadeInUp 0.6s ...`
// }}
```

Or change animation duration to `0s`:

```javascript
style={{
  animation: `fadeInUp 0s ...`  // No animation
}}
```

---

## 🔗 Link Customization

### **GitHub Profile**

```javascript
// Change all instances of:
https://github.com/askuma

// To:
https://github.com/your-username
```

### **LinkedIn Profile**

```javascript
// Change:
https://linkedin.com/in/ashutosh-kumar-aa2747135

// To:
https://linkedin.com/in/your-profile-url
```

### **Email**

```javascript
// Change:
ashutosh.kumar1089@gmail.com

// To:
your-email@gmail.com
```

### **Project Links**

In the `projects` array, update URLs:

```javascript
url: "https://github.com/your-username/your-repo";
```

---

## 🔍 SEO Optimization

Edit `public/index.html`:

```html
<!-- Page title (appears in browser tab) -->
<title>Your Name - Your Title</title>

<!-- Description (appears in search results) -->
<meta name="description" content="Brief description of who you are" />

<!-- For social media sharing -->
<meta property="og:title" content="Your Name - Your Title" />
<meta property="og:description" content="Your description" />
<meta property="og:url" content="https://your-github-username.github.io" />

<!-- Add keywords -->
<meta name="keywords" content="agile, devops, leadership, ai, scrum" />
```

---

## 🚀 Advanced Customization

### **Add a New Section**

1. Create section ID:

```javascript
<section id="new-section" className="py-24 px-6">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-5xl font-bold mb-20">New Section</h2>
    {/* Content here */}
  </div>
</section>
```

2. Add navigation link:

```javascript
<button onClick={() => scrollToSection("new-section")}>New Section</button>
```

3. Add to navigation menu (around line 70):

```javascript
// In nav, add:
<a onClick={() => scrollToSection("new-section")}>New Section</a>
```

---

### **Add a Featured Image**

```javascript
{
  /* Add in any section */
}
<img
  src="https://path-to-image.jpg"
  alt="Description"
  className="w-full rounded-xl shadow-lg mt-8"
/>;
```

---

### **Add Download Resume Button**

```javascript
<a
  href="/resume.pdf" // Place PDF in public/ folder
  download
  className="px-8 py-3 border-2 border-gray-900 text-gray-900 rounded-lg hover:bg-gray-50 transition font-medium"
>
  Download Resume
</a>
```

---

## 🐛 Common Issues & Fixes

### **Animations Not Working**

- Ensure React is imported
- Check animation syntax in `<style>` tag
- Browser might have animations disabled

**Solution:**

```javascript
// Change this:
animation: `fadeInUp 0.6s ...`

// To this if disabled:
style={{ opacity: 1 }}
```

### **Links Not Working**

- Verify URLs include `https://`
- Check username spelling
- Test URL in browser

**Solution:**

```javascript
// Must have https://
url: "https://github.com/askuma"; // ✅ Correct
url: "github.com/askuma"; // ❌ Wrong
```

### **Styles Look Off**

- Rebuild Tailwind:

```bash
npm run build
```

- Clear browser cache: Ctrl+Shift+Delete (or Cmd+Shift+Delete)

### **Grid Layout Broken**

- Check `md:grid-cols-2` class
- On mobile, it will stack (1 column)
- Expected behavior

---

## 📱 Responsive Design

The portfolio is fully responsive:

- **Mobile** (< 768px): Single column, stacked layout
- **Tablet** (768px - 1024px): 2 columns where appropriate
- **Desktop** (> 1024px): Full layout with max-width container

```javascript
// Class breakdown:
// md: means "medium screens and up" (768px+)
md: grid - cols - 2; // 1 col on mobile, 2 on tablet+
md: flex - row; // Stack on mobile, flex-row on tablet+
```

To adjust breakpoints:

```javascript
// Change md: to lg: for tablet layout
md:grid-cols-2  →  lg:grid-cols-2
```

---

## 🚀 Deploy Updates

After customization:

```bash
# Test locally
npm start

# Visit http://localhost:3000
# Check everything looks good

# Deploy
npm run deploy

# Wait 1-2 minutes for changes to go live
```

---

## 📊 Performance Tips

**Keep portfolio fast:**

1. **Limit images:** Keep images < 100KB
2. **Project count:** Don't exceed 6-8 projects
3. **Text content:** Keep descriptions concise
4. **External links:** Minimize external scripts

**Check size:**

```bash
npm run build
# Check /build folder - should be < 500KB
```

---

## 🎓 Learning Resources

**Want to extend further?**

- **React**: https://react.dev
- **Tailwind CSS**: https://tailwindcss.com
- **Framer Motion**: https://www.framer.com/motion/
- **Lucide Icons**: https://lucide.dev

---

## 📧 Need Help?

1. Check `SETUP_GUIDE.md` for detailed setup
2. Review error messages carefully
3. Test changes locally before deploying
4. Check GitHub Pages documentation

---

**Portfolio Version:** 1.0  
**Last Updated:** June 2026  
**Ready to Customize!** ✨
