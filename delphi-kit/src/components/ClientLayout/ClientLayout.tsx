'use client';

import { HydrationFix } from '../HydrationFix/HydrationFix';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HydrationFix />
      {children}
    </>
  );
}