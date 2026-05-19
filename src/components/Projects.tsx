import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import clsx from 'clsx';
import SectionHeader from '@/components/SectionHeader';
import { projects } from '@/lib/data';

const allTags = ['All', ...Array.from(new Set(projects.flatMap((p) => p.tags)))];

export default function Projects() {
  const [filter, setFilter] = useState<string>('All');

  const filtered = filter === 'All'
    ? projects
    : projects.filter((p) => p.tags.includes(filter));

  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-24">
      <SectionHeader
        eyebrow="Selected Work"
        title="Projects I'm proud of."
        description="A collection of products, tools, and experiments I've built. Each one taught me something new."
      />

      <div className="flex flex-wrap gap-2 mb-8">
        {allTags.map((t) => (
          <button
            key={t}
            onClick={() => setFilter(t)}
            className={clsx(
              'px-3 py-1.5 text-xs rounded-full border transition-colors',
              filter === t
                ? 'bg-fg text-bg border-fg'
                : 'bg-bg-soft text-muted border-border hover:text-fg hover:border-accent/40'
            )}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {filtered.map((p) => (
          <article
            key={p.id}
            className="group relative overflow-hidden rounded-2xl border border-border bg-bg-soft hover:border-accent/40 transition-colors"
          >
            <div className="aspect-[16/10] overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold tracking-tight">{p.title}</h3>
                <div className="flex items-center gap-2 text-muted">
                  {p.repo && (
                    <a href={p.repo} aria-label="Repository" className="hover:text-fg transition">
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {p.link && (
                    <a href={p.link} aria-label="Live" className="hover:text-fg transition">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
              <p className="mt-2 text-sm text-muted leading-relaxed">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 text-[11px] rounded-md bg-bg border border-border text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
