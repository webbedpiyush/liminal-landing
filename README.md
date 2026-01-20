# Liminal Landing

Landing page with waitlist functionality built with Next.js and PostgreSQL.

## 🚀 Quick Deploy to Vercel

**The app is in the `liminal-landing` folder.**

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Add waitlist"
   git push
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project" → Import your repo
   - **Important**: Set root directory to `liminal-landing`
   - Click "Deploy"

3. **Add Database** (After deployment)
   - In Vercel dashboard → Your project → "Storage" tab
   - Click "Create Database" → "Postgres"
   - Click "Create" (free tier available)
   - Vercel automatically adds `DATABASE_URL`
   - Redeploy to activate database

**That's it!** Your waitlist is live.

## 💻 Local Development

```bash
cd liminal-landing
npm install

# Add DATABASE_URL to .env (get from Vercel or use Neon/Supabase)
echo 'DATABASE_URL="postgresql://..."' > .env

# Push schema to database
npx prisma db push

# Start dev server
npm run dev
```

## 📦 What's Included

- ✅ Waitlist form (name, email, phone)
- ✅ PostgreSQL database (Prisma)
- ✅ API endpoint (`/api/waitlist`)
- ✅ Rate limiting & spam protection
- ✅ Email validation
- ✅ Duplicate handling
- ✅ Ready for Vercel

## 🗄️ Database Options

- **Vercel Postgres** (recommended, integrated)
- **Neon** (free, serverless PostgreSQL)
- **Supabase** (free PostgreSQL)
- **Railway** (PostgreSQL)

Just add your `DATABASE_URL` to environment variables.

## 📖 Full Documentation

See [liminal-landing/WAITLIST_SETUP.md](./liminal-landing/WAITLIST_SETUP.md) for detailed setup instructions.

## 🛠️ Tech Stack

- Next.js 16 (App Router)
- Prisma + PostgreSQL
- Tailwind CSS
- Shadcn UI
- Framer Motion
- Three.js (React Three Fiber)
