import { cn } from '@/lib/utils'
import { ChevronIcon } from './icons'

interface CardProps {
  /** Small uppercase label; the accent rule sits to its left. */
  label: string
  accent?: string
  className?: string
  bodyClassName?: string
  children: React.ReactNode
  /** When set the whole card becomes one button that opens a sheet. */
  onOpen?: () => void
  openLabel?: string
}

/**
 * The dashboard's unit of information.
 *
 * The site has no sections — it has cards, each labelled by a short
 * caps line with a coloured rule, and each optionally expandable
 * into a sheet.
 */
export function Card({
  label,
  accent = 'var(--purple-l)',
  className,
  bodyClassName,
  children,
  onOpen,
  openLabel,
}: CardProps) {
  const header = (
    <div className="flex items-center justify-between gap-3 px-4 pt-3.5 pb-2.5">
      <p className="wk-meta flex items-center gap-2">
        <span className="h-2.5 w-[3px] rounded-full" style={{ background: accent }} />
        {label}
      </p>
      {onOpen ? (
        <span
          aria-hidden="true"
          className="flex items-center gap-1 font-mono text-[10px] tracking-wider text-[var(--muted2)] transition-colors group-hover:text-[var(--purple-l)]"
        >
          OPEN
          <ChevronIcon className="h-3 w-3" />
        </span>
      ) : null}
    </div>
  )

  const body = <div className={cn('px-4 pb-4', bodyClassName)}>{children}</div>

  if (!onOpen) {
    return (
      <section className={cn('wk-card flex flex-col', className)}>
        {header}
        {body}
      </section>
    )
  }

  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={openLabel ?? `Open ${label}`}
      className={cn(
        'wk-card wk-interactive group flex flex-col text-left',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--purple-l)]',
        className
      )}
    >
      {header}
      {body}
    </button>
  )
}
