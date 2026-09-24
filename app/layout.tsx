import type { Metadata } from 'next'
import { Syne, DM_Sans, Fira_Code } from 'next/font/google'
import { personal } from '@/lib/data'
import './globals.css'
import './workspace.css'

// Exposed as --font-*-src and aliased into Tailwind's font tokens in
// globals.css, so next/font and Tailwind don't fight over the names.
const syne = Syne({ subsets: ['latin'], variable: '--font-syne-src', weight: ['400', '500', '600', '700', '800'], display: 'swap' })
const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-src', weight: ['300', '400', '500'], display: 'swap' })
const firaCode = Fira_Code({ subsets: ['latin'], variable: '--font-mono-src', weight: ['300', '400', '500'], display: 'swap' })

const title = `${personal.name} — ${personal.role}`
const description =
  `${personal.role} in ${personal.locationShort}, seeking a first developer role. ` +
  'I build full-stack web apps with React, TypeScript and Supabase, and mobile apps ' +
  'with Expo and React Native. 4th year BSIT student, graduating 2027.'

/**
 * Absolute base for the OG/Twitter image URLs. Vercel injects the real
 * production domain at build time; NEXT_PUBLIC_SITE_URL overrides it if
 * the site moves to a custom domain.
 */
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:3000')

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    'Junior Web Developer',
    'React',
    'TypeScript',
    'Next.js',
    'Supabase',
    'React Native',
    'Expo',
    'BSIT',
    'Dumaguete',
    'Philippines',
  ],
  authors: [{ name: personal.name }],
  openGraph: {
    title,
    description,
    siteName: `${personal.name} — Portfolio`,
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: title }],
    type: 'website',
    locale: 'en_PH',
  },
  twitter: { card: 'summary_large_image', title, description, images: ['/og-image.png'] },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable} ${firaCode.variable}`}>
      {/* Every style in workspace.css is scoped under .wk. */}
      <body className="wk antialiased">{children}</body>
    </html>
  )
}
