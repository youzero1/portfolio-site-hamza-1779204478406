import SectionHeader from '@/components/SectionHeader';
import { Code2, Palette, Zap, Users } from 'lucide-react';

const pillars = [
  {
    icon: Code2,
    title: 'Engineering',
    desc: 'Type-safe, well-tested code that scales with teams and product complexity.',
  },
  {
    icon: Palette,
    title: 'Design',
    desc: 'A keen eye for typography, motion, and details that make products feel polished.',
  },
  {
    icon: Zap,
    title: 'Performance',
    desc: 'Obsessed with snappy interactions, sub-100ms responses, and lean bundles.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    desc: 'Comfortable bridging design, product, and engineering to ship great work.',
  },
];

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-24">
      <SectionHeader
        eyebrow="About"
        title="A product engineer at the intersection of design and code."
        description="I spent the last seven years building products at high-velocity startups, from tiny seed-stage teams to public companies. I care deeply about craft and the experience of using software."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {pillars.map((p) => {
          const Icon = p.icon;
          return (
            <div
              key={p.title}
              className="group p-6 rounded-2xl border border-border bg-bg-soft hover:border-accent/40 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-bg grid place-items-center border border-border group-hover:border-accent/40 transition-colors">
                <Icon className="w-5 h-5 text-accent" />
              </div>
              <h3 className="mt-4 font-medium">{p.title}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">{p.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
