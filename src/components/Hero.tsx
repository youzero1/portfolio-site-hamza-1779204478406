import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-24">
      <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-[520px] h-[520px] rounded-full bg-accent-2/10 blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-[1fr_auto] gap-12 items-center">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-bg-soft text-xs text-muted mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for new opportunities
          </div>
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05]">
            Building delightful{' '}
            <span className="gradient-text">digital experiences</span>{' '}
            on the web.
          </h1>
          <p className="mt-6 text-lg text-muted max-w-xl leading-relaxed">
            I'm Alex — a product engineer with 7+ years of experience designing and shipping
            elegant, performant interfaces. Currently crafting tools at Stripe.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-fg text-bg font-medium hover:opacity-90 transition"
            >
              View my work
              <ArrowDown className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-border bg-bg-soft hover:bg-bg-soft/60 transition"
            >
              Get in touch
            </a>
          </div>

          <div className="mt-10 flex items-center gap-5 text-muted">
            <a href="#" className="hover:text-fg transition" aria-label="GitHub"><Github className="w-5 h-5" /></a>
            <a href="#" className="hover:text-fg transition" aria-label="LinkedIn"><Linkedin className="w-5 h-5" /></a>
            <a href="mailto:hi@alexcarter.dev" className="hover:text-fg transition" aria-label="Email"><Mail className="w-5 h-5" /></a>
          </div>
        </div>

        <div className="relative hidden md:block animate-float">
          <div className="relative w-72 h-72 rounded-3xl overflow-hidden glow">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-accent-2/30" />
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=800&q=80&auto=format&fit=crop"
              alt="Alex Carter portrait"
              className="w-full h-full object-cover mix-blend-luminosity opacity-90"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 px-4 py-3 rounded-xl bg-bg-soft border border-border">
            <p className="text-xs text-muted">Based in</p>
            <p className="text-sm font-medium">San Francisco, CA</p>
          </div>
        </div>
      </div>
    </section>
  );
}
