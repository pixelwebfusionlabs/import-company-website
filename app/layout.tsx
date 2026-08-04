import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, JetBrains_Mono } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ThemeProvider } from "@/components/shared/theme-provider";
import { Toaster } from "sonner";
import { company } from "@/lib/content/company";
import { absoluteUrl, organizationJsonLd, localBusinessJsonLd } from "@/lib/seo/metadata";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

const sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(absoluteUrl()),
  title: {
    default: `${company.name} | ${company.tagline}`,
    template: `%s | ${company.name}`,
  },
  description: company.description,
  applicationName: company.name,
  authors: [{ name: company.name }],
  keywords: [
    "SN Factory",
    "Vehicle Parts Import",
    "Automotive Parts",
    "Elevator Installation",
    "Lift Supplier",
    "Industrial Hoists",
    "Home Accessories",
    "Import & Distribution",
    "Sri Lanka",
  ],
  openGraph: {
    type: "website",
    locale: "en_LK",
    url: absoluteUrl(),
    siteName: company.name,
    title: `${company.name} | ${company.tagline}`,
    description: company.description,
    images: [{ url: company.logo, alt: company.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${company.name} | ${company.tagline}`,
    description: company.description,
  },
  icons: {
    icon: company.logo,
    apple: company.logo,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${display.variable} ${sans.variable} ${mono.variable} h-full`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationJsonLd(), localBusinessJsonLd()]),
          }}
        />
        <ThemeProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <Toaster richColors position="top-right" closeButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
