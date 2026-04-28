import type { Metadata } from 'next';
import { FadeIn } from '@/components/fade-in';
import { SkillsGrid } from '@/components/skills-grid';
import { ExperienceTimeline } from '@/components/experience-timeline';
import { Download, FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Resume',
  description:
    "Frank Fiorante's resume — Senior Software Engineer with 7+ years experience in Kotlin, Java, React, TypeScript, and cloud architecture.",
};

export default function Resume() {
  return (
    <div className="pt-24 max-w-6xl mx-auto px-6 pb-24">
      <div className="pt-12 pb-10">
        <FadeIn>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#c9a227' }}>
                Resume
              </p>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white/90">Frank Fiorante</h1>
              <p className="text-lg mt-2" style={{ color: '#8a7a68' }}>
                Senior Software Engineer · Chicago, IL
              </p>
            </div>
            <a
              href="Hyatt-Resume-2023.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all w-fit"
              style={{
                background: 'linear-gradient(135deg, #c9a227, #e2b83d)',
                color: '#0d0c0a',
                boxShadow: '0 0 30px rgba(201,162,39,0.3)',
              }}
            >
              <Download size={16} />
              Download PDF
            </a>
          </div>
        </FadeIn>
      </div>

      {/* PDF Preview */}
      <FadeIn delay={0.1}>
        <div
          className="rounded-2xl overflow-hidden mb-16"
          style={{
            border: '1px solid rgba(255,245,225,0.06)',
            background: 'rgba(19,18,16,0.8)',
          }}
        >
          <div
            className="px-6 py-4 flex items-center justify-between border-b"
            style={{ borderColor: 'rgba(255,245,225,0.06)' }}
          >
            <div className="flex items-center gap-2" style={{ color: '#8a7a68' }}>
              <FileText size={16} />
              <span className="text-sm">Hyatt-Resume-2023.pdf</span>
            </div>
            <a
              href="Hyatt-Resume-2023.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs px-3 py-1.5 rounded-lg transition-colors"
              style={{
                background: 'rgba(201,162,39,0.1)',
                color: '#c9a227',
                border: '1px solid rgba(201,162,39,0.2)',
              }}
            >
              Open in tab
            </a>
          </div>
          <div className="w-full" style={{ height: '680px' }}>
            <iframe src="Hyatt-Resume-2023.pdf" className="w-full h-full" title="Frank Fiorante Resume" />
          </div>
        </div>
      </FadeIn>

      {/* Career Snapshot */}
      <div className="mb-16">
        <FadeIn>
          <h2 className="text-xl font-bold text-white/90 mb-6">Career Snapshot</h2>
        </FadeIn>
        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          {[
            { label: 'Total Experience', value: '7+ years' },
            { label: 'Current Company', value: 'Hyatt' },
            { label: 'Location', value: 'Chicago, IL' },
          ].map((item, i) => (
            <FadeIn key={item.label} delay={i * 0.06}>
              <div
                className="rounded-xl p-5"
                style={{
                  background: 'rgba(19,18,16,0.8)',
                  border: '1px solid rgba(255,245,225,0.06)',
                }}
              >
                <p className="text-xs mb-1" style={{ color: '#8a7a68' }}>
                  {item.label}
                </p>
                <p className="text-lg font-semibold text-white/90">{item.value}</p>
              </div>
            </FadeIn>
          ))}
        </div>
        <ExperienceTimeline />
      </div>

      {/* Skills */}
      <div>
        <FadeIn>
          <h2 className="text-xl font-bold text-white/90 mb-6">Skills</h2>
        </FadeIn>
        <SkillsGrid />
      </div>
    </div>
  );
}
