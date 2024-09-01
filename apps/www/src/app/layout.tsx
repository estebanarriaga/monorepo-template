import "@/styles/globals.css";
import { cn } from "@monorepo-template/ui/cn";
import "@monorepo-template/ui/globals.css";
import { Toaster } from "@monorepo-template/ui/sonner";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import type { ReactElement } from "react";

export const metadata: Metadata = {
  metadataBase: new URL("https://monorepo.com"),
  title: "Monorepo | Run your business smarter",
  description:
    "Automate financial tasks, stay organized, and make informed decisions effortlessly.",
  twitter: {
    title: "Monorepo | Run your business smarter",
    description:
      "Automate financial tasks, stay organized, and make informed decisions effortlessly.",
    images: [
      {
        url: "",
        width: 800,
        height: 600,
      },
      {
        url: "",
        width: 1800,
        height: 1600,
      },
    ],
  },
  openGraph: {
    title: "Monorepo | Run your business smarter",
    description:
      "Automate financial tasks, stay organized, and make informed decisions effortlessly.",
    url: "https://monorepo.com",
    siteName: "Monorepo",
    images: [
      {
        url: "",
        width: 800,
        height: 600,
      },
      {
        url: "",
        width: 1800,
        height: 1600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: [
    { media: "(prefers-color-scheme: light)" },
    { media: "(prefers-color-scheme: dark)" },
  ],
};

export default function Layout({
  children,
}: {
  children: ReactElement;
}) {
  return (
    <html lang={"en"} suppressHydrationWarning>
      <body
        className={cn(
          `${GeistSans.variable} ${GeistMono.variable}`,
          "whitespace-pre-line overscroll-none",
        )}
      >
        {children}
        <Toaster />
        {/* <Analytics /> */}
      </body>
    </html>
  );
}
