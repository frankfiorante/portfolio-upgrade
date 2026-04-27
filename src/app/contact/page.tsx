import type { Metadata } from 'next';
import { Mail, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/social-icons';
import { FadeIn } from '@/components/fade-in';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Frank Fiorante.',
};

export default function Contact() {
  return (
    <div className="pt-24 max-w-6xl mx-auto px-6 pb-24">
      <div className="pt-12 pb-10 max-w-xl">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#6366f1' }}>
            Contact
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white/90 mb-4">Let&apos;s talk.</h1>
          <p className="text-lg leading-relaxed" style={{ color: '#8888aa' }}>
            Reach out about collaborations, questions, or just to say hello.
          </p>
        </FadeIn>
      </div>

      <div className="grid md:grid-cols-5 gap-8">
        {/* Form */}
        <FadeIn delay={0.1} className="md:col-span-3">
          <div
            className="rounded-2xl p-8"
            style={{
              background: 'rgba(15,15,26,0.8)',
              border: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            <ContactForm />
          </div>
        </FadeIn>

        {/* Sidebar */}
        <div className="md:col-span-2 flex flex-col gap-4">
          <FadeIn delay={0.15}>
            <div
              className="rounded-2xl p-6"
              style={{
                background: 'rgba(15,15,26,0.8)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              <h3 className="font-semibold text-white/90 mb-4">Direct Contact</h3>
              <div className="flex flex-col gap-4">
                {[
                  {
                    icon: Mail,
                    label: 'Email',
                    value: 'develop@frankfiorante.com',
                    href: 'mailto:develop@frankfiorante.com',
                  },
                  {
                    icon: GithubIcon,
                    label: 'GitHub',
                    value: 'github.com/frankfiorante',
                    href: 'https://github.com/frankfiorante',
                  },
                  {
                    icon: LinkedinIcon,
                    label: 'LinkedIn',
                    value: 'linkedin.com/in/frankfiorante',
                    href: 'https://www.linkedin.com/in/frankfiorante/',
                  },
                  {
                    icon: MapPin,
                    label: 'Location',
                    value: 'Chicago, IL',
                    href: null,
                  },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: 'rgba(99,102,241,0.1)' }}
                    >
                      <Icon size={16} style={{ color: '#818cf8' }} />
                    </div>
                    <div>
                      <p className="text-xs" style={{ color: '#8888aa' }}>
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          target={href.startsWith('http') ? '_blank' : undefined}
                          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-sm font-medium text-white/80 hover:text-white transition-colors"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-white/80">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div
              className="rounded-2xl p-6"
              style={{
                background: 'rgba(15,15,26,0.8)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              <h3 className="font-semibold text-white/90 mb-2">Response Time</h3>
              <p className="text-sm" style={{ color: '#8888aa' }}>
                I typically respond within 24 hours. For urgent matters, email directly.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
