type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className="max-w-2xl mb-12">
      <p className="text-xs uppercase tracking-[0.2em] text-accent mb-3">{eyebrow}</p>
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">{title}</h2>
      {description && (
        <p className="mt-4 text-muted leading-relaxed">{description}</p>
      )}
    </div>
  );
}
