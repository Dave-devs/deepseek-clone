import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ClerkProvider } from "@clerk/nextjs"
import { AppContextProvider } from "@/context/AppContext";

const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Davedevs | DeepSeek Clone",
  description: "Experience state-of-the-art language processing with our DeepSeek models. Powerful, accurate, and built for complex reasoning.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ClerkProvider>
        <AppContextProvider>
        <html lang="en" suppressHydrationWarning>
          <body
            className={`${inter.className} antialiased`}
          >
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {children}
            </ThemeProvider>
          </body>
        </html>
        </AppContextProvider>
      </ClerkProvider>
    </>
  );
}
