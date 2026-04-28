'use client';

import { skillCategories } from '@/data/skills';
import { FadeIn } from './fade-in';

export function SkillsGrid() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {skillCategories.map((cat, i) => (
        <FadeIn key={cat.name} delay={i * 0.06}>
          <div
            className="rounded-xl p-5"
            style={{
              background: 'rgba(19,18,16,0.8)',
              border: '1px solid rgba(255,245,225,0.06)',
            }}
          >
            <h3 className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#c9a227' }}>
              {cat.name}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 rounded-lg text-sm"
                  style={{
                    background: 'rgba(255,245,225,0.04)',
                    color: '#d4cfc8',
                    border: '1px solid rgba(255,245,225,0.06)',
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
      ))}
    </div>
  );
}
