import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Oxanium } from "next/font/google";
import MouseMoveEffect from "@/components/mouse-move-effect";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const oxanium = Oxanium({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // Choose weights you need
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={oxanium.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark">
          <MouseMoveEffect />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
