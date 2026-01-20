# Deployment Checklist

Your waitlist is ready to deploy! Here's what's set up:

## ✅ What's Ready

- [x] Waitlist form (name, email, phone)
- [x] Vercel serverless API (`/api/waitlist`)
- [x] PostgreSQL database schema
- [x] Rate limiting & spam protection
- [x] Email validation
- [x] Environment variables template

## 🚀 Deploy to Vercel (5 minutes)

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Push to GitHub
```bash
git add .
git commit -m "Add waitlist feature"
git push
```

### Step 3: Deploy to Vercel
1. Go to https://vercel.com
2. Click **"New Project"**
3. Import your GitHub repository
4. Click **"Deploy"** (no configuration needed)
5. Wait for deployment to complete

### Step 4: Add Database
1. Go to your Vercel project dashboard
2. Click **"Storage"** tab
3. Click **"Create Database"**
4. Select **"Postgres"**
5. Click **"Create"**
6. Wait for database to provision (~30 seconds)

### Step 5: Initialize Database
1. In Vercel dashboard → Storage → Your database
2. Click **"Query"** tab
3. Copy the entire content from `db/init.sql`
4. Paste into the query editor
5. Click **"Run"**

**Done!** Your waitlist is live. 🎉

## 🧪 Test Your Waitlist

Visit your deployment URL and:
1. Scroll to the "Reserve Your Pair" section
2. Fill in the form (only email is required)
3. Click "Join the waitlist"
4. You should see "Thanks for joining. We'll be in touch soon."

## 💻 Local Development

```bash
# Get your DATABASE_URL from Vercel:
# Project → Storage → Your Database → .env.local tab
echo 'DATABASE_URL="your-database-url-here"' > .env

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open http://localhost:5173

## 🗄️ View Database Entries

### In Vercel Dashboard:
1. Project → Storage → Your Database
2. Click "Data" tab
3. View `waitlist_entries` table

### Using SQL Query:
```sql
SELECT * FROM waitlist_entries ORDER BY created_at DESC;
```

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
- Make sure you ran the `db/init.sql` script in your database

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

1. Check Vercel deployment logs (Vercel dashboard → Deployments → Click deployment → Functions tab)
2. Check browser console for errors
3. Verify environment variables are set (`DATABASE_URL`)
4. Make sure database table was created (run `db/init.sql`)

---

**Framework**: Vite + React
**Database**: PostgreSQL (Neon serverless adapter)
**API**: Vercel Serverless Functions
**Deployment**: Vercel
