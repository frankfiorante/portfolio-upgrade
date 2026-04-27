"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, TrendingUp, Users, Zap, Code2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/social-icons";
import { TechMarquee } from "@/components/tech-marquee";
import { FadeIn } from "@/components/fade-in";

const highlights = [
  {
    icon: TrendingUp,
    label: "Impact",
    value: "10M+ req/day",
    description: "APIs designed & scaled",
    color: "#34d399",
  },
  {
    icon: Users,
    label: "Scale",
    value: "50k+ users",
    description: "Production systems serving",
    color: "#60a5fa",
  },
  {
    icon: Zap,
    label: "Performance",
    value: "60% faster",
    description: "API response improvements",
    color: "#a78bfa",
  },
  {
    icon: Code2,
    label: "Experience",
    value: "7+ years",
    description: "Full-stack engineering",
    color: "#fb923c",
  },
];

export default function Home() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative max-w-6xl mx-auto px-6 pt-20 pb-32 overflow-hidden">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(ellipse, rgba(99,102,241,0.12) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />

        <div className="relative z-10 max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.06 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] mb-6"
          >
            <span style={{ color: "#f0f0ff" }}>Senior Software</span>
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #818cf8 0%, #6366f1 40%, #a78bfa 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Engineer
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="text-lg md:text-xl leading-relaxed max-w-xl mb-10"
            style={{ color: "#8888aa" }}
          >
            I build scalable full-stack systems — from high-throughput Kotlin/Java backends to
            polished React frontends. 7+ years shipping production software.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18 }}
            className="flex flex-wrap gap-3"
          >
            <Link
              href="/resume"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200"
              style={{
                background: "rgba(255,255,255,0.06)",
                color: "#f0f0ff",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <Download size={16} />
              Resume
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all"
              style={{
                color: "#8888aa",
              }}
            >
              Contact Me
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex gap-4 mt-10"
          >
            {[
              { href: "https://github.com/frankfiorante", icon: GithubIcon, label: "GitHub" },
              { href: "https://www.linkedin.com/in/frankfiorante/", icon: LinkedinIcon, label: "LinkedIn" },
              { href: "mailto:develop@frankfiorante.com", icon: Mail, label: "Email" },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="p-2 rounded-lg transition-colors"
                style={{ color: "#8888aa" }}
                aria-label={label}
              >
                <Icon size={20} />
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tech Marquee */}
      <TechMarquee />

      {/* Highlights */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <FadeIn>
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-8"
            style={{ color: "#6366f1" }}
          >
            Career Highlights
          </p>
        </FadeIn>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map((h, i) => (
            <FadeIn key={h.label} delay={i * 0.07}>
              <div
                className="rounded-2xl p-6 transition-all duration-300"
                style={{
                  background: "rgba(15,15,26,0.8)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <h.icon size={20} style={{ color: h.color }} className="mb-4" />
                <p
                  className="text-2xl font-bold tracking-tight mb-1"
                  style={{ color: h.color }}
                >
                  {h.value}
                </p>
                <p className="text-sm font-medium text-white/80">{h.label}</p>
                <p className="text-xs mt-1" style={{ color: "#8888aa" }}>
                  {h.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <FadeIn>
          <div
            className="rounded-3xl p-10 md:p-16 text-center relative overflow-hidden"
            style={{
              background: "rgba(15,15,26,0.8)",
              border: "1px solid rgba(99,102,241,0.2)",
            }}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "radial-gradient(600px circle at 50% 0%, rgba(99,102,241,0.1), transparent 60%)",
              }}
            />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white/90 mb-4">
                Let&apos;s build something great.
              </h2>
              <p className="text-lg mb-8 max-w-md mx-auto" style={{ color: "#8888aa" }}>
                Have a project, question, or just want to connect? I&apos;d love to hear from you.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold transition-all"
                style={{
                  background: "linear-gradient(135deg, #6366f1, #818cf8)",
                  color: "#fff",
                  boxShadow: "0 0 40px rgba(99,102,241,0.3)",
                }}
              >
                Get in touch
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
