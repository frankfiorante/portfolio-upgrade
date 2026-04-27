import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Frank Fiorante — Senior Software Engineer",
    template: "%s · Frank Fiorante",
  },
  description:
    "Senior Software Engineer specializing in full-stack architecture, Kotlin/Java backends, and modern React frontends. Building scalable systems at Hyatt.",
  keywords: ["software engineer", "full-stack", "Kotlin", "React", "Next.js", "TypeScript", "Spring Boot"],
  authors: [{ name: "Frank Fiorante" }],
  creator: "Frank Fiorante",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Frank Fiorante",
    title: "Frank Fiorante — Senior Software Engineer",
    description: "Senior Software Engineer specializing in full-stack architecture, Kotlin/Java backends, and modern React frontends.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Frank Fiorante — Senior Software Engineer",
    description: "Senior Software Engineer specializing in full-stack architecture, Kotlin/Java backends, and modern React frontends.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" style={{ background: "#080810" }}>
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
