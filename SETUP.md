# Waitlist Setup - Quick Guide

## What You Need to Do

### 1. Install Dependencies
```bash
npm install
```

### 2. Deploy to Vercel
```bash
# Push to GitHub first
git add .
git commit -m "Add waitlist"
git push

# Then:
# 1. Go to vercel.com
# 2. Import your repo
# 3. Click Deploy
```

### 3. Add Database in Vercel

**After deployment completes:**

1. Go to your Vercel project
2. Click **"Storage"** tab
3. Click **"Create Database"** → **"Postgres"** → **"Create"**
4. Wait ~30 seconds for it to be ready

### 4. Create Database Table

1. In Vercel dashboard → Storage → Your database → **"Query"** tab
2. Copy this SQL:

```sql
CREATE TABLE IF NOT EXISTS waitlist_entries (
  id BIGSERIAL PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  name TEXT,
  phone TEXT,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_waitlist_email ON waitlist_entries(email);
```

3. Paste and click **"Run"**

### Done! 🎉

Your waitlist is now live. Test it by:
1. Going to your deployed site
2. Scrolling to "Reserve Your Pair"
3. Filling in the form
4. Clicking "Join the waitlist"

View entries in Vercel → Storage → Your database → Data tab.

---

## For Local Development (Optional)

```bash
# Get DATABASE_URL from Vercel:
# Storage → Your database → .env.local tab

echo 'DATABASE_URL="paste-your-url-here"' > .env

# Run the same SQL from step 4 above in your database

npm run dev
```

Open http://localhost:5173
