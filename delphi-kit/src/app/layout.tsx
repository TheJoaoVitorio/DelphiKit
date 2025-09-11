"use client";

import { SearchProvider, useSearchContext } from "../context/SearchContext";

import { Inter } from "next/font/google";
import {Search} from 'lucide-react';
import "./globals.css";

import { Header } from "../components/Header/Header"
import { FloatingButton } from '@/src/components/FloatingButton/FloatingButton'
import PageTransition from "../components/PageTransition/PageTransition"
import { SearchModal } from "@/src/components/SearchModal/SearchModal"


const inter = Inter({ subsets: ["latin"] });

function FloatingButtonAction(){
  const { openModal } = useSearchContext();
  return <FloatingButton onClick={openModal} icon={<Search />} />;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className={inter.className}>
        <SearchProvider>
          <Header />
          <main style={{ paddingTop: '80px' }}>
            <PageTransition>{children}</PageTransition>
          </main>
          <FloatingButtonAction />
          <SearchModal />
        </SearchProvider>
      </body>
    </html>
  );
}