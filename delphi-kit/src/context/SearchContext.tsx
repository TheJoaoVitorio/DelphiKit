"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import { BaseType } from "@/src/types/baseType/baseType.types";
import libraryService from "@/src/services/libraryService";
import frameworkService from "@/src/services/frameworkService";

type SearchContextType = {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  searchResults: (BaseType & { type: string })[];
  performSearch: () => void;
};

const SearchContext = createContext<SearchContextType>({
  isModalOpen: false,
  openModal: () => {},
  closeModal: () => {},
  searchTerm: "",
  setSearchTerm: () => {},
  searchResults: [],
  performSearch: () => {},
});

export const useSearchContext = () => useContext(SearchContext);

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<(BaseType & { type: string })[]>([]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const performSearch = useCallback(() => {
    if (!searchTerm.trim()) {
      setSearchResults([]);
      return;
    }

    const term = searchTerm.toLowerCase();
    
    // Buscar nas bibliotecas
    const libraries = libraryService().getLibraryData().filter(lib => 
      lib.name.toLowerCase().includes(term) || 
      lib.description.toLowerCase().includes(term) ||
      lib.tags.some(tag => tag.toLowerCase().includes(term))
    );
    
    // Buscar nos frameworks
    const frameworks = frameworkService().getFrameworksData().filter(framework => 
      framework.name.toLowerCase().includes(term) || 
      framework.description.toLowerCase().includes(term) ||
      framework.tags.some(tag => tag.toLowerCase().includes(term))
    );
    
    // Combinar resultados
    setSearchResults([...libraries, ...frameworks]);
  }, [searchTerm]);

  return (
    <SearchContext.Provider 
      value={{
        isModalOpen,
        openModal,
        closeModal,
        searchTerm,
        setSearchTerm,
        searchResults,
        performSearch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};