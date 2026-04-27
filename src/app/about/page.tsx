import type { Metadata } from "next";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { SkillsGrid } from "@/components/skills-grid";
import { FadeIn } from "@/components/fade-in";
import { education } from "@/data/experience";
import { GraduationCap } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description: "Senior Software Engineer with 7+ years building scalable full-stack systems. Kotlin, Java, React, TypeScript, and cloud architecture.",
};

export default function About() {
  return (
    <div className="pt-24 max-w-6xl mx-auto px-6 pb-24">
      {/* Header */}
      <div className="pt-12 pb-16 max-w-2xl">
        <FadeIn>
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: "#6366f1" }}
          >
            About Me
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white/90 mb-6">
            Engineering with intention.
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "#8888aa" }}>
            I&apos;m a full-stack engineer based in Chicago with 7+ years of experience building and shipping
            production systems. I specialize in JVM backends and modern React frontends — with experience across
            healthcare and hospitality at scale.
          </p>
        </FadeIn>
      </div>

      {/* Story */}
      <FadeIn>
        <div
          className="rounded-2xl p-8 mb-16"
          style={{
            background: "rgba(15,15,26,0.8)",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <h2 className="text-lg font-semibold text-white/90 mb-5">My Engineering Story</h2>
          <div className="prose max-w-none space-y-4 text-sm leading-relaxed" style={{ color: "#c8c8e8" }}>
            <p>
              I started my career at HCSC (Blue Cross Blue Shield of Illinois), where I interned and then grew into
              a full-time software developer role. Building Java Spring Boot APIs and React frontends for healthcare
              systems — where correctness matters — shaped how I think about reliability and testing.
            </p>
            <p>
              In 2021 I joined Hyatt Hotels Corporation as a full-stack product engineer. I&apos;ve since worked across
              the stack — improving Kotlin and Java microservices, building Next.js applications, integrating Azure AD
              authentication, and mentoring engineers joining the team. The work spans millions of guests globally,
              which makes getting it right worth the care it takes.
            </p>
            <p>
              Outside of code, I care deeply about the craft of engineering — clear documentation, useful abstractions,
              and mentoring engineers who are earlier in their careers than I am.
            </p>
          </div>
        </div>
      </FadeIn>

      {/* Philosophy */}
      <div className="grid md:grid-cols-3 gap-4 mb-16">
        {[
          {
            title: "Simplicity scales",
            body: "Complex systems fail in complex ways. I design for clarity first — the performance usually follows.",
            color: "#34d399",
          },
          {
            title: "Ship, measure, iterate",
            body: "Production is the only environment that matters. Get it there, watch it, and improve continuously.",
            color: "#60a5fa",
          },
          {
            title: "Code is communication",
            body: "The reader matters as much as the compiler. I write for the engineer who maintains it next.",
            color: "#a78bfa",
          },
        ].map((p, i) => (
          <FadeIn key={p.title} delay={i * 0.08}>
            <div
              className="rounded-2xl p-6 h-full"
              style={{
                background: "rgba(15,15,26,0.8)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div
                className="w-1 h-8 rounded-full mb-4"
                style={{ background: p.color }}
              />
              <h3 className="font-semibold text-white/90 mb-2">{p.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#8888aa" }}>
                {p.body}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Skills */}
      <div className="mb-16">
        <FadeIn>
          <h2 className="text-xl font-bold text-white/90 mb-6">Skills & Technologies</h2>
        </FadeIn>
        <SkillsGrid />
      </div>

      {/* Experience */}
      <div className="mb-16">
        <FadeIn>
          <h2 className="text-xl font-bold text-white/90 mb-8">Experience</h2>
        </FadeIn>
        <ExperienceTimeline />
      </div>

      {/* Education */}
      <FadeIn>
        <div
          className="rounded-2xl p-6 flex items-center gap-5"
          style={{
            background: "rgba(15,15,26,0.8)",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
            style={{ background: "rgba(99,102,241,0.1)", border: "1px solid rgba(99,102,241,0.2)" }}
          >
            <GraduationCap size={22} style={{ color: "#818cf8" }} />
          </div>
          <div>
            <p className="font-semibold text-white/90">{education.degree}</p>
            <p className="text-sm" style={{ color: "#8888aa" }}>
              {education.school} · {education.year}
            </p>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
