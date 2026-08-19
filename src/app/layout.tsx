import type { Metadata, Viewport } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import { site } from "@/data/site";
import "./globals.css";

const sans = Outfit({
  variable: "--font-sans-custom",
  subsets: ["latin"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono-custom",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://suyogvarpe.dev"),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s · ${site.name}`,
  },
  description: site.intro,
  keywords: [
    "Full Stack Developer",
    "Freelance Developer",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "Pune",
    "Suyog Varpe",
  ],
  authors: [{ name: site.fullName }],
  creator: site.fullName,
  openGraph: {
    type: "website",
    locale: "en_IN",
    title: `${site.name} — ${site.role}`,
    description: site.tagline,
    siteName: `${site.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description: site.tagline,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#07080c" },
    { media: "(prefers-color-scheme: light)", color: "#f7f8fb" },
  ],
};

/**
 * Runs before paint so the stored theme is applied without a flash of the
 * wrong colour scheme.
 */
const themeScript = `
(function(){
  try {
    var stored = localStorage.getItem('theme');
    var theme = stored || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
    document.documentElement.setAttribute('data-theme', theme);
  } catch (e) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${sans.variable} ${mono.variable}`}>
        <div className="ambient" aria-hidden="true">
          <div className="aurora aurora-1" />
          <div className="aurora aurora-2" />
        </div>
        {children}
      </body>
    </html>
  );
}
