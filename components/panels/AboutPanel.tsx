import { personal, education } from '@/lib/data'
import { aboutFacts } from '@/lib/workspace'

/** Compact card body — four derived lines, no biography. */
export function AboutGlance() {
  return (
    <dl className="flex flex-col gap-2">
      {aboutFacts.map((fact) => (
        <div key={fact.label}>
          <dt className="font-mono text-[9.5px] tracking-wider text-[var(--muted2)] uppercase">{fact.label}</dt>
          <dd className="mt-0.5 text-[12.5px] leading-snug text-[var(--muted)]">{fact.value}</dd>
        </div>
      ))}
    </dl>
  )
}

/** Sheet body — the real biography, stated once. */
export function AboutFull() {
  return (
    <div className="flex flex-col gap-6">
      {personal.bio.map((paragraph) => (
        <p key={paragraph.slice(0, 32)} className="text-[13px] leading-relaxed text-[var(--muted)]">
          {paragraph}
        </p>
      ))}

      <section>
        <h3 className="wk-meta mb-2.5 flex items-center gap-2">
          <span aria-hidden="true" className="h-2.5 w-[3px] rounded-full bg-[var(--green)]" />
          Education
        </h3>
        {education.map((item) => (
          <div key={item.id} className="rounded-[var(--wk-radius-sm)] border border-[var(--wk-line)] p-3.5">
            <p className="text-[13px] font-semibold">{item.degree}</p>
            <p className="mt-0.5 text-[12.5px] text-[var(--muted)]">{item.school}</p>
            <p className="mt-1.5 font-mono text-[10.5px] tracking-wide text-[var(--muted2)]">{item.date}</p>
            {item.desc ? (
              <p className="mt-2 text-[12.5px] leading-relaxed text-[var(--muted)]">{item.desc}</p>
            ) : null}
          </div>
        ))}
      </section>

      <section>
        <h3 className="wk-meta mb-2.5 flex items-center gap-2">
          <span aria-hidden="true" className="h-2.5 w-[3px] rounded-full bg-[var(--green)]" />
          What I like working on
        </h3>
        <ul className="flex flex-col gap-1.5">
          {personal.loves.map((item) => (
            <li key={item} className="flex gap-2.5 text-[12.5px] leading-snug text-[var(--muted)]">
              <span aria-hidden="true" className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-[var(--green)]" />
              {item}
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
