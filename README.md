# Ernest Building and Construction Enterprise Nigeria LTD

A modern, professional construction company website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## 🌟 Features

- **Modern Design**: Inspired by leading construction companies with smooth animations
- **Responsive**: Fully mobile-responsive design
- **Portfolio Showcase**: Display your construction projects with filtering capability
- **Contact Integration**: Email, phone, and social media links
- **Fast Performance**: Built with Next.js for optimal speed
- **Easy Deployment**: Ready to deploy to Vercel

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Customization

### Update Contact Information

Edit the contact details in `components/Contact.tsx`:

```typescript
const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "your-email@example.com", // Change this
    href: "mailto:your-email@example.com", // Change this
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+234 XXX XXX XXXX", // Change this
    href: "tel:+234XXXXXXXXXX", // Change this
  },
  // ...
];
```

### Update Social Media Links

Update social media URLs in `components/Contact.tsx` and `components/Footer.tsx`:

```typescript
const socialLinks = [
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://facebook.com/your-page", // Change this
  },
  // ... update other links
];
```

### Add Your Project Images

1. Create a `public/images/projects` folder
2. Add your project images
3. Update the image URLs in `components/Projects.tsx`:

```typescript
const projects = [
  {
    id: 1,
    title: "Your Project Name",
    category: "Category",
    image: "/images/projects/your-image.jpg", // Use your images
    description: "Your project description",
  },
  // ...
];
```

### Customize Colors

Edit colors in `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    DEFAULT: "#1a1a1a", // Change to your brand color
    light: "#2d2d2d",
  },
  accent: {
    DEFAULT: "#d4af37", // Change to your accent color
    light: "#e5c158",
  },
},
```

## 🚀 Deployment to Vercel (FREE)

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/your-repo.git
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com)
3. Sign up or log in with your GitHub account
4. Click "Add New Project"
5. Import your GitHub repository
6. Vercel will auto-detect Next.js settings
7. Click "Deploy"

Your site will be live in under a minute!

### Option 2: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Run deployment:
```bash
vercel
```

3. Follow the prompts

### Custom Domain (Optional)

1. Go to your project settings on Vercel
2. Click "Domains"
3. Add your custom domain
4. Update your domain's DNS settings as instructed

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🎨 Technologies Used

- **Next.js 14**: React framework for production
- **TypeScript**: Type-safe code
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Smooth animations
- **Lucide React**: Beautiful icons

## 📱 Sections

1. **Navigation**: Smooth scrolling navigation with mobile menu
2. **Hero**: Eye-catching hero section with call-to-actions
3. **About**: Company information with feature highlights
4. **Services**: Showcase of construction services
5. **Projects**: Portfolio with category filtering
6. **Contact**: Contact form and social media links
7. **Footer**: Site links and company information

## 🔧 Environment Variables

Create a `.env.local` file for environment variables (if needed):

```env
# Add any API keys or environment variables here
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## 📄 License

This project is for Ernest Building and Construction Enterprise Nigeria LTD.

## 🤝 Support

For support or questions, contact:
- Email: info@ernestconstruction.ng
- Phone: +234 XXX XXX XXXX

---

Built with ❤️ for Ernest Building and Construction Enterprise Nigeria LTD

