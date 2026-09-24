/**
 * Inline SVG icons.
 *
 * Kept as components rather than an icon dependency: the site needs
 * exactly these, and a package would add weight for no benefit. All
 * are decorative — the surrounding link or button carries the
 * accessible name — so they are hidden from assistive technology.
 */

type IconProps = { className?: string }

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
} as const

function Glyph({ className = 'h-4 w-4', children }: IconProps & { children: React.ReactNode }) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...stroke} aria-hidden="true" focusable="false">
      {children}
    </svg>
  )
}

export function DashboardIcon(props: IconProps) {
  return (
    <Glyph {...props}>
      <rect x="3" y="3" width="7.5" height="8.5" rx="1.6" />
      <rect x="13.5" y="3" width="7.5" height="5" rx="1.6" />
      <rect x="3" y="14.5" width="7.5" height="6.5" rx="1.6" />
      <rect x="13.5" y="11" width="7.5" height="10" rx="1.6" />
    </Glyph>
  )
}

export function CubeIcon(props: IconProps) {
  return (
    <Glyph {...props}>
      <path d="M12 2.6 20.5 7v10L12 21.4 3.5 17V7Z" />
      <path d="M3.5 7 12 11.5 20.5 7" />
      <path d="M12 11.5v9.9" />
    </Glyph>
  )
}

export function PersonIcon(props: IconProps) {
  return (
    <Glyph {...props}>
      <circle cx="12" cy="8" r="3.6" />
      <path d="M4.8 20.2a7.2 7.2 0 0 1 14.4 0" />
    </Glyph>
  )
}

export function LayersIcon(props: IconProps) {
  return (
    <Glyph {...props}>
      <path d="m12 3 8.5 4.4L12 11.8 3.5 7.4Z" />
      <path d="m3.5 12.2 8.5 4.4 8.5-4.4" />
      <path d="m3.5 16.9 8.5 4.4 8.5-4.4" />
    </Glyph>
  )
}

export function RouteIcon(props: IconProps) {
  return (
    <Glyph {...props}>
      <circle cx="6" cy="5.5" r="2.5" />
      <circle cx="18" cy="18.5" r="2.5" />
      <path d="M6 8v4a4 4 0 0 0 4 4h5.5" />
    </Glyph>
  )
}

export function SendIcon(props: IconProps) {
  return (
    <Glyph {...props}>
      <path d="M21 3 10.5 13.5" />
      <path d="M21 3 14.3 21l-3.8-7.5L3 9.7Z" />
    </Glyph>
  )
}

export function ArrowOutIcon(props: IconProps) {
  return (
    <Glyph {...props}>
      <path d="M8 16 16 8" />
      <path d="M9.5 8H16v6.5" />
    </Glyph>
  )
}

export function CloseIcon(props: IconProps) {
  return (
    <Glyph {...props}>
      <path d="M6 6 18 18" />
      <path d="M18 6 6 18" />
    </Glyph>
  )
}

export function ChevronIcon(props: IconProps) {
  return (
    <Glyph {...props}>
      <path d="m9 5 7 7-7 7" />
    </Glyph>
  )
}

export function DownloadIcon(props: IconProps) {
  return (
    <Glyph {...props}>
      <path d="M12 3.5v11" />
      <path d="m7.5 10.5 4.5 4 4.5-4" />
      <path d="M4.5 19.5h15" />
    </Glyph>
  )
}

export function MenuIcon(props: IconProps) {
  return (
    <Glyph {...props}>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h11" />
    </Glyph>
  )
}

// ---- Brand marks -------------------------------------------------

export function GitHubIcon({ className = 'h-4 w-4' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

export function LinkedInIcon({ className = 'h-4 w-4' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  )
}

export function MailIcon({ className = 'h-4 w-4' }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m2 7 10 6 10-6" />
    </svg>
  )
}

export function PinIcon({ className = 'h-4 w-4' }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}
