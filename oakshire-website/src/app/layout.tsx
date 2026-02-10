import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";

import { Navbar } from "~/components/navbar";
import { Footer } from "~/components/footer";

export const metadata: Metadata = {
  title: "Oakshire Labs | Enterprise Software Development & AI/ML Solutions",
  description:
    "We build AI-powered software for Fortune 500 banks, cruise lines, and fintech companies. React, Node.js, Python, TensorFlow. Proven track record with ₹13,000+ Cr processed.",
  keywords: [
    "enterprise software development",
    "AI ML development",
    "fintech software",
    "React development",
    "Node.js developers",
    "banking software",
    "custom software India",
    "offshore development",
  ],
  openGraph: {
    title: "Enterprise Software Development & AI/ML Solutions",
    description:
      "Trusted by Fintech Bank, Cordelia Cruises, and leading fintech companies.",
    type: "website",
  },
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
