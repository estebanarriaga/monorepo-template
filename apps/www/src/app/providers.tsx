"use client";

import { ThemeProvider } from "@/components/theme-provider";
import type { ReactNode } from "react";

type ProviderProps = {
  locale: string;
  children: ReactNode;
};

export function Providers({ children }: ProviderProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}
