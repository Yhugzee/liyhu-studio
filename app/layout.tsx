import "./globals.scss";
import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  fallback: [
    "system-ui",
    "Segoe UI",
    "Roboto",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  fallback: [
    "system-ui",
    "Segoe UI",
    "Roboto",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
  display: "swap",
});

export const metadata: Metadata = {
  title: { default: "LiYhu Studio", template: "%s | LiYhu Studio" },
  description: "Création de sites modernes et animés avec Next.js et GSAP.",
};

export const viewport: Viewport = {
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#020617" }],
};

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
    <body className={`${inter.variable} ${sora.variable} app-body`}>
    {children}
    </body>
    </html>
  );
}
