import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './social-icons';

export function Footer() {
  return (
    <footer className="mt-32 border-t py-12" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="text-sm font-semibold text-white/90">
            <span style={{ color: '#e2b83d' }}>F</span>rank Fiorante
          </p>
          <p className="text-xs mt-1" style={{ color: '#8a7a68' }}>
            Senior Software Engineer · Chicago, IL
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/frankfiorante"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg transition-colors"
            style={{ color: '#8a7a68' }}
            aria-label="GitHub"
          >
            <GithubIcon width={18} height={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/frankfiorante/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg transition-colors"
            style={{ color: '#8a7a68' }}
            aria-label="LinkedIn"
          >
            <LinkedinIcon width={18} height={18} />
          </a>
          <a
            href="mailto:develop@frankfiorante.com"
            className="p-2 rounded-lg transition-colors"
            style={{ color: '#8a7a68' }}
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>

        <p className="text-xs" style={{ color: '#8a7a68' }}>
          © {new Date().getFullYear()} Frank Fiorante
        </p>
      </div>
    </footer>
  );
}
