import SectionHeader from '@/components/SectionHeader';
import { skills } from '@/lib/data';

export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-24">
      <SectionHeader
        eyebrow="Skills"
        title="Tools I work with daily."
        description="A snapshot of the technologies and disciplines I use to ship great products."
      />

      <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
        {skills.map((s) => (
          <div key={s.name}>
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium">{s.name}</span>
              <span className="text-xs text-muted">{s.level}%</span>
            </div>
            <div className="h-1.5 rounded-full bg-bg-soft overflow-hidden border border-border">
              <div
                className="h-full bg-gradient-to-r from-accent to-accent-2"
                style={{ width: `${s.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
