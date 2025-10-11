# 📧 Contact Form Setup Guide

## Current Status
The contact form is configured but needs an access key to work.

## How to Activate the Contact Form (FREE - 2 minutes)

### Option 1: Web3Forms (Recommended - No Signup Required!)

1. **Get your FREE access key:**
   - Go to: https://web3forms.com
   - Enter your email: **info@ernestconstruction.ng** (or any email you want to receive messages)
   - Click "Get Access Key"
   - Copy the access key they send to your email

2. **Add the key to your website:**
   - Open: `components/Contact.tsx`
   - Find line: `<input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />`
   - Replace `YOUR_ACCESS_KEY_HERE` with your actual key

3. **Done!** Messages will now be sent to your email automatically.

### Option 2: Formspree (Alternative)

1. Go to: https://formspree.io
2. Sign up for FREE
3. Create a new form
4. Copy the form endpoint
5. In `components/Contact.tsx`, change:
   ```tsx
   action="https://api.web3forms.com/submit"
   ```
   To:
   ```tsx
   action="YOUR_FORMSPREE_ENDPOINT"
   ```

### Option 3: EmailJS (More Features)

1. Go to: https://www.emailjs.com
2. Sign up for FREE (200 emails/month)
3. Follow their React integration guide
4. More complex but offers more customization

## What Happens When Someone Submits?

After setup:
1. ✅ User fills out the form
2. ✅ Clicks "Send Message"
3. ✅ Form data is sent to the service
4. ✅ **You receive an email** with:
   - Customer's name
   - Customer's email
   - Customer's phone
   - Their message
5. ✅ User sees a success message

## Free Tier Limits

### Web3Forms (Recommended):
- ✅ Unlimited forms
- ✅ 250 submissions/month FREE
- ✅ No signup required
- ✅ Spam protection included
- ✅ Email notifications

### Formspree:
- ✅ 50 submissions/month FREE
- ✅ Requires signup
- ✅ Spam protection

### EmailJS:
- ✅ 200 emails/month FREE
- ✅ More customization
- ✅ Requires more setup

## Current Form Configuration

The form will send:
- ✉️ **To:** Your email (set when you get the access key)
- 📋 **Subject:** "New Contact from Ernest Construction Website"
- 📝 **Contains:** Name, Email, Phone, Message
- 🛡️ **Spam Protection:** Included

## Testing After Setup

1. Visit your website
2. Fill out the contact form
3. Click "Send Message"
4. Check your email inbox
5. You should receive the message within seconds!

## Need Help?

If the form doesn't work:
1. Check your access key is correct
2. Make sure you're using the email you registered
3. Check spam folder for test emails
4. Verify form action URL is correct

---

**Recommended:** Use Web3Forms - it's the easiest and most reliable free option!

Get started: https://web3forms.com

