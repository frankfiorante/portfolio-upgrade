'use client';

import { Project } from '@/data/projects';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from './social-icons';

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative rounded-2xl p-6 transition-all duration-300 flex flex-col gap-4"
      style={{
        background: 'rgba(15,15,26,0.8)',
        border: '1px solid rgba(255,255,255,0.06)',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(99,102,241,0.2)';
        (e.currentTarget as HTMLElement).style.background = 'rgba(15,15,26,1)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.06)';
        (e.currentTarget as HTMLElement).style.background = 'rgba(15,15,26,0.8)';
      }}
    >
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background:
            'radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(99,102,241,0.04), transparent 40%)',
        }}
      />

      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-semibold text-white/90 text-base">{project.title}</h3>
          {project.metrics && (
            <p className="text-xs mt-1" style={{ color: '#34d399' }}>
              {project.metrics}
            </p>
          )}
        </div>
        <div className="flex gap-2 shrink-0">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg transition-colors"
              style={{ color: '#8888aa' }}
              aria-label="GitHub"
            >
              <GithubIcon width={16} height={16} />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg transition-colors"
              style={{ color: '#8888aa' }}
              aria-label="Demo"
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>

      <p className="text-sm leading-relaxed" style={{ color: '#8888aa' }}>
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5">
        {project.tech.slice(0, 5).map((t) => (
          <span
            key={t}
            className="px-2.5 py-0.5 rounded-full text-xs"
            style={{
              background: 'rgba(99,102,241,0.08)',
              border: '1px solid rgba(99,102,241,0.12)',
              color: '#818cf8',
            }}
          >
            {t}
          </span>
        ))}
        {project.tech.length > 5 && (
          <span className="px-2.5 py-0.5 text-xs" style={{ color: '#8888aa' }}>
            +{project.tech.length - 5} more
          </span>
        )}
      </div>
    </motion.article>
  );
}
