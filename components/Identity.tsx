import { personal } from '@/lib/data'
import { monogram } from '@/lib/workspace'
import { cn } from '@/lib/utils'

/**
 * The monogram stands in for a profile photograph, because the
 * repository does not contain one and a stock face would be a
 * fabrication. It is built from the name, so it cannot go stale.
 */
export function Monogram({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        'wk-display grid shrink-0 place-items-center rounded-[var(--wk-radius-sm)] font-extrabold',
        'border border-[color-mix(in_srgb,var(--purple-l)_35%,var(--wk-line))] bg-[var(--wk-tint)] text-[var(--purple-l)]',
        className
      )}
    >
      {monogram}
    </span>
  )
}

/** The green "open to work" dot, stated only because data.ts says so. */
export function AvailabilityDot() {
  if (!personal.available) return null
  return (
    <span className="relative flex h-1.5 w-1.5 shrink-0" aria-hidden="true">
      <span className="animate-pulse-dot absolute inline-flex h-full w-full rounded-full bg-[var(--green)]" />
    </span>
  )
}

export function AvailabilityChip({ className }: { className?: string }) {
  if (!personal.available) return null
  return (
    <p
      className={cn(
        'flex items-center gap-2 rounded-full border border-[color-mix(in_srgb,var(--green)_28%,var(--wk-line))]',
        'bg-[rgb(34_197_94/8%)] px-2.5 py-1 font-mono text-[10.5px] tracking-wide text-[var(--green)]',
        className
      )}
    >
      <AvailabilityDot />
      {personal.seeking}
    </p>
  )
}
