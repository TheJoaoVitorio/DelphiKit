import { Inter } from "next/font/google";
import "./globals.css";

import ClientLayout from "../components/ClientLayout/ClientLayout";
import { SearchProvider } from "../context/SearchContext";
import { Header } from "../components/Header/Header";
import PageTransition from "../components/PageTransition/PageTransition";
import { FloatingButtonAction } from "../components/FloatingButtonAction/FloatingButtonAction";
import { SearchModal } from "@/src/components/SearchModal/SearchModal";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning={true}>
      <body className={inter.className}>
        <ClientLayout>
          <SearchProvider>
            <Header />
            <main style={{ paddingTop: '80px' }}>
              <PageTransition>{children}</PageTransition>
            </main>
            <FloatingButtonAction />
            <SearchModal />
          </SearchProvider>
        </ClientLayout>
      </body>
    </html>
  );
}