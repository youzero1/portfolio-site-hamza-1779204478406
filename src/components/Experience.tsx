import SectionHeader from '@/components/SectionHeader';
import { experience } from '@/lib/data';

export default function Experience() {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 py-24">
      <SectionHeader
        eyebrow="Experience"
        title="Where I've worked."
        description="A timeline of the teams I've joined and the products I helped build along the way."
      />

      <ol className="relative border-l border-border ml-3">
        {experience.map((e, i) => (
          <li key={i} className="pl-8 pb-10 last:pb-0 relative">
            <span className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-gradient-to-br from-accent to-accent-2 ring-4 ring-bg" />
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-medium">
                {e.role}{' '}
                <span className="text-accent">@ {e.company}</span>
              </h3>
              <span className="text-xs text-muted">{e.period}</span>
            </div>
            <p className="mt-2 text-sm text-muted leading-relaxed max-w-2xl">{e.description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
