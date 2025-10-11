# Customization Guide

## Quick Customizations You Need to Make

### 1. Update Contact Information

**File:** `components/Contact.tsx` and `components/Footer.tsx`

Replace these placeholder values:

```typescript
// In components/Contact.tsx (Line ~14)
const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "info@ernestconstruction.ng", // ← Change this
    href: "mailto:info@ernestconstruction.ng", // ← Change this
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+234 XXX XXX XXXX", // ← Change this
    href: "tel:+234XXXXXXXXXX", // ← Change this
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Lagos, Nigeria", // ← Update if needed
    href: "#",
  },
];
```

### 2. Update Social Media Links

**Files:** `components/Contact.tsx` (Line ~30) and `components/Footer.tsx` (Line ~14)

```typescript
const socialLinks = [
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://facebook.com/ernestconstruction", // ← Your Facebook page
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://instagram.com/ernestconstruction", // ← Your Instagram
  },
  {
    name: "X (Twitter)",
    icon: Twitter,
    href: "https://x.com/ernestconstruct", // ← Your X/Twitter
  },
  {
    name: "TikTok",
    // ...
    href: "https://tiktok.com/@ernestconstruction", // ← Your TikTok
  },
];
```

### 3. Add Your Project Images

**Create this folder structure:**
```
public/
  └── images/
      ├── projects/
      │   ├── project1.jpg
      │   ├── project2.jpg
      │   └── ...
      ├── hero/
      │   └── hero-bg.jpg
      └── about/
          ├── about1.jpg
          └── about2.jpg
```

**Then update in `components/Projects.tsx` (Line ~10):**

```typescript
const projects = [
  {
    id: 1,
    title: "Luxury Residential Estate",
    category: "Estate Development",
    image: "/images/projects/project1.jpg", // ← Your image
    description: "Modern luxury estate...",
  },
  // Add more projects...
];
```

### 4. Update Hero Background Image

**File:** `components/Hero.tsx` (Line ~16)

Replace the placeholder:
```typescript
style={{
  backgroundImage: "url('/images/hero/hero-bg.jpg')", // ← Your hero image
}}
```

### 5. Update About Section Images

**File:** `components/About.tsx` (Lines ~65-90)

Replace the four image URLs with your own:
```typescript
<img
  src="/images/about/image1.jpg" // ← Your images
  alt="Construction Site"
  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
/>
```

### 6. Customize Company Name/Branding

**File:** `components/Navigation.tsx` (Line ~45)

```typescript
<span className="text-xl lg:text-2xl font-bold">
  ERNEST // ← Change if needed
</span>
<span className="text-xs lg:text-sm">
  Building & Construction // ← Change if needed
</span>
```

### 7. Change Colors (Optional)

**File:** `tailwind.config.ts` (Line ~11)

```typescript
colors: {
  primary: {
    DEFAULT: "#1a1a1a", // ← Main dark color
    light: "#2d2d2d",
  },
  accent: {
    DEFAULT: "#d4af37", // ← Gold accent color
    light: "#e5c158",
  },
},
```

### 8. Update Services

**File:** `components/Services.tsx` (Line ~8)

Add, remove, or edit services:
```typescript
const services = [
  {
    icon: Home,
    title: "Residential Construction", // ← Edit these
    description: "Building beautiful homes...", // ← Edit these
    image: "your-image-url", // ← Your image
  },
  // Add more services...
];
```

### 9. Update Meta Information

**File:** `app/layout.tsx` (Line ~5)

```typescript
export const metadata: Metadata = {
  title: "Ernest Building and Construction...", // ← Change if needed
  description: "Leading construction company...", // ← Update description
  keywords: "construction, building, Nigeria...", // ← Add relevant keywords
};
```

### 10. Make Contact Form Functional

The current form is static. To make it work:

**Option 1: Use Formspree (Easiest, Free)**

1. Go to [formspree.io](https://formspree.io) and create a form
2. Get your form endpoint
3. Update `components/Contact.tsx`:

```typescript
<form 
  action="https://formspree.io/f/YOUR_FORM_ID" // ← Add this
  method="POST" // ← Add this
  className="space-y-6"
>
  {/* Add name attributes to inputs */}
  <input name="name" ... />
  <input name="email" ... />
  <input name="phone" ... />
  <textarea name="message" ... />
</form>
```

**Option 2: Use Web3Forms (Free, No Sign Up)**

```typescript
<form 
  action="https://api.web3forms.com/submit"
  method="POST"
  className="space-y-6"
>
  <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY" />
  {/* Rest of form */}
</form>
```

Get access key from [web3forms.com](https://web3forms.com)

## Image Guidelines

### Recommended Image Sizes:
- **Hero Background**: 1920x1080px (landscape)
- **Project Images**: 1200x800px (landscape)
- **About Images**: 800x600px (portrait/square)
- **Service Images**: 800x500px (landscape)

### Image Optimization:
1. Use WebP format for better performance
2. Compress images: [TinyPNG](https://tinypng.com)
3. Keep file sizes under 500KB each

### Where to Get Free Stock Images (if needed):
- [Unsplash](https://unsplash.com) - Free high-quality images
- [Pexels](https://pexels.com) - Free stock photos
- [Pixabay](https://pixabay.com) - Free images

## Testing Before Deployment

1. Run locally:
```bash
npm install
npm run dev
```

2. Open http://localhost:3000
3. Test all links and animations
4. Check mobile responsiveness (press F12, toggle device toolbar)
5. Update all placeholder content

## Need More Help?

Check these files:
- `README.md` - General project information
- `DEPLOYMENT.md` - Deployment instructions
- This file - Customization guide

---

**Remember:** After making changes:
1. Save all files
2. Test locally (`npm run dev`)
3. Commit and push to GitHub
4. Vercel will auto-deploy!

