import type { Metadata } from "next";
import { Anton, Inter, Onest } from "next/font/google";
import { MotionRuntime } from "@/components/motion-runtime";
import "./globals.css";

const onest = Onest({ variable: "--font-onest", subsets: ["latin"] });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const anton = Anton({ variable: "--font-anton", subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: "Client — Proposal",
  description: "A reusable proposal website template.",
  openGraph: {
    title: "Client Proposal",
    description: "A reusable proposal website template.",
    type: "website",
    images: [{ url: "/placeholder-hero.svg", width: 1200, height: 630, alt: "Client proposal" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Client Proposal",
    description: "A reusable proposal website template.",
    images: ["/placeholder-hero.svg"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${onest.variable} ${inter.variable} ${anton.variable}`}>
        {children}
        <MotionRuntime />
        <script src="/vendor/gsap/gsap.min.js" defer />
        <script src="/vendor/gsap/CustomEase.min.js" defer />
        <script src="/vendor/gsap/SplitText.min.js" defer />
        <script src="/vendor/gsap/ScrollTrigger.min.js" defer />
        <script src="/logo-loader.js" defer />
        <script src="/proposal-motion.js" defer />
      </body>
    </html>
  );
}
