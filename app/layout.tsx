import type { Metadata } from "next"
import "./globals.css"
import React from "react"
import { Analytics } from "@vercel/analytics/react"
import { GeistSans } from "geist/font/sans"

export const metadata: Metadata = {
  title: "Kevin Pek's Website",
  description: "Kevin's personal website and portfolio.",
  keywords: ["software engineer", "machine learning", "NUS", "computer science", "data science", "statistics", "math", "react", "nextjs", "tailwindcss"],
  manifest: "manifest.json",
  openGraph: {
    images: "/favicon-32x32.png"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={GeistSans.className}>{children}</body>
      <Analytics />
    </html>
  )
}
