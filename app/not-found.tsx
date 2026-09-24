import Link from 'next/link'
import { personal } from '@/lib/data'

export default function NotFound() {
  return (
    <main className="flex min-h-[100dvh] flex-col items-center justify-center px-5 text-center">
      <p className="wk-meta mb-3 flex items-center gap-2">
        <span aria-hidden="true" className="h-2.5 w-[3px] rounded-full bg-[var(--amber)]" />
        404
      </p>

      <h1 className="wk-display mb-3 text-[clamp(1.5rem,5vw,2.25rem)] font-extrabold">Nothing here.</h1>

      <p className="mb-7 max-w-sm text-[13px] leading-relaxed text-[var(--muted)]">
        That page isn&apos;t part of this site. Everything {personal.name.split(' ')[0]} has built is on the board.
      </p>

      <Link
        href="/"
        className="inline-flex min-h-11 items-center gap-2 rounded-[var(--wk-radius-sm)] bg-[var(--purple)] px-4 text-[13px] font-semibold text-white transition-colors hover:bg-[#6D28D9]"
      >
        Back to the board
      </Link>
    </main>
  )
}
