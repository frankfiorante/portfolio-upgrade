'use client';

import { techMarquee } from '@/data/skills';

export function TechMarquee() {
  const items = [...techMarquee, ...techMarquee];

  return (
    <div className="relative overflow-hidden py-4 border-y" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
      <div
        className="absolute left-0 top-0 bottom-0 w-24 z-10"
        style={{
          background: 'linear-gradient(to right, #0d0c0a, transparent)',
        }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-24 z-10"
        style={{
          background: 'linear-gradient(to left, #0d0c0a, transparent)',
        }}
      />
      <div className="flex gap-6 animate-marquee w-max">
        {items.map((tech, i) => (
          <span
            key={i}
            className="px-4 py-1.5 rounded-full text-xs font-medium whitespace-nowrap"
            style={{
              background: 'rgba(201,162,39,0.07)',
              border: '1px solid rgba(201,162,39,0.12)',
              color: '#8a7a68',
            }}
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
