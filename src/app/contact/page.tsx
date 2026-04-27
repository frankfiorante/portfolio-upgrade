"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/social-icons";
import { FadeIn } from "@/components/fade-in";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise(r => setTimeout(r, 1200));
    setStatus("sent");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const inputStyle = {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
    color: "#f0f0ff",
    borderRadius: "10px",
    padding: "12px 16px",
    width: "100%",
    fontSize: "14px",
    outline: "none",
    transition: "border-color 0.2s",
  };

  return (
    <div className="pt-24 max-w-6xl mx-auto px-6 pb-24">
      <div className="pt-12 pb-10 max-w-xl">
        <FadeIn>
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: "#6366f1" }}
          >
            Contact
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white/90 mb-4">
            Let&apos;s talk.
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "#8888aa" }}>
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
              background: "rgba(15,15,26,0.8)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            {status === "sent" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ background: "rgba(52,211,153,0.12)" }}
                >
                  <Send size={24} style={{ color: "#34d399" }} />
                </div>
                <h3 className="text-lg font-semibold text-white/90 mb-2">Message sent!</h3>
                <p className="text-sm" style={{ color: "#8888aa" }}>
                  I&apos;ll get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium" style={{ color: "#8888aa" }}>Name</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Frank Fiorante"
                      style={inputStyle}
                      onFocus={e => { e.currentTarget.style.borderColor = "rgba(99,102,241,0.4)"; }}
                      onBlur={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; }}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-medium" style={{ color: "#8888aa" }}>Email</label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="you@company.com"
                      style={inputStyle}
                      onFocus={e => { e.currentTarget.style.borderColor = "rgba(99,102,241,0.4)"; }}
                      onBlur={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; }}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium" style={{ color: "#8888aa" }}>Subject</label>
                  <input
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    placeholder="Senior Engineer Role at Acme"
                    style={inputStyle}
                    onFocus={e => { e.currentTarget.style.borderColor = "rgba(99,102,241,0.4)"; }}
                    onBlur={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; }}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium" style={{ color: "#8888aa" }}>Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about the role, your stack, and what you're building..."
                    style={{ ...inputStyle, resize: "vertical" }}
                    onFocus={e => { e.currentTarget.style.borderColor = "rgba(99,102,241,0.4)"; }}
                    onBlur={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; }}
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all disabled:opacity-60"
                  style={{
                    background: "linear-gradient(135deg, #6366f1, #818cf8)",
                    color: "#fff",
                    boxShadow: "0 0 30px rgba(99,102,241,0.25)",
                  }}
                >
                  {status === "sending" ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </FadeIn>

        {/* Sidebar */}
        <div className="md:col-span-2 flex flex-col gap-4">
          <FadeIn delay={0.15}>
            <div
              className="rounded-2xl p-6"
              style={{
                background: "rgba(15,15,26,0.8)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <h3 className="font-semibold text-white/90 mb-4">Direct Contact</h3>
              <div className="flex flex-col gap-4">
                {[
                  {
                    icon: Mail,
                    label: "Email",
                    value: "develop@frankfiorante.com",
                    href: "mailto:develop@frankfiorante.com",
                  },
                  {
                    icon: GithubIcon,
                    label: "GitHub",
                    value: "github.com/frankfiorante",
                    href: "https://github.com/frankfiorante",
                  },
                  {
                    icon: LinkedinIcon,
                    label: "LinkedIn",
                    value: "linkedin.com/in/frankfiorante",
                    href: "https://www.linkedin.com/in/frankfiorante/",
                  },
                  {
                    icon: MapPin,
                    label: "Location",
                    value: "Chicago, IL",
                    href: null,
                  },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: "rgba(99,102,241,0.1)" }}
                    >
                      <Icon size={16} style={{ color: "#818cf8" }} />
                    </div>
                    <div>
                      <p className="text-xs" style={{ color: "#8888aa" }}>{label}</p>
                      {href ? (
                        <a
                          href={href}
                          target={href.startsWith("http") ? "_blank" : undefined}
                          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
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
                background: "rgba(15,15,26,0.8)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <h3 className="font-semibold text-white/90 mb-2">Response Time</h3>
              <p className="text-sm" style={{ color: "#8888aa" }}>
                I typically respond within 24 hours. For urgent opportunities, email directly.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
