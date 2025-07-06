import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ScrollProgress } from "@/components/ui/scroll-progress"

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "SACRED MAYHEM - Luxury Streetwear Revolution",
  description:
    "Where mythology meets streetwear. Transcend the ordinary with our divine collection of luxury streetwear inspired by ancient gods and modern rebellion. Join 50,000+ rebels in the Sacred Mayhem cult.",
  keywords:
    "luxury streetwear, mythology fashion, limited edition, designer clothing, premium streetwear, sacred mayhem, divine rebellion",
  openGraph: {
    title: "SACRED MAYHEM - Luxury Streetwear Revolution",
    description: "Where mythology meets streetwear. Transcend the ordinary.",
    images: ["/og-image.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SACRED MAYHEM - Luxury Streetwear Revolution",
    description: "Where mythology meets streetwear. Transcend the ordinary.",
    images: ["/og-image.jpg"],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ScrollProgress />
        {children}
      </body>
    </html>
  )
}
