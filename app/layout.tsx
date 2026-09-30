import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sameyol | Writer & Content Creator",
  description:
    "Sameyol is a writer and content creator specializing in blog writing, SEO content, website copy, social media content, technical writing, and historical storytelling.",
  keywords: [
    "writer",
    "content writer",
    "SEO writer",
    "blog writer",
    "content creator",
    "technical writer",
    "historical writer",
    "social media writer",
  ],
  authors: [{ name: "Sameyol" }],
  creator: "Sameyol",
  openGraph: {
    title: "Sameyol | Writer & Content Creator",
    description:
      "Research-driven writing, engaging storytelling, and clear content for businesses, brands, and audiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}