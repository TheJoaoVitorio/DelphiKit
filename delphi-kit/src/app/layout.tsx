import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "../components/Header/Header"
import PageTransition from "../components/PageTransition/PageTransition"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DelphiKit",
  description: "Link aggregator featuring Delphi repositories, visual components, and frameworks. Discover and share projects to streamline development and enhance your applications",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className={inter.className}>
        <Header />
        <main style={{ paddingTop: '80px' }}>
          <PageTransition>{children}</PageTransition>
        </main>
      </body>
    </html>
  );
}