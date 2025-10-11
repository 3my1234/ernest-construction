# 🚀 Quick Start Guide

## Get Your Website Running in 3 Minutes!

### Step 1: Install Dependencies

Open **Git Bash** in your project folder and run:

```bash
npm install
```

This will install all required packages (takes 1-2 minutes).

### Step 2: Start Development Server

```bash
npm run dev
```

### Step 3: View Your Website

Open your browser and go to: **http://localhost:3000**

You should see your website running! 🎉

---

## What You'll See

✅ Beautiful animated homepage  
✅ Navigation menu  
✅ Services section  
✅ Projects portfolio  
✅ Contact form  
✅ Footer with social links  

---

## Important: Customize Your Site

🔴 **Before deploying, you MUST update:**

1. **Contact Information** → `CUSTOMIZATION_GUIDE.md` (Section 1)
2. **Social Media Links** → `CUSTOMIZATION_GUIDE.md` (Section 2)
3. **Project Images** → `CUSTOMIZATION_GUIDE.md` (Section 3)

📖 **Read `CUSTOMIZATION_GUIDE.md` for detailed instructions**

---

## Ready to Deploy?

Once you've customized your site:

1. Read `DEPLOYMENT.md`
2. Push to GitHub
3. Deploy to Vercel (FREE!)

Your site will be live in minutes! 🌐

---

## Commands Reference

| Command | Description |
|---------|-------------|
| `npm install` | Install dependencies (first time only) |
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Run production build |
| `npm run lint` | Check for code issues |

---

## Troubleshooting

### "npm: command not found"
**Solution:** Install Node.js from [nodejs.org](https://nodejs.org) (choose LTS version)

### Port 3000 already in use
**Solution:** Stop other apps using port 3000, or change port:
```bash
npm run dev -- -p 3001
```
Then visit http://localhost:3001

### Changes not showing up?
**Solution:** 
1. Save your files (Ctrl+S)
2. Refresh browser (Ctrl+F5)
3. Check terminal for errors

### Build errors?
**Solution:**
1. Delete `node_modules` folder and `.next` folder
2. Run `npm install` again
3. Run `npm run dev`

---

## File Structure

```
ernest/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Main layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Navigation.tsx     # Top navigation
│   ├── Hero.tsx          # Hero section
│   ├── About.tsx         # About section
│   ├── Services.tsx      # Services section
│   ├── Projects.tsx      # Portfolio section
│   ├── Contact.tsx       # Contact section
│   └── Footer.tsx        # Footer
├── public/               # Static files (images, etc.)
│   └── images/          # Put your images here
├── CUSTOMIZATION_GUIDE.md # How to customize
├── DEPLOYMENT.md         # How to deploy
└── package.json          # Dependencies
```

---

## Next Steps

1. ✅ Run `npm install`
2. ✅ Run `npm run dev`
3. ✅ View at http://localhost:3000
4. 📝 Customize your content (see `CUSTOMIZATION_GUIDE.md`)
5. 📸 Add your project images
6. 🚀 Deploy to Vercel (see `DEPLOYMENT.md`)

---

## Questions?

Check these files:
- `CUSTOMIZATION_GUIDE.md` - How to customize your site
- `DEPLOYMENT.md` - How to deploy to Vercel
- `README.md` - Project overview

**Need help?** Double-check Node.js is installed: `node --version` (should show v18 or higher)

---

**Let's build something amazing! 🏗️**

