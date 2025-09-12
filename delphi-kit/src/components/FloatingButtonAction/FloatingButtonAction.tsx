"use client";

import { Search } from 'lucide-react';
import { useSearchContext } from '@/src/context/SearchContext';
import { FloatingButton } from '@/src/components/FloatingButton/FloatingButton';

export function FloatingButtonAction() {
  const { openModal } = useSearchContext();
  return <FloatingButton onClick={openModal} icon={<Search />} />;
}