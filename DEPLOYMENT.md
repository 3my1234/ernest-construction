# Deployment Guide - Ernest Construction Website

This guide will help you deploy your website to Vercel for FREE.

## Why Vercel?

✅ **Better for your project because:**
- Optimized for Next.js (what we're using)
- 100GB bandwidth on free tier
- Automatic HTTPS/SSL certificates
- Global CDN for fast loading worldwide
- Automatic deployments from GitHub
- Zero configuration needed
- Excellent performance for animations

## Step-by-Step Deployment

### Step 1: Prepare Your Code

1. Make sure all your project files are in the folder
2. Replace placeholder content:
   - Update contact info in `components/Contact.tsx`
   - Update social media links in `components/Contact.tsx` and `components/Footer.tsx`
   - Add your project images to `public/images/` folder
   - Update image paths in `components/Projects.tsx`

### Step 2: Create GitHub Repository

1. Go to [GitHub.com](https://github.com)
2. Sign in or create an account (free)
3. Click the "+" icon → "New repository"
4. Name it: `ernest-construction-website`
5. Keep it public or private (your choice)
6. Click "Create repository"

### Step 3: Push Code to GitHub

Open Git Bash in your project folder and run:

```bash
# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Ernest Construction Website"

# Add your GitHub repository (replace with your URL)
git remote add origin https://github.com/YOUR_USERNAME/ernest-construction-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 4: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up" and choose "Continue with GitHub"
3. Authorize Vercel to access your GitHub
4. Click "Add New" → "Project"
5. Find and import your repository: `ernest-construction-website`
6. Vercel will auto-detect Next.js - keep all default settings
7. Click "Deploy"

**That's it!** Your site will be live in 30-60 seconds! 🎉

### Step 5: Get Your Live URL

After deployment completes:
- You'll see a URL like: `ernest-construction-website.vercel.app`
- Click "Visit" to see your live site
- Share this URL with anyone!

## Adding a Custom Domain (Optional)

Want to use your own domain like `ernestconstruction.com`?

1. Buy a domain from:
   - [Namecheap](https://www.namecheap.com) (~$10/year)
   - [GoDaddy](https://www.godaddy.com)
   - [Google Domains](https://domains.google)

2. In Vercel:
   - Go to your project
   - Click "Settings" → "Domains"
   - Add your domain
   - Follow the DNS setup instructions

3. Wait 5-48 hours for DNS to propagate

## Automatic Updates

Every time you push changes to GitHub, Vercel will automatically:
1. Build your site
2. Deploy the new version
3. Update your live site

To update your site:
```bash
# Make your changes, then:
git add .
git commit -m "Updated project images"
git push
```

Wait 1-2 minutes and your site will be updated!

## Free Tier Limits

Vercel Free Tier includes:
- ✅ 100GB bandwidth/month
- ✅ Unlimited personal projects
- ✅ Custom domains
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Serverless functions

This is more than enough for a construction company portfolio site!

## Troubleshooting

### Build Failed?

1. Check the build logs in Vercel dashboard
2. Make sure `package.json` is present
3. Try building locally first: `npm run build`

### Images Not Showing?

1. Make sure images are in `public/images/` folder
2. Use paths like `/images/your-image.jpg` in your code
3. Check image file names match exactly (case-sensitive)

### Contact Form Not Working?

The current form is a static form. To make it functional:

**Option 1: Use Formspree (Free)**
1. Go to [formspree.io](https://formspree.io)
2. Create a form
3. Add the endpoint to your form in `components/Contact.tsx`

**Option 2: Use Netlify Forms** (if you switch to Netlify)
- Just add `data-netlify="true"` to your form tag

**Option 3: Add Backend**
- Use Vercel Serverless Functions
- Or integrate with an email API (SendGrid, etc.)

## Need Help?

Common issues:
1. **"Command not found"**: Make sure Node.js is installed
2. **"Permission denied"**: Use Git Bash as administrator
3. **"Build failed"**: Run `npm install` then `npm run build` locally first

## Alternative: Netlify Deployment

If you prefer Netlify:

1. Go to [netlify.com](https://www.netlify.com)
2. Sign up with GitHub
3. Click "Add new site" → "Import an existing project"
4. Choose your GitHub repo
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Click "Deploy"

Both are great, but Vercel is recommended for Next.js projects!

## Performance Tips

After deployment:
1. Test your site speed: [PageSpeed Insights](https://pagespeed.web.dev)
2. Optimize images before uploading (use WebP format)
3. Compress images: [TinyPNG](https://tinypng.com)

## Security

- ✅ HTTPS is automatic on Vercel
- ✅ Never commit sensitive data (API keys, passwords)
- ✅ Use environment variables for secrets

---

**Congratulations!** Your Ernest Construction website is now live! 🎉

Share your URL with clients and start showcasing your amazing projects!

