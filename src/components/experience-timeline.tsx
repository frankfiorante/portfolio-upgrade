'use client';

import { experience } from '@/data/experience';
import { FadeIn } from './fade-in';
import { MapPin, Calendar } from 'lucide-react';

export function ExperienceTimeline() {
  return (
    <div className="relative">
      <div
        className="absolute left-4 top-2 bottom-2 w-px hidden md:block"
        style={{ background: 'linear-gradient(to bottom, rgba(201,162,39,0.4), transparent)' }}
      />

      <div className="flex flex-col gap-10">
        {experience.map((exp, i) => (
          <FadeIn key={i} delay={i * 0.1}>
            <div className="md:pl-14 relative">
              <div
                className="hidden md:block absolute left-2 top-1.5 w-4 h-4 rounded-full border-2 -translate-x-1/2"
                style={{
                  background: '#0d0c0a',
                  borderColor: '#c9a227',
                  boxShadow: '0 0 10px rgba(201,162,39,0.4)',
                }}
              />

              <div
                className="rounded-2xl p-6"
                style={{
                  background: 'rgba(19,18,16,0.8)',
                  border: '1px solid rgba(255,245,225,0.06)',
                }}
              >
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 className="font-semibold text-white/90">{exp.role}</h3>
                    <p className="text-sm font-medium" style={{ color: '#c9a227' }}>
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="flex items-center gap-1.5 text-xs" style={{ color: '#8a7a68' }}>
                      <Calendar size={12} />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs" style={{ color: '#8a7a68' }}>
                      <MapPin size={12} />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <p className="text-sm mb-4 leading-relaxed" style={{ color: '#8a7a68' }}>
                  {exp.description}
                </p>

                <ul className="flex flex-col gap-2 mb-4">
                  {exp.highlights.map((h, j) => (
                    <li key={j} className="flex gap-3 text-sm" style={{ color: '#d4cfc8' }}>
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: '#c9a227' }} />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-xs"
                      style={{
                        background: 'rgba(201,162,39,0.08)',
                        color: '#c9a227',
                        border: '1px solid rgba(201,162,39,0.1)',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
