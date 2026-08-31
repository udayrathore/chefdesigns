import type { Metadata } from "next";
import { Anton, Inter, Onest } from "next/font/google";
import { MotionRuntime } from "@/components/motion-runtime";
import "./globals.css";

const onest = Onest({ variable: "--font-onest", subsets: ["latin"] });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const anton = Anton({ variable: "--font-anton", subsets: ["latin"], weight: "400" });

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  process.env.VERCEL_PROJECT_PRODUCTION_URL ??
  process.env.VERCEL_URL ??
  "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl.startsWith("http") ? siteUrl : `https://${siteUrl}`),
  title: "Chef Designs | Website Proposal by ArtWorksIT",
  description: "A website proposal uniting Chef Designs' hospitality solutions, professional kitchen products, project portfolio and trade enquiries.",
  openGraph: {
    title: "Chef Designs | Website Proposal by ArtWorksIT",
    description: "A website proposal uniting Chef Designs' hospitality solutions, professional kitchen products, project portfolio and trade enquiries.",
    type: "website",
    images: [{ url: "/chef-designs-og.jpg", width: 1200, height: 630, alt: "Chef Designs website proposal cover" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chef Designs | Website Proposal by ArtWorksIT",
    description: "A website proposal uniting Chef Designs' hospitality solutions, professional kitchen products, project portfolio and trade enquiries.",
    images: ["/chef-designs-og.jpg"],
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
