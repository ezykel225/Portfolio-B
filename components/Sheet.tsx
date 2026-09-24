'use client'
import { useCallback, useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'
import { CloseIcon } from './icons'

interface SheetProps {
  open: boolean
  onClose: () => void
  /** id of the heading that names this sheet, for aria-labelledby. */
  labelledBy: string
  title: string
  /** Small uppercase line above the title. */
  eyebrow?: string
  /** Accent colour for the eyebrow rule — always a brand token. */
  accent?: string
  /** Tailwind width class for the desktop drawer. */
  widthClass?: string
  children: React.ReactNode
}

/**
 * The interaction this site is built around: a drawer that opens
 * over the dashboard instead of navigating away from it. It is a
 * bottom sheet on phones and a right-hand drawer from 640px up.
 *
 * Built on the native <dialog> with showModal() so focus trapping,
 * Esc-to-close and inertness of the page behind it come from the
 * platform rather than from hand-written key handlers.
 */
export function Sheet({
  open,
  onClose,
  labelledBy,
  title,
  eyebrow,
  accent = 'var(--purple-l)',
  widthClass = 'sm:max-w-xl',
  children,
}: SheetProps) {
  const ref = useRef<HTMLDialogElement>(null)
  const backdropRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    if (open && !dialog.open) dialog.showModal()
    if (!open && dialog.open) dialog.close()
  }, [open])

  // showModal() makes the page inert but does not stop it scrolling.
  useEffect(() => {
    if (!open) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [open])

  // Fires for Esc and for the platform's own close, so React state
  // never drifts out of sync with the element.
  const handleClose = useCallback(() => onClose(), [onClose])

  return (
    <dialog
      ref={ref}
      onClose={handleClose}
      aria-labelledby={labelledBy}
      className="wk-sheet m-0 h-full max-h-none w-full max-w-none bg-transparent p-0 text-[var(--text)]"
    >
      <div
        ref={backdropRef}
        // A click that lands on this filler and not on the panel is a
        // click outside the sheet.
        onClick={(event) => {
          if (event.target === backdropRef.current) onClose()
        }}
        className="flex h-full w-full items-end justify-center sm:items-stretch sm:justify-end"
      >
        <div
          className={cn(
            'wk-sheet-panel flex max-h-[92dvh] w-full flex-col border border-[var(--wk-line)] bg-[var(--wk-card)]',
            'rounded-t-[18px] sm:max-h-none sm:h-full sm:rounded-none sm:border-y-0 sm:border-r-0',
            widthClass
          )}
        >
          {/* Grab handle. Phone-only affordance for the bottom sheet. */}
          <div className="flex justify-center pt-2.5 sm:hidden" aria-hidden="true">
            <span className="h-1 w-9 rounded-full bg-[var(--wk-line)]" />
          </div>

          <header className="flex items-start justify-between gap-4 border-b border-[var(--wk-line)] px-5 py-4 sm:px-7 sm:py-5">
            <div className="min-w-0">
              {eyebrow ? (
                <p className="wk-meta mb-1.5 flex items-center gap-2">
                  <span className="h-2.5 w-[3px] rounded-full" style={{ background: accent }} />
                  {eyebrow}
                </p>
              ) : null}
              <h2 id={labelledBy} className="wk-display truncate text-xl font-bold sm:text-2xl">
                {title}
              </h2>
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label={`Close ${title}`}
              className="wk-interactive -mr-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--wk-radius-sm)] border border-[var(--wk-line)] text-[var(--muted)] hover:text-[var(--text)]"
            >
              <CloseIcon className="h-[18px] w-[18px]" />
            </button>
          </header>

          <div className="wk-scroll flex-1 px-5 py-5 sm:px-7 sm:py-6">{children}</div>
        </div>
      </div>
    </dialog>
  )
}
