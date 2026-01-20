# Deployment Checklist

Your waitlist is ready to deploy! Here's what's set up:

## ✅ What's Ready

- [x] PostgreSQL database schema (Prisma)
- [x] Waitlist API endpoint (`/api/waitlist`)
- [x] Form component with validation
- [x] Rate limiting & spam protection
- [x] Database migrations
- [x] Environment variables template

## 🚀 Deploy to Vercel (5 minutes)

### Step 1: Push to GitHub
```bash
git add .
git commit -m "Add waitlist feature"
git push
```

### Step 2: Import to Vercel
1. Go to https://vercel.com
2. Click **"New Project"**
3. Import your GitHub repository
4. **IMPORTANT**: Click "Edit" next to "Root Directory"
5. Select `liminal-landing` folder
6. Click "Continue"
7. Click "Deploy"

### Step 3: Add Database (After deployment completes)
1. Go to your Vercel project dashboard
2. Click **"Storage"** tab
3. Click **"Create Database"**
4. Select **"Postgres"**
5. Click **"Create"**
6. Wait for database to provision (~30 seconds)
7. Vercel automatically adds `DATABASE_URL` to your environment

### Step 4: Redeploy
1. Go to **"Deployments"** tab
2. Click the three dots (•••) on the latest deployment
3. Click **"Redeploy"**
4. Click **"Redeploy"** in the confirmation modal

**Done!** Your waitlist is live. 🎉

## 🧪 Test Your Waitlist

Visit your deployment URL and:
1. Scroll to the "Reserve Your Pair" section
2. Fill in the form (only email is required)
3. Click "Join the waitlist"
4. You should see "Thanks for joining. We'll be in touch soon."

## 💻 Local Development

```bash
cd liminal-landing

# Get your DATABASE_URL from Vercel:
# Project → Storage → Your Database → .env.local tab
echo 'DATABASE_URL="your-database-url-here"' > .env

# Install and run
npm install
npx prisma db push
npm run dev
```

Open http://localhost:3000

## 🗄️ View Database Entries

### In Vercel Dashboard:
1. Project → Storage → Your Database
2. Click "Data" tab
3. View `waitlist_entries` table

### Using Prisma Studio (Local):
```bash
cd liminal-landing
npx prisma studio
```

Opens at http://localhost:5555

## 🔧 Troubleshooting

### "Service unavailable" error
- Make sure `DATABASE_URL` is set in Vercel environment variables
- Redeploy after adding the database

### Form not submitting
- Check browser console for errors
- Verify API route exists at `/api/waitlist`
- Check Vercel function logs

### Database connection error
- Verify `DATABASE_URL` format: `postgresql://user:pass@host:5432/db`
- Check if database is running (Vercel Postgres should always be up)
- Try regenerating Prisma client: `npx prisma generate`

## 📊 Database Schema

```
waitlist_entries
├── id (BigInt, auto-increment)
├── email (String, unique, required)
├── name (String, optional)
├── phone (String, optional)
├── createdAt (DateTime, auto)
└── updatedAt (DateTime, auto)
```

## 🔐 Security Features

- ✅ Rate limiting (8 requests/minute per IP)
- ✅ Email validation (Zod)
- ✅ Honeypot spam protection
- ✅ Same-origin request validation
- ✅ SQL injection protection (Prisma)
- ✅ XSS protection (Next.js)

## 🆘 Need Help?

1. Check [WAITLIST_SETUP.md](./liminal-landing/WAITLIST_SETUP.md)
2. Check Vercel deployment logs
3. Check browser console for errors
4. Verify environment variables are set

---

**Current Location**: All code is in `liminal-landing/` folder
**Framework**: Next.js 16 (App Router)
**Database**: PostgreSQL (via Prisma + Neon adapter)
**Deployment**: Vercel
