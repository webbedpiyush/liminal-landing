# Liminal Landing - Waitlist

Landing page with PostgreSQL waitlist. Plug & play for Vercel.

## 🚀 Deploy to Vercel (3 steps)

### 1. Push to GitHub
```bash
git add .
git commit -m "Add waitlist"
git push
```

### 2. Deploy to Vercel
- Go to [vercel.com](https://vercel.com)
- Click "New Project" → Import your repo
- Click "Deploy"

### 3. Add Database
- In Vercel dashboard → Your project → "Storage" tab
- Click "Create Database" → "Postgres" → "Create"
- Go to your database → "Query" tab
- Copy & paste the SQL from `db/init.sql` → Run query
- Done!

Your waitlist is live 🎉

## 💻 Local Development

```bash
npm install

# Add DATABASE_URL to .env
echo 'DATABASE_URL="postgresql://..."' > .env

# Run dev server
npm run dev
```

Get `DATABASE_URL` from:
- Vercel Postgres (in Vercel dashboard → Storage)
- [Neon](https://neon.tech) (free)
- [Supabase](https://supabase.com) (free)

Then run the SQL from `db/init.sql` in your database.

## 📦 What's Included

- ✅ Waitlist form (name, email, phone)
- ✅ PostgreSQL database
- ✅ Vercel API function (`/api/waitlist`)
- ✅ Rate limiting (8 req/min per IP)
- ✅ Spam protection (honeypot)
- ✅ Email validation

## 🗄️ Database Schema

```sql
waitlist_entries
├── id (bigserial)
├── email (text, unique, required)
├── name (text, optional)
├── phone (text, optional)
├── created_at (timestamp)
└── updated_at (timestamp)
```

## 🛠️ Tech Stack

- Vite + React + TypeScript
- Vercel Serverless Functions
- PostgreSQL (Neon adapter)
- Tailwind CSS + Shadcn UI
- Framer Motion + Three.js
