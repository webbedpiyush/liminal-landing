import type { VercelRequest, VercelResponse } from '@vercel/node'
import { neon } from '@neondatabase/serverless'

const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:4173',
  process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : '',
]

interface WaitlistBody {
  email: string
  name?: string
  phone?: string
  website?: string
}

const rateLimitStore = new Map<string, { count: number; resetAt: number }>()
const RATE_LIMIT_WINDOW_MS = 60_000
const RATE_LIMIT_MAX = 8

function getClientIp(req: VercelRequest): string {
  return (
    (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim() ||
    (req.headers['x-real-ip'] as string) ||
    'unknown'
  )
}

function isRateLimited(key: string): boolean {
  const now = Date.now()
  const entry = rateLimitStore.get(key)
  
  if (!entry || entry.resetAt < now) {
    rateLimitStore.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS })
    return false
  }

  entry.count += 1
  if (entry.count > RATE_LIMIT_MAX) return true
  rateLimitStore.set(key, entry)
  return false
}

function normalizePhone(value: string | undefined): string | null {
  if (!value) return null
  const normalized = value.replace(/[^\d+]/g, '').slice(0, 20)
  return normalized.length ? normalized : null
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email) && email.length <= 320
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // CORS
  const origin = req.headers.origin
  if (origin && allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin)
  }
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  // Rate limiting
  const ip = getClientIp(req)
  if (isRateLimited(ip)) {
    return res.status(429).json({ error: 'Too many requests' })
  }

  // Parse and validate body
  const body = req.body as WaitlistBody
  
  if (!body || !body.email) {
    return res.status(400).json({ error: 'Email is required' })
  }

  const email = body.email.trim().toLowerCase()
  const name = body.name?.trim() || null
  const phone = normalizePhone(body.phone)
  const website = body.website?.trim()

  // Honeypot spam protection
  if (website) {
    return res.status(200).json({ ok: true })
  }

  if (!isValidEmail(email)) {
    return res.status(400).json({ error: 'Invalid email address' })
  }

  // Database
  const databaseUrl = process.env.DATABASE_URL
  if (!databaseUrl) {
    return res.status(503).json({ error: 'Service unavailable' })
  }

  try {
    const sql = neon(databaseUrl)
    
    // Upsert waitlist entry
    await sql`
      INSERT INTO waitlist_entries (email, name, phone, created_at, updated_at)
      VALUES (${email}, ${name}, ${phone}, NOW(), NOW())
      ON CONFLICT (email)
      DO UPDATE SET
        name = COALESCE(${name}, waitlist_entries.name),
        phone = COALESCE(${phone}, waitlist_entries.phone),
        updated_at = NOW()
    `

    return res.status(200).json({ ok: true })
  } catch (error) {
    console.error('Database error:', error)
    return res.status(503).json({ error: 'Service unavailable' })
  }
}
