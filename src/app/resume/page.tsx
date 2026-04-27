import type { Metadata } from "next";
import { FadeIn } from "@/components/fade-in";
import { SkillsGrid } from "@/components/skills-grid";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { Download, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Resume",
  description: "Frank Fiorante's resume — Senior Software Engineer with 7+ years experience in Kotlin, Java, React, TypeScript, and cloud architecture.",
};

export default function Resume() {
  return (
    <div className="pt-24 max-w-6xl mx-auto px-6 pb-24">
      <div className="pt-12 pb-10">
        <FadeIn>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-2">
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: "#6366f1" }}
              >
                Resume
              </p>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white/90">
                Frank Fiorante
              </h1>
              <p className="text-lg mt-2" style={{ color: "#8888aa" }}>
                Senior Software Engineer · Chicago, IL
              </p>
            </div>
            <a
              href="Hyatt-Resume-2023.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all w-fit"
              style={{
                background: "linear-gradient(135deg, #6366f1, #818cf8)",
                color: "#fff",
                boxShadow: "0 0 30px rgba(99,102,241,0.3)",
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
            border: "1px solid rgba(255,255,255,0.06)",
            background: "rgba(15,15,26,0.8)",
          }}
        >
          <div
            className="px-6 py-4 flex items-center justify-between border-b"
            style={{ borderColor: "rgba(255,255,255,0.06)" }}
          >
            <div className="flex items-center gap-2" style={{ color: "#8888aa" }}>
              <FileText size={16} />
              <span className="text-sm">Hyatt-Resume-2023.pdf</span>
            </div>
            <a
              href="Hyatt-Resume-2023.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs px-3 py-1.5 rounded-lg transition-colors"
              style={{
                background: "rgba(99,102,241,0.1)",
                color: "#818cf8",
                border: "1px solid rgba(99,102,241,0.2)",
              }}
            >
              Open in tab
            </a>
          </div>
          <div className="w-full" style={{ height: "680px" }}>
            <iframe
              src="Hyatt-Resume-2023.pdf"
              className="w-full h-full"
              title="Frank Fiorante Resume"
            />
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
            { label: "Total Experience", value: "7+ years" },
            { label: "Current Company", value: "Hyatt" },
            { label: "Location", value: "Chicago, IL" },
          ].map((item, i) => (
            <FadeIn key={item.label} delay={i * 0.06}>
              <div
                className="rounded-xl p-5"
                style={{
                  background: "rgba(15,15,26,0.8)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <p className="text-xs mb-1" style={{ color: "#8888aa" }}>{item.label}</p>
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
