import { useState } from 'react';
import { Send, Mail, MapPin, Check } from 'lucide-react';
import SectionHeader from '@/components/SectionHeader';

type FormState = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });
  const [sent, setSent] = useState<boolean>(false);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Client-side only — store recent messages in localStorage as a demo
    try {
      const prev = JSON.parse(localStorage.getItem('messages') || '[]');
      prev.push({ ...form, at: new Date().toISOString() });
      localStorage.setItem('messages', JSON.stringify(prev));
    } catch (err: any) {
      // ignore
    }
    setSent(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-24">
      <SectionHeader
        eyebrow="Contact"
        title="Let's build something great together."
        description="I'm always open to interesting projects, collaborations, or just a friendly chat."
      />

      <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8">
        <div className="p-8 rounded-2xl border border-border bg-bg-soft">
          <h3 className="font-medium">Get in touch</h3>
          <p className="mt-2 text-sm text-muted leading-relaxed">
            Drop me a line and I'll get back to you within a day. For urgent matters,
            email is best.
          </p>
          <div className="mt-6 space-y-4 text-sm">
            <div className="flex items-center gap-3">
              <span className="w-9 h-9 rounded-lg bg-bg grid place-items-center border border-border">
                <Mail className="w-4 h-4 text-accent" />
              </span>
              <a href="mailto:hi@alexcarter.dev" className="hover:text-fg text-muted">hi@alexcarter.dev</a>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-9 h-9 rounded-lg bg-bg grid place-items-center border border-border">
                <MapPin className="w-4 h-4 text-accent" />
              </span>
              <span className="text-muted">San Francisco, CA</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-8 rounded-2xl border border-border bg-bg-soft space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <label className="block">
              <span className="text-xs text-muted">Name</span>
              <input
                required
                name="name"
                value={form.name}
                onChange={handleChange}
                className="mt-1 w-full px-3 py-2.5 rounded-lg bg-bg border border-border focus:border-accent/60 outline-none text-sm"
                placeholder="Jane Doe"
              />
            </label>
            <label className="block">
              <span className="text-xs text-muted">Email</span>
              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="mt-1 w-full px-3 py-2.5 rounded-lg bg-bg border border-border focus:border-accent/60 outline-none text-sm"
                placeholder="jane@example.com"
              />
            </label>
          </div>
          <label className="block">
            <span className="text-xs text-muted">Message</span>
            <textarea
              required
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              className="mt-1 w-full px-3 py-2.5 rounded-lg bg-bg border border-border focus:border-accent/60 outline-none text-sm resize-none"
              placeholder="Tell me about your project..."
            />
          </label>
          <button
            type="submit"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-fg text-bg text-sm font-medium hover:opacity-90 transition"
          >
            {sent ? (
              <>
                <Check className="w-4 h-4" /> Sent!
              </>
            ) : (
              <>
                <Send className="w-4 h-4" /> Send message
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
