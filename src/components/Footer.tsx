import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} Alex Carter. Crafted with care.
        </p>
        <div className="flex items-center gap-4 text-muted">
          <a href="#" aria-label="GitHub" className="hover:text-fg transition"><Github className="w-5 h-5" /></a>
          <a href="#" aria-label="LinkedIn" className="hover:text-fg transition"><Linkedin className="w-5 h-5" /></a>
          <a href="#" aria-label="Twitter" className="hover:text-fg transition"><Twitter className="w-5 h-5" /></a>
          <a href="mailto:hi@alexcarter.dev" aria-label="Email" className="hover:text-fg transition"><Mail className="w-5 h-5" /></a>
        </div>
      </div>
    </footer>
  );
}
